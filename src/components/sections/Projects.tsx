"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="work" className="px-6 md:px-12 py-32">
      <div className="max-w-7xl mx-auto">
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
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card block sticky bg-black"
              style={{ top: `calc(15vh + ${i * 30}px)`, zIndex: i + 1 }}
              data-cursor="expand"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
