import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState, useRef } from 'react';

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerRef = useRef(null);

  const [selectedProject, setSelectedProject] = useState(null);
  const [imageError, setImageError] = useState({});

  const handleImageError = (projectTitle) => {
    setImageError(prev => ({
      ...prev,
      [projectTitle]: true
    }));
  };

  const projects = [
    {
      id: "mxbitbuy",
      title: "MXBitBuy",
      description: "A cryptocurrency exchange platform with real-time price tracking and trading features.",
      longDescription: "MXBitBuy is a modern cryptocurrency exchange platform built with React. It features real-time price tracking, trading simulation, portfolio management, and market analysis tools.",
      image: "/mx.png", // Using crypto.png since mx.png doesn't exist
      fallbackImage: "https://via.placeholder.com/600x400?text=MXBitBuy",
      github: "https://github.com/sidiq20/mbitx",
      live: "https://mxbitbuy.vercel.app/",
      tech: ["React", "Tailwind CSS", "CoinGecko API", "Vercel"],
      features: [
        "Real-time cryptocurrency price tracking",
        "Trading simulation",
        "Portfolio management",
        "Market analysis tools"
      ],
      animationType: "slideInLeft"
    },
    {
      id: "crypto-hub",
      title: "Crypto Hub",
      description: "A real-time cryptocurrency dashboard with market analysis tools.",
      longDescription: "Crypto Hub is a comprehensive cryptocurrency tracking platform that provides real-time price updates, market analysis, and trading insights.",
      image: "/crypto.png",
      fallbackImage: "/place.png",
      live: "https://cryptohub-two.vercel.app/",
      tech: ["Firebase", "React", "Tailwind", "CoinGecko API"],
      features: [
        "Real-time price tracking",
        "Market trend analysis",
        "Portfolio management",
        "Price alerts"
      ],
      animationType: "slideInUp"
    },
    {
      id: "umami-city",
      title: "UMAMI CITY",
      description: "A full-stack e-commerce platform with real-time inventory management.",
      longDescription: "UMAMI CITY is a modern e-commerce platform built with React and Firebase. It features real-time inventory tracking, secure payment processing through Stripe.",
      image: "/umami.png",
      fallbackImage: "https://via.placeholder.com/600x400?text=E-Commerce",
      github: "https://github.com/sidiq20/umami-city",
      live: "https://umami-city-seven.vercel.app/",
      tech: ["React", "Firebase", "Stripe"],
      features: [
        "Real-time inventory management",
        "Secure payment processing",
        "User authentication",
        "Admin dashboard"
      ],
      animationType: "slideInRight"
    },
    {
      id: "typophoriax",
      title: "TypophoriaX",
      description: "An AI-powered love letter customization application.",
      longDescription: "TypophoriaX is an innovative application that helps users create personalized love letters using AI assistance.",
      image: "/typophoria.png",
      fallbackImage: "https://via.placeholder.com/600x400?text=TypophoriaX",
      github: "https://github.com/sidiq20/nova-app",
      live: "https://typophoriax.vercel.app/",
      tech: ["JavaScript", "Tailwind CSS", "Framer Motion", "Firebase"],
      features: [
        "AI-powered content suggestions",
        "Custom templates",
        "Typography customization",
        "Real-time preview"
      ],
      animationType: "fadeInScale"
    },
    {
      id: "hospital-dashabord",
      title: "LASUTH IR",
      description: "a dashboard that shows health encrypted information of patients in LASUTH.",
      longDescription: "a dashabord that helps doctors and consultants to manage patient information securely and efficiently.",
      image: "/lasuth.png",
      fallbackImage: "/place.png",
      github: "https://github.com/sidiq20/",
      live: "",
      tech: ["TypeScript", "Tailwind CSS", "Firebase"],
      features: [
        "encrypted patient data",
        "secure access control",
        "real-time updates",
        "user-friendly interface"
      ],
      animationType: "flipIn"
    },
    {
      id: "streaker-app",
      title: "Streaker App",
      description: "A habit tracking application that helps users build positive habits.",
      longDescription: "Streaker is a comprehensive habit tracking application that helps users develop and maintain positive habits with gamification elements.",
      image: "/streaker.png",
      fallbackImage: "https://via.placeholder.com/600x400?text=Streaker",
      github: "https://github.com/sidiq20/flask-habit-tracker",
      live: "https://streaker-chat.onrender.com/",
      tech: ["Jinja", "MongoDB", "Flask"],
      features: [
        "Habit streak tracking",
        "Progress visualization",
        "Custom habit schedules",
        "Achievement badges"
      ],
      animationType: "rotateIn"
    },
    {
      id: "tapinbio",
      title: "TapinBio",
      description: "A personal link-in-bio page with customizable themes and analytics.",
      longDescription: "TapinBio is a personal link-in-bio page that allows users to showcase their social media profiles, websites, and other links in a customizable format.",
      image: "/tapinbio.png",
      fallbackImage: "/place.png",
      github: "https://github.com/sidiq20/",
      live: "https://tapinbio.onrender.com/",
      tech: ["Jinja", "Firebase", "Redis", "Flask", "Tailwind CSS", "cloudinary"],
      features: [
        "Customizable themes",
        "Analytics dashboard",
        "Social media integration",
        "Link management"
      ],
      animationType: "slideInLeft"
    },
    {
      id: "vdiags",
      title: "vdiags - vehicle diagnostics store",
      description: "a vehicle diagnostics store that proviedes store with various vehicle diagnostic tools.",
      longDescription: "A vehicle diagnostics store that provides a wide range of diagnostic tools and equipment for automotive professionals and enthusiasts.",
      image: "/vdiags.png",
      fallbackImage: "/place.png",
      github: "https://github.com/sidiq20/",
      live: "https://vdiags.vercel.app/",
      tech: ["JavaScript", "Tailwind CSS", "Framer Motion", "Firebase"],
      features: [
        "Wide range of diagnostic tools",
        "User-friendly interface",
        "Secure payment processing",
        "Real-time inventory updates"
      ],
      animationType: "fadeInScale"
    },
    {
      id: "evil-advice-as-a-service",
      title: "evil advice as a service",
      description: "an API that provides evil advice to users.",
      longDescription: "an API that provides humorous and sarcastic advice to users, designed for entertainment purposes.",
      image: "/place.png",
      fallbackImage: "/place.png",
      github: "https://github.com/sidiq20/evil-advice-as-a-service",
      live: "https://evil-advice-as-a-service.onrender.com/docs",
      tech: ["fastApi", "Python", "Docker", "OpenAPI", "MongoDB"],
      features: [
        "Humorous and sarcastic advice",
        "Easy-to-use API",
        "OpenAPI documentation",
        "Rate limiting"
      ],
      animationType: "slideInRight"
    },
    {
      id: "ai-titanic",
      title: "AI Titanic Prediction",
      description: "Machine learning model predicting Titanic passenger survival.",
      longDescription: "This project leverages machine learning algorithms to analyze Titanic passenger data and predict survival outcomes with high accuracy.",
      image: "/place.png",
      fallbackImage: "https://via.placeholder.com/600x400?text=AI+ML",
      github: "https://github.com/sidiq20/kaggle-titanic-hackaton",
      tech: ["Python", "SKLearn", "Pandas"],
      features: [
        "Advanced data preprocessing",
        "Feature engineering",
        "Multiple ML model comparisons",
        "Interactive prediction interface"
      ],
      animationType: "flipIn"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-primary dark:bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display mb-12 text-center text-white dark:text-gray-900"
        >
          Featured Projects
        </motion.h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const getProjectAnimation = (type) => {
              switch (type) {
                case "slideInLeft":
                  return {
                    initial: { opacity: 0, x: -100, rotateY: -20 },
                    animate: { opacity: 1, x: 0, rotateY: 0 },
                    transition: {
                      duration: 0.8,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  };
                case "slideInRight":
                  return {
                    initial: { opacity: 0, x: 100, rotateY: 20 },
                    animate: { opacity: 1, x: 0, rotateY: 0 },
                    transition: {
                      duration: 0.8,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  };
                case "slideInUp":
                  return {
                    initial: { opacity: 0, y: 100, scale: 0.8 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    transition: {
                      duration: 0.7,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 120,
                      damping: 20
                    }
                  };
                case "fadeInScale":
                  return {
                    initial: { opacity: 0, scale: 0.5, rotate: -10 },
                    animate: { opacity: 1, scale: 1, rotate: 0 },
                    transition: {
                      duration: 0.9,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 80,
                      damping: 12
                    }
                  };
                case "rotateIn":
                  return {
                    initial: { opacity: 0, rotate: -180, scale: 0.3 },
                    animate: { opacity: 1, rotate: 0, scale: 1 },
                    transition: {
                      duration: 1.0,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 60,
                      damping: 10
                    }
                  };
                case "flipIn":
                  return {
                    initial: { opacity: 0, rotateX: -90, rotateY: -45, scale: 0.5 },
                    animate: { opacity: 1, rotateX: 0, rotateY: 0, scale: 1 },
                    transition: {
                      duration: 1.1,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 70,
                      damping: 15
                    }
                  };
                default:
                  return {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: index * 0.1 }
                  };
              }
            };

            const animation = getProjectAnimation(project.animationType);

            return (
              <motion.div
                key={project.id}
                initial={animation.initial}
                whileInView={animation.animate}
                viewport={{ once: true, margin: "-100px" }}
                transition={animation.transition}
                whileHover={{
                  scale: 1.02,
                  rotateY: project.animationType === "flipIn" ? 5 : 0,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-secondary dark:bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={imageError[project.title] ? project.fallbackImage : project.image}
                    alt={project.title}
                    onError={() => handleImageError(project.title)}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-display text-white dark:text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-300 dark:text-gray-600 font-mono text-sm mb-4 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 bg-blue-500/20 dark:bg-blue-100 text-blue-100 dark:text-blue-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs font-mono px-3 py-1 bg-blue-500/20 dark:bg-blue-100 text-blue-100 dark:text-blue-800 rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm font-mono text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600 transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-sm font-mono text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600 transition-colors"
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-secondary dark:bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video overflow-hidden rounded-t-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display text-white dark:text-gray-900">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white dark:hover:text-gray-900 text-xl"
                  >
                    ×
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm font-mono px-3 py-1 bg-blue-500/20 dark:bg-blue-100 text-blue-100 dark:text-blue-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 dark:text-gray-600 font-mono leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-display text-white dark:text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300 dark:text-gray-600 font-mono text-sm">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-mono rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <FaGithub /> View Source
                  </a>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-mono rounded-lg flex items-center gap-2 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;