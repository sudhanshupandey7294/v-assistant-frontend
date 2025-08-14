
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import anva from '../assets/anva.png'; // Your logo path

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#how', label: 'How it works' },
  // { href: '#team', label: 'Team' },
  // { href: '#testimonials', label: 'Testimonials' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Animation variants here (keep your original or simplify)

  return (
    <header className="sticky top-0 z-50 bg-neutral-900/90 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,255,0.4)] border border-cyan-600 rounded-b-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <motion.img
            src={anva}
            alt="A9VA Logo"
            className="w-14 h-14 rounded-full object-cover shadow-cyan-500/80 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
          />
          <motion.span
            className="font-extrabold text-3xl select-none text-cyan-400 drop-shadow-[0_0_8px_cyan]"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            A9VA
          </motion.span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-base font-semibold tracking-wide text-cyan-300">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative group cursor-pointer transition-all duration-300
                         hover:text-white hover:drop-shadow-[0_0_10px_cyan] hover:scale-105"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
            >
              {link.label}
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 rounded transition-all duration-300 group-hover:w-full"
              />
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            className="relative px-6 py-2 rounded-full font-semibold text-cyan-300 bg-neutral-800 border border-cyan-500 shadow-inner shadow-black/60
                       hover:shadow-[0_0_20px_4px_rgba(0,255,255,0.6)] hover:text-white hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.1 + 0.3 }}
          >
            Get Started
          </motion.a>
        </nav>

        {/* Hamburger Button for Mobile */}
        <motion.div className="md:hidden">
          <motion.button
            onClick={() => setOpen((v) => !v)}
            aria-label="toggle menu"
            initial="closed"
            animate={open ? 'open' : 'closed'}
            className="focus:outline-none text-cyan-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
                animate={open ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-neutral-900 border-t border-cyan-600 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, transition: { duration: 0.3 } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.div className="flex flex-col px-6 py-4 gap-3 text-cyan-300">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="hover:text-white hover:drop-shadow-[0_0_10px_cyan]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="mt-2 px-4 py-2 rounded-full bg-neutral-800 border border-cyan-500 font-semibold shadow-inner shadow-black/60
                           hover:shadow-[0_0_20px_4px_rgba(0,255,255,0.6)] hover:text-white hover:scale-105 transition-all duration-300 text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                onClick={() => setOpen(false)}
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
