// Talks only to our own /api/contact endpoint — no external keys or
// service URLs live here, so there's nothing sensitive in this file.
export async function sendContactMessage({ name, email, subject, message, company }) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, subject, message, company }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
}