import { useState } from 'react';
import { validateName, validateEmail, validateSubject, validateMessage } from '../utils/validators';
import { sendContactMessage } from '../services/api/contactService';

// `company` is the honeypot field — real visitors never see or fill it in.
const initialValues = { name: '', email: '', subject: '', message: '', company: '' };
const validators = { name: validateName, email: validateEmail, subject: validateSubject, message: validateMessage };

export default function useContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validateAll = () => {
    const nextErrors = {};
    Object.keys(validators).forEach((field) => {
      const message = validators[field](values[field]);
      if (message) nextErrors[field] = message;
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (values.company) {
      // Bot filled the honeypot — pretend success, send nothing.
      setStatus('success');
      return;
    }

    if (!validateAll()) return;

    setStatus('sending');
    try {
      await sendContactMessage(values);
      setStatus('success');
      setValues(initialValues);
    } catch {
      setStatus('error');
    }
  };

  return { values, errors, status, handleChange, handleSubmit };
}