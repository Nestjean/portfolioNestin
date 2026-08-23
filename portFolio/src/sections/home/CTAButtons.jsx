import Button from '../../components/ui/Button';
import { ArrowRightIcon } from '../../components/icons';
import { Send } from 'lucide-react';

export default function CTAButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button to="/projects" variant="primary" icon={ArrowRightIcon}>
        View My Projects
      </Button>
      <Button to="/contact" variant="secondary" icon={Send}>
        Contact Me
      </Button>
    </div>
  );
}
