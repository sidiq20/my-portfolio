import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import { 
  FaReact, FaJs, FaPython, FaDocker, FaGitAlt,
  FaFlask
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiFirebase,
  SiTensorflow, SiNumpy, SiPandas,
  SiBootstrap, SiNgrok, SiJinja,
  SiScikitlearn, SiQt, SiUbuntu, SiSelenium
} from 'react-icons/si';

function Stack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerRef = useRef(null);

  const technologies = {
    "Frontend": {
      techs: [
        { name: "React", icon: FaReact, color: "text-blue-400" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
        { name: "Jinja", icon: SiJinja, color: "text-red-400" },
      ],
      animationType: "slideInLeft"
    },
    "Backend": {
      techs: [
        { name: "Python", icon: FaPython, color: "text-yellow-300" },
        { name: "Flask", icon: FaFlask, color: "text-gray-300" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      ],
      animationType: "slideInUp"
    },
    "AI/ML": {
      techs: [
        { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
        { name: "scikit-learn", icon: SiScikitlearn, color: "text-blue-500" },
        { name: "NumPy", icon: SiNumpy, color: "text-blue-300" },
        { name: "Pandas", icon: SiPandas, color: "text-purple-400" }
      ],
      animationType: "rotateIn"
    },
    "Tools": {
      techs: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "Docker", icon: FaDocker, color: "text-blue-400" },
        { name: "Ngrok", icon: SiNgrok, color: "text-yellow-400" },
        { name: "Ubuntu", icon: SiUbuntu, color: "text-orange-400" },
        { name: "Selenium", icon: SiSelenium, color: "text-green-400" },
      ],
      animationType: "slideInRight"
    },
    "GUI": {
      techs: [
        { name: "Tkinter", icon: SiQt, color: "text-blue-500" },
        { name: "PyQt5", icon: SiQt, color: "text-green-500" },
      ],
      animationType: "flipIn"
    },
    "Database": {
      techs: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      ],
      animationType: "fadeInScale"
    },
  };

  return (
    <section id="stack" className="py-20 px-6 bg-gradient-to-b from-secondary to-primary dark:from-white dark:to-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display mb-12 text-center text-white dark:text-gray-900"
        >
          Tools I <span className="text-blue-500">work</span> with
        </motion.h2>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, categoryData], index) => {
            const getStackAnimation = (type) => {
              switch (type) {
                case "slideInLeft":
                  return {
                    initial: { opacity: 0, x: -100, rotateY: -15 },
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
                    initial: { opacity: 0, x: 100, rotateY: 15 },
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
                    initial: { opacity: 0, y: 80, scale: 0.9 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    transition: { 
                      duration: 0.7, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 120,
                      damping: 20
                    }
                  };
                case "rotateIn":
                  return {
                    initial: { opacity: 0, rotate: -90, scale: 0.5 },
                    animate: { opacity: 1, rotate: 0, scale: 1 },
                    transition: { 
                      duration: 1.0, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 80,
                      damping: 12
                    }
                  };
                case "flipIn":
                  return {
                    initial: { opacity: 0, rotateX: -90, scale: 0.8 },
                    animate: { opacity: 1, rotateX: 0, scale: 1 },
                    transition: { 
                      duration: 0.9, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 90,
                      damping: 15
                    }
                  };
                case "fadeInScale":
                  return {
                    initial: { opacity: 0, scale: 0.3, rotate: 10 },
                    animate: { opacity: 1, scale: 1, rotate: 0 },
                    transition: { 
                      duration: 0.8, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100,
                      damping: 18
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

            const animation = getStackAnimation(categoryData.animationType);

            return (
              <motion.div
                key={category}
                initial={animation.initial}
                whileInView={animation.animate}
                viewport={{ once: true, margin: "-50px" }}
                transition={animation.transition}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: categoryData.animationType === "flipIn" ? 5 : 0,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="glass-card p-6"
              >
                <motion.h3 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: animation.transition.delay + 0.2 }}
                  className="text-2xl font-display mb-6 text-white dark:text-gray-900"
                >
                  {category}
                </motion.h3>
                <div className="grid grid-cols-1 gap-4">
                  {categoryData.techs.map(({ name, icon: Icon, color }, techIndex) => (
                    <motion.div 
                      key={name}
                      initial={{ opacity: 0, x: -20, scale: 0.9 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: animation.transition.delay + 0.3 + (techIndex * 0.1)
                      }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 dark:bg-gray-900/5 hover:bg-white/10 dark:hover:bg-gray-900/10 transition-colors"
                      whileHover={{ 
                        x: 10,
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          scale: 1.2,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <Icon className={`text-2xl ${color}`} />
                      </motion.div>
                      <span className="font-mono text-sm text-white dark:text-gray-900">{name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stack;