import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenResume }: { onOpenResume: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'projects', 'experience', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topPos,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/40 border-b border-border/80'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo with magnetic hover feel */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsOpen(false);
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="font-headline text-xl font-bold text-primary tracking-tight flex items-center gap-2 group py-2"
        >
          <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
          <span className="bg-gradient-to-r from-text-primary via-text-primary to-primary bg-clip-text text-transparent">
            P. Rahul Reddy
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-surface/40 p-1.5 rounded-full border border-border/60 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSectionIndicator"
                    className="absolute inset-0 bg-primary/15 border border-primary/30 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn-primary text-sm px-5 py-2 flex items-center gap-1.5 shadow-md shadow-primary/10"
            onClick={(e) => {
              e.preventDefault();
              onOpenResume();
            }}
          >
            Resume <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-primary p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-surface rounded-lg transition-colors border border-border/50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border z-40"
          >
            <div className="container-custom py-6 flex flex-col gap-2">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-5 py-3.5 rounded-xl text-base font-medium transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-primary/15 text-primary border border-primary/30 font-semibold'
                        : 'text-text-secondary hover:text-primary hover:bg-surface'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-primary" />}
                  </motion.a>
                );
              })}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.35 }}
                className="mt-4 btn-primary w-full py-3.5 text-base flex items-center justify-center gap-2"
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
              >
                View Resume <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
