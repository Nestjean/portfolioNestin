// Client-side checks for fast feedback. The server re-validates everything
// independently — client validation is never trusted on its own.

export function validateName(value) {
  if (!value.trim()) return 'Please enter your name.';
  if (value.trim().length < 2) return 'Please enter your full name.';
  return '';
}

export function validateEmail(value) {
  if (!value.trim()) return 'Please enter your email address.';
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value.trim())) return 'Please enter a valid email address.';
  return '';
}

export function validateSubject(value) {
  if (!value.trim()) return 'Please enter a subject.';
  return '';
}

export function validateMessage(value) {
  if (!value.trim()) return 'Please enter a message.';
  if (value.trim().length < 10) return 'Please add a little more detail to your message.';
  return '';
}