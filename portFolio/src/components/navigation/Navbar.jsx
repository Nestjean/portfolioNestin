import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import Button from '../ui/Button';
import { MenuIcon, ArrowRightIcon } from '../icons';
import { navLinks } from '../../constants/navLinks';
import { siteConfig } from '../../constants/siteConfig';
import useScrollPosition from '../../hooks/useScrollPosition';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 8;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        isScrolled ? 'bg-bg-base/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="font-display text-xl font-bold tracking-tight text-ink-100" aria-label={`${siteConfig.name} — home`}>
          {siteConfig.initials}
          <span className="text-violet-400">.</span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} label={link.label} icon={link.icon} />
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button to="/contact" variant="secondary" icon={ArrowRightIcon}>
            Let's talk
          </Button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="rounded-full p-2 text-ink-100 md:hidden"
          aria-label="Open menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}
