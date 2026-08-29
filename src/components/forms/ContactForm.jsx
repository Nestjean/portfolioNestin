import { motion } from 'framer-motion';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import FormStatusMessage from './FormStatusMessage';
import Button from '../ui/Button';
import useContactForm from '../../hooks/useContactForm';
import { fadeInUp } from '../../animations/variants/fadeIn';
import useLanguage from '../../context/useLanguage'; 
import { Send } from 'lucide-react';

export default function ContactForm() {
  const { values, errors, status, handleChange, handleSubmit } = useContactForm();
  const { t } = useLanguage();
  const isSending = status === 'sending';

  return (
    <motion.form variants={fadeInUp} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 rounded-3xl border border-border bg-bg-surface p-6 md:p-8">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" value={values.company} onChange={handleChange('company')} />
      </div>

      <InputField id="name" label={t('contact.form.name')} type="text" placeholder={t('contact.form.namePlaceholder')} autoComplete="name" value={values.name} onChange={handleChange('name')} error={errors.name} />
      <InputField id="email" label={t('contact.form.emailLabel')} type="email" placeholder={t('contact.form.emailPlaceholder')} autoComplete="email" value={values.email} onChange={handleChange('email')} error={errors.email} />
      <InputField id="subject" label={t('contact.form.subject')} type="text" placeholder={t('contact.form.subjectPlaceholder')} value={values.subject} onChange={handleChange('subject')} error={errors.subject} />
      <TextAreaField id="message" label={t('contact.form.message')} placeholder={t('contact.form.messagePlaceholder')} rows={6} value={values.message} onChange={handleChange('message')} error={errors.message} />

      <FormStatusMessage status={status} />

      <Button type="submit" variant="primary" disabled={isSending}>
        <span className="flex items-center justify-center gap-2">
        {isSending ? t('contact.form.sending') : t('contact.form.send')}
        <Send size={18} strokeWidth={2} />
        </span>
      </Button>
    </motion.form>
  );
}