import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link, Routes, Route } from 'react-router-dom';

import ecommerceimg from '../assets/images/umami.png';
import streaker from '@assets/images/streaker.png';
import crypto from '../assets/images/crypto.png';
import typo from '../assets/images/typophoria.png';
import speed from '../assets/images/speedtest.png';
import mx from '../assets/images/mx.png';

// Project List Component
function ProjectsList() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageError, setImageError] = useState({});
  const navigate = useNavigate();

  const handleImageError = (projectTitle) => {
    setImageError(prev => ({
      ...prev,
      [projectTitle]: true
    }));
  };

  const projects = [
    // React Projects First
    {
      id: "mxbitbuy",
      title: "MXBitBuy",
      description: "A cryptocurrency exchange platform with real-time price tracking and trading features.",
      longDescription: "MXBitBuy is a modern cryptocurrency exchange platform built with React. It features real-time price tracking, trading simulation, portfolio management, and market analysis tools. The platform provides a seamless trading experience with an intuitive user interface and comprehensive market data.",
      image: mx,
      fallbackImage: "https://via.placeholder.com/600x400?text=MXBitBuy",
      github: "https://github.com/sidiq20/mbitx",
      live: "https://mxbitbuy.vercel.app/",
      tech: ["React", "Tailwind CSS", "CoinGecko API", "Vercel"],
      features: [
        "Real-time cryptocurrency price tracking",
        "Trading simulation",
        "Portfolio management",
        "Market analysis tools",
        "Responsive design for all devices"
      ]
    },
    {
      id: "crypto-hub",
      title: "Crypto Hub",
      description: "A real-time cryptocurrency dashboard with market analysis tools.",
      longDescription: "Crypto Hub is a comprehensive cryptocurrency tracking platform that provides real-time price updates, market analysis, and trading insights. Built with React and Firebase, it integrates with the CoinGecko API to deliver accurate and up-to-date cryptocurrency data.",
      image: crypto,
      fallbackImage: crypto,
      preview: "https://cryptohub-two.vercel.app/",
      github: "https://github.com/sidiq20/cryptohub",
      live: "https://cryptohub-two.vercel.app/",
      tech: ["Firebase", "React", "Tailwind", "CoinGecko API"],
      features: [
        "Real-time price tracking",
        "Market trend analysis",
        "Portfolio management",
        "Price alerts",
        "Historical data visualization"
      ]
    },
    {
      id: "umami-city",
      title: "UMAMI CITY",
      description: "A full-stack e-commerce platform with real-time inventory management and secure payments.",
      longDescription: "UMAMI CITY is a modern e-commerce platform built with React and Firebase. It features real-time inventory tracking, secure payment processing through Stripe, and a comprehensive admin dashboard. The platform provides a seamless shopping experience with features like cart management, order tracking, and user authentication.",
      image: ecommerceimg,
      fallbackImage: "https://via.placeholder.com/600x400?text=E-Commerce+Platform",
      github: "https://github.com/sidiq20/umami-city",
      live: "https://umami-city-seven.vercel.app/",
      tech: ["React", "Firebase", "Stripe"],
      features: [
        "Real-time inventory management",
        "Secure payment processing",
        "User authentication and profiles",
        "Admin dashboard",
        "Order tracking system"
      ]
    },
    {
      id: "typophoriax",
      title: "TypophoriaX",
      description: "An AI-powered love letter customization application.",
      longDescription: "TypophoriaX is an innovative application that helps users create personalized love letters using AI assistance. Built with React and Firebase, it features customizable templates, AI-powered suggestions, and beautiful typography options.",
      image: typo,
      fallbackImage: typo,
      preview: "https://typophoriax.vercel.app/",
      github: "https://github.com/sidiq20/nova-app",
      live: "https://typophoriax.vercel.app/",
      tech: ["JavaScript", "Tailwind CSS", "Framer Motion", "Firebase"],
      features: [
        "AI-powered content suggestions",
        "Custom templates",
        "Typography customization",
        "Real-time preview",
        "Save and share functionality"
      ]
    },
    // Flask Projects Next
    {
      id: "movie-watchlist",
      title: "Movie Watchlist",
      description: "A Flask-based movie watchlist application with personalized recommendations.",
      longDescription: "This movie watchlist application allows users to discover, track, and manage their favorite movies. Built with Flask and MongoDB, it features user authentication, personalized movie recommendations, and integration with movie databases for comprehensive film information.",
      image: "https://placehold.co/600x400",
      fallbackImage: "https://via.placeholder.com/600x400?text=Movie+Watchlist",
      github: "https://github.com/sidiq20/moviewatchlist",
      live: "https://movie-watchlist.demo.com",
      tech: ["Flask", "Jinja", "MongoDB"],
      features: [
        "User authentication system",
        "Movie search and filtering",
        "Personalized recommendations",
        "Watch status tracking",
        "Rating and review system"
      ]
    },
    {
      id: "streaker-app",
      title: "Streaker App",
      description: "A habit tracking application that helps users build and maintain positive habits.",
      longDescription: "Streaker is a comprehensive habit tracking application that helps users develop and maintain positive habits. Built with Flask and MongoDB, it features streak tracking, progress visualization, and customizable habit schedules. The app uses gamification elements to keep users motivated.",
      image: streaker,
      fallbackImage: streaker,
      github: "https://github.com/sidiq20/flask-habit-tracker",
      live: "https://streaker-chat.onrender.com/",
      tech: ["Jinja", "MongoDB", "Flask"],
      features: [
        "Habit streak tracking",
        "Progress visualization",
        "Custom habit schedules",
        "Reminder system",
        "Achievement badges"
      ]
    },
    // GUI and ML Projects Last
    {
      id: "screen-recorder",
      title: "Screen Recorder",
      description: "A Python-based screen recording application with audio capture capabilities.",
      longDescription: "This screen recorder application provides a user-friendly interface for capturing screen content and audio. Built with Python and Tkinter, it offers various recording options, custom area selection, and multiple output formats.",
      image: "https://placehold.co/600x400",
      fallbackImage: "https://via.placeholder.com/600x400?text=Screen+Recorder",
      github: "https://github.com/sidiq20/screen-recorder",
      live: "https://screen-recorder.demo.com",
      tech: ["Tkinter", "PyAudio", "Python", "cmdGen"],
      features: [
        "Full screen and area recording",
        "Audio capture support",
        "Multiple output formats",
        "Customizable frame rate",
        "Hotkey controls"
      ]
    },
    {
      id: "todo-gui",
      title: "Todo List GUI",
      description: "A Python-based GUI todo list application with data persistence.",
      longDescription: "This todo list application provides a clean and intuitive interface for task management. Built with Python and PySimpleGUI, it features task categorization, due dates, and priority levels. The application ensures data persistence and offers filtering options.",
      image: "https://placehold.co/600x400",
      fallbackImage: "https://via.placeholder.com/600x400?text=Todo+GUI",
      github: "https://github.com/sidiq20/todo-gui",
      tech: ["PySimpleGUI", "Python"],
      features: [
        "Task categorization",
        "Due date management",
        "Priority levels",
        "Data persistence",
        "Task filtering"
      ]
    },
    {
      id: "internet-speed-test",
      title: "Internet Speed Test",
      description: "A GUI-based internet speed testing tool with historical tracking.",
      longDescription: "This internet speed testing application provides accurate measurements of download speed, upload speed, and ping. Built with Python and Tkinter, it features historical speed tracking, graphical representation of results, and automated testing schedules.",
      image: speed,
      fallbackImage: speed,
      github: "https://github.com/sidiq20/speed-test",
      tech: ["Selenium", "Tkinter", "BeautifulSoup", "Webdriver"],
      features: [
        "Download/Upload speed testing",
        "Ping measurement",
        "Historical data tracking",
        "Graphical results",
        "Scheduled testing"
      ]
    },
    {
      id: "ai-titanic-death-prediction",
      title: "AI Titanic Death Prediction",
      description: "A machine learning model that predicts the likelihood of a passenger surviving the Titanic disaster.",
      longDescription: "This project leverages machine learning algorithms to analyze the Titanic passenger data and predict survival outcomes. Built with Python and scikit-learn, it features comprehensive data preprocessing, feature engineering, and model evaluation. The system achieves high prediction accuracy by considering multiple factors such as passenger class, age, gender, and ticket fare.",
      image: "https://placehold.co/600x400",
      fallbackImage: "https://via.placeholder.com/600x400?text=AI+Image+Classifier",
      github: "https://github.com/sidiq20/kaggle-titanic-hackaton",
      live: "https://ai-classifier-demo.com",
      tech: ["Python", "SKLearn", "pandas"],
      features: [
        "Advanced data preprocessing and cleaning",
        "Feature engineering and selection",
        "Multiple ML model comparisons",
        "Interactive prediction interface",
        "Detailed accuracy metrics visualization"
      ]
    }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id || project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary dark:bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              onClick={() => navigate(`/projects/${project.id || project.title.toLowerCase().replace(/\s+/g, '-')}`)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={imageError[project.title] ? project.fallbackImage : project.image}
                  alt={project.title}
                  onError={() => handleImageError(project.title)}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 hover:opacity-100 transition-opacity" />
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
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// Project Detail Component
function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // All projects data
  const allProjects = [
    // React Projects First
    {
      id: "mxbitbuy",
      title: "MXBitBuy",
      description: "A cryptocurrency exchange platform with real-time price tracking and trading features.",
      longDescription: "MXBitBuy is a modern cryptocurrency exchange platform built with React. It features real-time price tracking, trading simulation, portfolio management, and market analysis tools. The platform provides a seamless trading experience with an intuitive user interface and comprehensive market data.",
      image: mx,
      fallbackImage: "https://via.placeholder.com/600x400?text=MXBitBuy",
      github: "https://github.com/sidiq20/mbitx",
      live: "https://mxbitbuy.vercel.app/",
      tech: ["React", "Tailwind CSS", "CoinGecko API", "Vercel"],
      features: [
        "Real-time cryptocurrency price tracking",
        "Trading simulation",
        "Portfolio management",
        "Market analysis tools",
        "Responsive design for all devices"
      ]
    },
    {
      id: "crypto-hub",
      title: "Crypto Hub",
      description: "A real-time cryptocurrency dashboard with market analysis tools.",
      longDescription: "Crypto Hub is a comprehensive cryptocurrency tracking platform that provides real-time price updates, market analysis, and trading insights. Built with React and Firebase, it integrates with the CoinGecko API to deliver accurate and up-to-date cryptocurrency data.",
      image: crypto,
      fallbackImage: crypto,
      preview: "https://cryptohub-two.vercel.app/",
      github: "https://github.com/sidiq20/cryptohub",
      live: "https://cryptohub-two.vercel.app/",
      tech: ["Firebase", "React", "Tailwind", "CoinGecko API"],
      features: [
        "Real-time price tracking",
        "Market trend analysis",
        "Portfolio management",
        "Price alerts",
        "Historical data visualization"
      ]
    },
    {
      id: "umami-city",
      title: "UMAMI CITY",
      description: "A full-stack e-commerce platform with real-time inventory management and secure payments.",
      longDescription: "UMAMI CITY is a modern e-commerce platform built with React and Firebase. It features real-time inventory tracking, secure payment processing through Stripe, and a comprehensive admin dashboard. The platform provides a seamless shopping experience with features like cart management, order tracking, and user authentication.",
      image: ecommerceimg,
      fallbackImage: "https://via.placeholder.com/600x400?text=E-Commerce+Platform",
      github: "https://github.com/sidiq20/umami-city",
      live: "https://umami-city-seven.vercel.app/",
      tech: ["React", "Firebase", "Stripe"],
      features: [
        "Real-time inventory management",
        "Secure payment processing",
        "User authentication and profiles",
        "Admin dashboard",
        "Order tracking system"
      ]
    },
    {
      id: "typophoriax",
      title: "TypophoriaX",
      description: "An AI-powered love letter customization application.",
      longDescription: "TypophoriaX is an innovative application that helps users create personalized love letters using AI assistance. Built with React and Firebase, it features customizable templates, AI-powered suggestions, and beautiful typography options.",
      image: typo,
      fallbackImage: typo,
      preview: "https://typophoriax.vercel.app/",
      github: "https://github.com/sidiq20/nova-app",
      live: "https://typophoriax.vercel.app/",
      tech: ["JavaScript", "Tailwind CSS", "Framer Motion", "Firebase"],
      features: [
        "AI-powered content suggestions",
        "Custom templates",
        "Typography customization",
        "Real-time preview",
        "Save and share functionality"
      ]
    },
    // ... add the rest of your projects here with unique IDs
  ];

  useEffect(() => {
    // Find the project by ID
    const foundProject = allProjects.find(p => 
      p.id === projectId || p.title.toLowerCase().replace(/\s+/g, '-') === projectId
    );
    
    if (foundProject) {
      setProject(foundProject);
    } else {
      // Redirect to projects page if project not found
      navigate('/projects');
    }
    
    setLoading(false);
  }, [projectId, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary dark:bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-6 bg-primary dark:bg-white"
    >
      <div className="max-w-4xl mx-auto pt-20">
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-white dark:text-gray-900 hover:text-blue-400 dark:hover:text-blue-600 transition-colors mb-8"
        >
          <FaArrowLeft /> Back to Projects
        </button>
        
        <div className="bg-secondary dark:bg-gray-50 rounded-xl shadow-xl overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-display text-white dark:text-gray-900 mb-4">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-mono px-4 py-1 bg-blue-500/20 dark:bg-blue-100 text-blue-100 dark:text-blue-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <p className="text-gray-300 dark:text-gray-600 font-mono leading-relaxed mb-8">
              {project.longDescription}
            </p>
            
            <div className="mb-8">
              <h2 className="text-xl font-display text-white dark:text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300 dark:text-gray-600 font-mono">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-mono rounded-lg flex items-center gap-2 transition-colors"
              >
                <FaGithub /> View Source
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-mono rounded-lg flex items-center gap-2 transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Main Projects Component
function Projects() {
  return (
    <Routes>
      <Route path="/" element={<ProjectsList />} />
      <Route path="/:projectId" element={<ProjectDetail />} />
    </Routes>
  );
}

export default Projects;