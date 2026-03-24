"use client";

import { motion } from "framer-motion";
import { stack } from "@/data/portfolio";

export function Stack() {
  // Desktop (2 rows)
  const mid = Math.ceil(stack.length / 2);
  const row1 = stack.slice(0, mid);
  const row2 = stack.slice(mid);

  const items1 = [...row1, ...row1, ...row1, ...row1];
  const items2 = [...row2, ...row2, ...row2, ...row2];

  // Mobile (3 rows)
  const third = Math.ceil(stack.length / 3);
  const mRow1 = stack.slice(0, third);
  const mRow2 = stack.slice(third, third * 2);
  const mRow3 = stack.slice(third * 2);

  const mItems1 = [...mRow1, ...mRow1, ...mRow1, ...mRow1];
  const mItems2 = [...mRow2, ...mRow2, ...mRow2, ...mRow2];
  const mItems3 = [...mRow3, ...mRow3, ...mRow3, ...mRow3];

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

      {/* Desktop Layout (2 rows) */}
      <div className="hidden md:block">
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
      </div>

      {/* Mobile Layout (3 rows) */}
      <div className="md:hidden">
        <div className="relative overflow-hidden border-t border-[var(--border-color)] py-4">
          <div className="marquee-track">
            {mItems1.map((item, i) => (
              <span key={`m1-${item}-${i}`} className="flex items-center">
                <span className="marquee-item">{item}</span>
                <span className="marquee-separator">·</span>
              </span>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-[var(--border-color)] py-4">
          <div className="marquee-track marquee-reverse">
            {mItems2.map((item, i) => (
              <span key={`m2-${item}-${i}`} className="flex items-center">
                <span className="marquee-item">{item}</span>
                <span className="marquee-separator">·</span>
              </span>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-b border-[var(--border-color)] py-4">
          <div className="marquee-track">
            {mItems3.map((item, i) => (
              <span key={`m3-${item}-${i}`} className="flex items-center">
                <span className="marquee-item">{item}</span>
                <span className="marquee-separator">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
