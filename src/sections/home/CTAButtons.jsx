import Button from '../../components/ui/Button';
import { ArrowRightIcon } from '../../components/icons';
import useLanguage from '../../context/useLanguage'; 
import { Send } from 'lucide-react';

export default function CTAButtons() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button to="/projects" variant="primary" icon={ArrowRightIcon}>{t('common.viewProjects')}</Button>
      <Button to="/contact" variant="secondary" icon={Send}>{t('common.contactMe')}</Button>
    </div>
  );
}