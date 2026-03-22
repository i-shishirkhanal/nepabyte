'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Page } from '../types';
import { Button } from './UI';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  // Removing currentPage and setPage as we'll use usePathname
}

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems: { label: string; href: string }[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Our Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ];

  const isCurrent = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] h-[68px] bg-[rgba(8,8,8,0.75)] backdrop-blur-[28px] border-b border-[rgba(255,255,255,0.07)]">
      <div className="max-w-[1440px] mx-auto h-full px-6 md:px-[10vw] flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/"
          className="flex items-center cursor-pointer" 
        >
          <span className="text-2xl font-serif font-bold tracking-tight">
            Nepa<span className="text-brand-orange">Byte</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[14px] font-medium transition-colors relative py-2 ${
                isCurrent(item.href) ? 'text-white' : 'text-[rgba(255,255,255,0.55)] hover:text-white'
              }`}
            >
              {item.label}
              {isCurrent(item.href) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button>Get a Free Demo</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[2000] bg-bg-black/95 backdrop-blur-xl flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-serif font-bold">Nepa<span className="text-brand-orange">Byte</span></span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-4xl font-serif text-left ${
                    isCurrent(item.href) ? 'text-brand-orange' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full py-6 text-xl">Get a Free Demo</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-[rgba(8,8,8,0.95)] border-t border-[rgba(255,255,255,0.07)] py-10 px-6 md:px-[10vw]">
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
      <div>
        <div className="flex items-center mb-2">
          <span className="text-xl font-serif font-bold">Nepa<span className="text-brand-orange">Byte</span></span>
        </div>
        <p className="text-[13px] text-[rgba(255,255,255,0.4)]">
          AI & Automation Agency. Kathmandu, Nepal.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-x-10 gap-y-4">
        <Link href="/" className="text-[13px] text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">Home</Link>
        <Link href="/services" className="text-[13px] text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">Services</Link>
        <Link href="/work" className="text-[13px] text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">Our Work</Link>
        <Link href="/about" className="text-[13px] text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">About</Link>
        <Link href="/contact" className="text-[13px] text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">Contact</Link>
      </div>

      <div className="flex gap-4">
        {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
          <div key={social} className="w-9 h-9 rounded-full glass flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-all cursor-pointer">
            <div className="w-4 h-4 bg-current rounded-sm" />
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-[1440px] mx-auto mt-10 pt-10 border-t border-[rgba(255,255,255,0.07)]">
      <p className="text-[12px] text-[rgba(255,255,255,0.3)]">
        © 2025 NepaByte. All rights reserved.
      </p>
    </div>
  </footer>
);

