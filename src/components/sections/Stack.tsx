"use client";

import { motion } from "framer-motion";
import { stack } from "@/data/portfolio";

export function Stack() {
  // Split stack into two rows
  const mid = Math.ceil(stack.length / 2);
  const row1 = stack.slice(0, mid);
  const row2 = stack.slice(mid);

  // Quadruple items for seamless loop
  const items1 = [...row1, ...row1, ...row1, ...row1];
  const items2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="stack" className="py-24 overflow-hidden">
      <motion.p
        className="section-label px-6 md:px-12 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        03 — Stack
      </motion.p>

      {/* Row 1 — scrolls left */}
      <div className="relative overflow-hidden border-t border-[var(--border-color)] py-5">
        <div className="marquee-track">
          {items1.map((item, i) => (
            <span key={`r1-${item}-${i}`} className="flex items-center">
              <span className="marquee-item">{item}</span>
              <span className="marquee-separator">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (reverse) */}
      <div className="relative overflow-hidden border-t border-b border-[var(--border-color)] py-5">
        <div className="marquee-track marquee-reverse">
          {items2.map((item, i) => (
            <span key={`r2-${item}-${i}`} className="flex items-center">
              <span className="marquee-item">{item}</span>
              <span className="marquee-separator">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
