import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, CloseIcon } from '../icons';

export default function FormStatusMessage({ status }) {
  const isSuccess = status === 'success';
  const isError = status === 'error';

  return (
    <AnimatePresence>
      {(isSuccess || isError) && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${
            isSuccess ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300' : 'border-red-400/30 bg-red-400/10 text-red-300'
          }`}
        >
          <span className="mt-0.5">{isSuccess ? <CheckIcon className="h-4 w-4" /> : <CloseIcon className="h-4 w-4" />}</span>
          <p>
            {isSuccess
              ? "Your message has been sent successfully. I'll get back to you as soon as possible."
              : 'Something went wrong while sending your message. Please try again.'}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}