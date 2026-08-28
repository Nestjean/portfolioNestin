// Vercel Serverless Function. Runs on Vercel's servers, never in the
// browser — RESEND_API_KEY, CONTACT_EMAIL, and CONTACT_FROM_EMAIL are read
// from process.env here and are never bundled into the client.

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

// Best-effort, in-memory rate limit. Serverless functions are stateless
// across cold starts and regions, so this resets often — it's a light
// deterrent, not a real rate limiter. For stronger protection later,
// back this with a shared store (e.g. Upstash Redis).
const submissions = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = submissions.get(ip) ?? { count: 0, windowStart: now };
  if (now - entry.windowStart > WINDOW_MS) {
    entry.count = 0;
    entry.windowStart = now;
  }
  entry.count += 1;
  submissions.set(ip, entry);
  return entry.count > MAX_PER_WINDOW;
}

// Escapes user input before it's interpolated into the email's HTML,
// preventing a visitor from injecting markup into the message you receive.
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  const { name, email, subject, message, company } = req.body ?? {};

  // Honeypot: silently accept without sending — real visitors never fill this in.
  if (company) {
    return res.status(200).json({ success: true });
  }

  // Server-side validation — the client's checks can always be bypassed.
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!isValidEmail(email.trim())) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const { RESEND_API_KEY, CONTACT_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error('Missing email configuration environment variables');
    return res.status(500).json({ error: 'Server not configured' });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeSubject = escapeHtml(subject.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br />');

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_EMAIL],
        reply_to: email.trim(),
        subject: `Portfolio Contact: ${subject.trim()}`,
        html: `
          <p><strong>From:</strong> ${safeName} (${safeEmail})</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error('Resend API error:', await response.text());
      return res.status(502).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}