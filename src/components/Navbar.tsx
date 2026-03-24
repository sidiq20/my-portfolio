"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Reveal Navbar exactly after the Hero name finishes its slow reveal (around 4600ms)
    const timer = setTimeout(() => setShow(true), 4600);
    return () => clearTimeout(timer);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center"
        style={{ mixBlendMode: "difference" }}
      >
        <a
          href="#hero"
          className="font-display text-2xl font-light tracking-tight text-white"
          data-cursor="expand"
        >
          S.O.
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:opacity-40 transition-opacity duration-300"
              data-cursor="expand"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => document.documentElement.classList.toggle("theme-light")}
            className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:opacity-40 transition-opacity duration-300"
            data-cursor="magnetic"
          >
            [ Invert ]
          </button>
        </div>

        {/* Mobile toggle & theme */}
        <div className="md:hidden flex items-center gap-6 z-50">
          <button
            onClick={() => document.documentElement.classList.toggle("theme-light")}
            className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:opacity-40 transition-opacity"
          >
            [ Invert ]
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white"
            data-cursor="expand"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-12"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.05 + i * 0.06, duration: 0.5 }}
                className="font-display text-5xl font-light text-white hover:opacity-40 transition-opacity"
                data-cursor="expand"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
