"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";

const socials = [
  { name: "GitHub", href: personal.github },
  { name: "Twitter", href: personal.twitter },
  { name: "LinkedIn", href: personal.linkedin },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32"
    >
      <div className="text-center max-w-4xl">
        <motion.p
          className="section-label mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          04 — Contact
        </motion.p>

        <motion.h2
          className="heading-display mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Let&apos;s build something great together.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href={`mailto:${personal.email}`}
            className="contact-email"
            data-cursor="expand"
          >
            {personal.email}
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-10 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
              data-cursor="expand"
            >
              {s.name}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer / Copyright */}
      <motion.footer
        className="absolute bottom-8 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="font-mono text-[8px] uppercase tracking-[0.4em] text-[var(--fg-dim)]">
          © {new Date().getFullYear()} Olasode Sidiq. All rights reserved.
        </p>
      </motion.footer>
    </section>
  );
}
