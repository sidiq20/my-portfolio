"use client";

import { motion } from "framer-motion";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-12 py-32"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left — label + stat */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <motion.p
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              01 — About
            </motion.p>

            <motion.div
              className="hidden md:block mt-auto pt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="stat-number">07</span>
              <span className="stat-label">Selected Projects</span>
            </motion.div>
          </div>

          {/* Right — content */}
          <div className="md:col-span-8">
            <motion.p
              className="heading-display"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {about.statement}
            </motion.p>

            <motion.p
              className="body-mono mt-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {about.body}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
