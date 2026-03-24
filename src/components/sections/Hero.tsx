"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { personal } from "@/data/portfolio";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.3,
    },
  },
};

const secondLineVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.65,
    },
  },
};

const letterVariants: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.7,
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
          transition={{ delay: 1.1, duration: 0.8 }}
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
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.4em]">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-white/30" />
      </motion.div>
    </section>
  );
}
