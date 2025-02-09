import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

import ecommerceimg from '../assets/images/umami.png';
import streaker from '../assets/images/streaker.png';

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageError, setImageError] = useState({});

  const handleImageError = (projectTitle) => {
    setImageError(prev => ({
      ...prev,
      [projectTitle]: true
    }));
  };

  const projects = [
    {
      title: "AI Death Titanic Death Prediction",
      description: "A machine learning model that predicts the likelihood of a passenger surviving the Titanic disaster.",
      image: "https://placehold.co/600x400",
      fallbackImage: "https://via.placeholder.com/600x400?text=AI+Image+Classifier",
      preview: "https://placehold.co/600x400",
      github: "https://github.com/sidiq20/kaggle-titanic-hackaton",
      live: "https://ai-classifier-demo.com",
      tech: ["Python", "SKLearn", "pandas"],
    },
    {
      title: "UMAMI CITY ",
      description: "A full-stack e-commerce platform with real-time inventory management, secure payments, and an admin dashboard.",
      image: ecommerceimg,
      fallbackImage: "https://via.placeholder.com/600x400?text=E-Commerce+Platform",
      preview: "https://placehold.co/600x400",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com",
      tech: ["React", "Firebase" , "Stripe",]
    },
    {
      title: "Movie Watchlist",
      description: "A movie watchlist app that allows users to search for movies, add them to a watchlist, and mark them as watched.",
      image: "https://placehold.co/600x400",
      fallbackImage: "https://via.placeholder.com/600x400?text=Task+Manager",
      preview: "https://placehold.co/600x400",
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-demo.com",
      tech: ["Flask", "Jinja", "Mongodb"],
    },
    {
      title: "Streaker App",
      description: "A habit tracking application that helps users build and maintain positive habits over time.",
      image: streaker,
      fallbackImage: "https://via.placeholder.com/600x400?text=Task+Manager",
      preview: "https://placehold.co/600x400",
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-demo.com",
      tech: ["Jinja", "Mongodb", "Flask"],
    },
  {
      title: "Habit Streaker App",
      description: "A habit tracking application that helps users build and maintain positive habits over time.",
      image: "https://placehold.co/600x400",
      fallbackImage: "https://via.placeholder.com/600x400?text=Task+Manager",
      preview: "https://placehold.co/600x400",
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-demo.com",
      tech: ["Jinja", "Mongodb", "Flask"],
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-6 bg-primary dark:bg-white"
    >
      <div className="max-w-6xl mx-auto pt-20">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display mb-12 text-center text-white dark:text-gray-900"
        >
          Featured Projects
        </motion.h2>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary dark:bg-gray-50 p-8 grid md:grid-cols-2 gap-8 items-center rounded-xl shadow-lg"
            >
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src={imageError[project.title] ? project.fallbackImage : project.image}
                  alt={project.title}
                  onError={() => handleImageError(project.title)}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-display text-white dark:text-gray-900">{project.title}</h3>
                <p className="text-gray-300 dark:text-gray-600 font-mono">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-1 bg-white/10 dark:bg-gray-200 text-gray-300 dark:text-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-mono text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600 transition-colors"
                  >
                    <FaGithub /> Source Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-mono text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;