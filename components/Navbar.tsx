'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: '2026', href: '#2026' },
  { name: 'ABOUT', href: '#about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[90%] max-w-6xl backdrop-blur-md border rounded-full py-3 ${
        isScrolled 
          ? 'bg-zinc-950/40 border-white/10 shadow-2xl' 
          : 'bg-zinc-950/20 border-white/5'
      }`}
    >
      <div className="px-5 md:px-8 flex justify-between items-center">
        <Link href="/" className="text-lg font-display font-bold tracking-tighter flex items-center gap-1 leading-none group">
          <span className="text-zinc-50 group-hover:text-zinc-400 transition-colors">ISRAEL</span>
          <span className={`transition-colors text-sky-500 group-hover:text-sky-400`}>AMEDU</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs font-bold tracking-[0.2em] transition-colors uppercase text-zinc-200 hover:text-zinc-50`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className={`bg-zinc-50 text-zinc-950 text-xs font-bold px-5 py-2 rounded-full hover:bg-zinc-300 transition-all tracking-widest uppercase shadow-md hover:shadow-lg`}
          >
            GET IN TOUCH
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden w-8 h-8 flex items-center justify-center rounded-full border transition-colors bg-zinc-800/50 border-zinc-700 text-zinc-50`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-full mt-4 left-0 right-0 bg-zinc-950/95 border border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col gap-6 md:hidden overflow-hidden shadow-2xl backdrop-blur-xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-50" />
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold tracking-widest uppercase text-zinc-200 hover:text-zinc-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-zinc-50 text-zinc-950 text-xs font-bold px-6 py-4 rounded-2xl text-center tracking-[0.2em] uppercase shadow-md hover:bg-zinc-200 transition-colors"
            >
              START A PROJECT
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
