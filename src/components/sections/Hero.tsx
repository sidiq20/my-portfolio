"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { personal } from "@/data/portfolio";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06, // Slightly slower stagger for the first name
      delayChildren: 3.2, // Wait for preloader to slide up
    },
  },
};

const secondLineVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 3.7, // Last name comes slightly after first name
    },
  },
};

const letterVariants: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: {
      duration: 1.0, // Slow, elegant slide
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      <div className="text-center">
        {/* First name line */}
        <motion.h1
          className="hero-name"
          variants={containerVariants}
          initial="hidden"
          animate={ready ? "visible" : "hidden"}
        >
          {personal.firstName.split("").map((char, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span className="inline-block" variants={letterVariants}>
                {char}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Last name line */}
        <motion.h1
          className="hero-name hero-name--muted"
          variants={secondLineVariants}
          initial="hidden"
          animate={ready ? "visible" : "hidden"}
        >
          {personal.lastName.split("").map((char, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span className="inline-block" variants={letterVariants}>
                {char}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Role */}
        <motion.p
          className="hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ delay: 5.2, duration: 1.2 }} // Appears after Navbar
        >
          — {personal.role}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 flex flex-col items-center gap-4"
        style={{ transform: "translateX(-50%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 0.35 : 0 }}
        transition={{ delay: 5.8, duration: 1.2 }} // Last element to appear
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.4em]">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-white/30" />
      </motion.div>
    </section>
  );
}
