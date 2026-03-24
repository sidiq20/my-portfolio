"use client";

import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { projects } from "@/data/portfolio";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const springConfig = { damping: 25, stiffness: 120 };
  const cursorX = useSpring(-1000, springConfig);
  const cursorY = useSpring(-1000, springConfig);

  useEffect(() => {
    cursorX.set(mousePos.x);
    cursorY.set(mousePos.y);
  }, [mousePos.x, mousePos.y, cursorX, cursorY]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="work" className="px-6 md:px-12 py-32" onMouseMove={handleMouseMove}>
      <div className="max-w-7xl mx-auto relative">
        <motion.p
          className="section-label mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          02 — Selected Work
        </motion.p>

        <div>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card block sticky bg-black"
              style={{ top: `calc(15vh + ${i * 30}px)`, zIndex: i + 1 }}
              data-cursor="expand"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 pointer-events-none">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="project-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-8 mb-4">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-category flex-shrink-0">
                      {project.category} · {project.year}
                    </span>
                  </div>

                  <p className="project-description mb-6">
                    {project.description}
                  </p>

                  <div className="project-tech flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex flex-shrink-0 items-center self-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="opacity-30 -rotate-45"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Reveal overlay */}
        <motion.div
          className="hidden md:flex pointer-events-none fixed top-0 left-0 z-50 w-72 h-96 bg-white text-black items-center justify-center p-8 overflow-hidden"
          style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%", mixBlendMode: "difference" }}
          animate={{
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.6,
            rotate: hoveredIndex !== null ? (hoveredIndex % 2 === 0 ? 3 : -3) : 0,
          }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          {hoveredIndex !== null && (
            <div className="flex flex-col items-center justify-center h-full w-full border border-black/10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#666666] mb-8">
                {projects[hoveredIndex].category}
              </span>
              <p className="font-display text-5xl font-bold leading-none tracking-tighter text-center">
                {projects[hoveredIndex].title}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
