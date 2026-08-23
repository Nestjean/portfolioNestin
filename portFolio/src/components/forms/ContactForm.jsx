import { motion } from 'framer-motion';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import FormStatusMessage from './FormStatusMessage';
import Button from '../ui/Button';
import useContactForm from '../../hooks/useContactForm';
import { fadeInUp } from '../../animations/variants/fadeIn';

export default function ContactForm() {
  const { values, errors, status, handleChange, handleSubmit } = useContactForm();
  const isSending = status === 'sending';

  return (
    <motion.form
      variants={fadeInUp}
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-bg-surface p-6 md:p-8"
    >
      {/* Honeypot — invisible to sighted and screen-reader users, catches basic bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" value={values.company} onChange={handleChange('company')} />
      </div>

      <InputField id="name" label="Name" type="text" placeholder="Your Name" autoComplete="name" value={values.name} onChange={handleChange('name')} error={errors.name} />
      <InputField id="email" label="Email" type="email" placeholder="Your Email" autoComplete="email" value={values.email} onChange={handleChange('email')} error={errors.email} />
      <InputField id="subject" label="Subject" type="text" placeholder="Subject" value={values.subject} onChange={handleChange('subject')} error={errors.subject} />
      <TextAreaField id="message" label="Message" placeholder="Write your message..." rows={6} value={values.message} onChange={handleChange('message')} error={errors.message} />

      <FormStatusMessage status={status} />

      <Button type="submit" variant="primary" disabled={isSending}>
        {isSending ? 'Sending...' : 'Send Message'}
      </Button>
    </motion.form>
  );
}