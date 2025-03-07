import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Rocket, Star, ChevronDown, ExternalLink } from 'lucide-react';
import { useState } from 'react';

function Home() {
  const { scrollY } = useScroll();
  const [hoveredFeature, setHoveredFeature] = useState(null);
  
  const y = useSpring(useTransform(scrollY, [0, 300], [0, -50]), {
    stiffness: 100,
    damping: 30
  });

  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies",
      skills: ["React", "python", "JavaScript", "MongoDB", "flask"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "AI/ML Development",
      description: "Creating intelligent solutions with machine learning",
      skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Clean Architecture",
      description: "Designing scalable and maintainable systems",
      skills: ["SOLID", "Design Patterns", "Testing", "CI/CD"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const firstName = "Olasode".split("");
  const lastName = "SIDIQ".split("");

  return (
    <div className="min-h-screen overflow-x-hidden">
      <motion.section 
        style={{ y, opacity, scale }}
        className="h-screen flex items-center justify-center px-6 bg-gradient-to-b from-primary to-secondary dark:from-gray-100 dark:to-white relative"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: Math.random() * 0.5 + 0.5
                }}
                animate={{
                  y: [
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight
                  ],
                  scale: [1, Math.random() * 1.5 + 0.5, 1]
                }}
                transition={{
                  duration: Math.random() * 10 + 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </div>
        </div>

        <div className="text-center max-w-4xl relative z-10">
          {/* Animated Name */}
          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-bold mb-6 text-white dark:text-gray-900 flex justify-center flex-wrap gap-4"
          >
            <div className="flex">
              {firstName.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="flex text-blue-500">
              {lastName.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 dark:text-gray-600 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              Full Stack Developer & AI/ML Enthusiast
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 justify-center"
          >
            <Link 
              to="/projects"
              className="group relative bg-blue-500 text-white px-8 py-3 rounded-full text-sm overflow-hidden"
            >
              <motion.span
                className="relative z-10 inline-flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                View Projects
                <ExternalLink className="w-4 h-4" />
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link 
              to="/contact"
              className="group relative bg-transparent border-2 border-white dark:border-gray-900 text-white dark:text-gray-900 px-8 py-3 rounded-full text-sm overflow-hidden"
            >
              <motion.span
                className="relative z-10 inline-flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Get in touch
                <ExternalLink className="w-4 h-4" />
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-white dark:bg-gray-900"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-white dark:text-gray-900 text-sm"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-6 h-6 mt-2" />
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative p-6 rounded-lg bg-white/5 dark:bg-gray-900/5 backdrop-blur-sm border border-white/10 dark:border-gray-900/10 overflow-hidden group"
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-500/5"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-500 mb-4 relative"
                >
                  {feature.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-white dark:text-gray-900 mb-2 relative"
                  whileHover={{ x: 10 }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-400 dark:text-gray-600 relative"
                  whileHover={{ x: 10 }}
                >
                  {feature.description}
                </motion.p>

                <AnimatePresence>
                  {hoveredFeature === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="mt-4 pt-4 border-t border-white/10 dark:border-gray-900/10 relative"
                    >
                      <div className="flex flex-wrap gap-2">
                        {feature.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                            className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;