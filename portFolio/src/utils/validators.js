// Returns a translation key (or '' when valid) instead of a hardcoded
// message, so the same validation logic works in both languages.
export function validateName(value) {
  if (!value.trim()) return 'contact.errors.nameRequired';
  if (value.trim().length < 2) return 'contact.errors.nameShort';
  return '';
}

export function validateEmail(value) {
  if (!value.trim()) return 'contact.errors.emailRequired';
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value.trim())) return 'contact.errors.emailInvalid';
  return '';
}

export function validateSubject(value) {
  if (!value.trim()) return 'contact.errors.subjectRequired';
  return '';
}

export function validateMessage(value) {
  if (!value.trim()) return 'contact.errors.messageRequired';
  if (value.trim().length < 10) return 'contact.errors.messageShort';
  return '';
}