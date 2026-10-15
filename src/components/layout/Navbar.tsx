import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button, cn } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Team', path: '/#team' },
  { name: 'Projects', path: '/projects' },
  { name: 'Events', path: '/events' },
  { name: 'Learning', path: '/learning' },
  { name: 'Idea Lab', path: '/idea-lab' },
  { name: 'Contact Us', path: '/#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#') && location.pathname === '/') {
      const targetId = path.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        // We let React Router change the hash normally by NOT preventing default
        // But we forcefully smooth scroll to the element.
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" onClick={() => window.scrollTo(0,0)} className="flex items-center gap-2 group">
          <img src={siteConfig.logo} alt="Club Logo" className="w-8 h-8 rounded-full border border-border group-hover:border-accent transition-colors object-cover" />
          <span className="font-display font-bold text-lg tracking-tight">
            SIMATS AI CLUB
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                (location.pathname === link.path || location.hash === link.path.replace('/', '')) ? "text-foreground" : "text-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="primary" size="sm" className="ml-4">
            <Link to="/#join" onClick={(e) => handleNavClick(e, '/#join')}>Join Us</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={cn(
                  "text-base font-medium transition-colors hover:text-accent",
                  (location.pathname === link.path || location.hash === link.path.replace('/', '')) ? "text-accent" : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#join"
              onClick={(e) => handleNavClick(e, '/#join')}
              className="text-base font-medium text-accent"
            >
              Join Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
