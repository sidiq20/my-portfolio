import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaRobot, FaDatabase } from 'react-icons/fa';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [profileRef, profileInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    {
      title: "Full Stack Development",
      icon: FaCode,
      description: "Experienced in building responsive web applications using modern technologies like React, Flask, Jinja, and MongoDB.",
      animationType: "typewriter"
    },
    {
      title: "AI/ML Development",
      icon: FaRobot,
      description: "Proficient in developing machine learning models using TensorFlow, scikit-learn, and PyQt5 for data analysis and predictions.",
      animationType: "bounce"
    },
    {
      title: "GUI Development",
      icon: FaDatabase,
      description: "Skilled in creating desktop applications using PyQt5, with a focus on user-friendly interfaces.",
      animationType: "flip"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-secondary to-primary dark:from-white dark:to-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display mb-12 text-center text-white dark:text-gray-900"
        >
          About Me
        </motion.h2>

        <div ref={profileRef} className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={profileInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ 
              duration: 1.2, 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 }
            }}
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl flex-shrink-0"
          >
            <img
              src="https://via.placeholder.com/200x200?text=Profile"
              alt="Olasode Sidiq"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={profileInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={profileInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-300 dark:text-gray-600 font-mono leading-relaxed mb-6"
            >
              I'm Olasode Sidiq, a passionate Full Stack Developer with a strong focus on AI/ML technologies. 
              My journey in software development has led me to work with a diverse range of technologies, 
              from web development to machine learning applications.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={profileInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-gray-300 dark:text-gray-600 font-mono leading-relaxed"
            >
              I specialize in creating intuitive user interfaces and robust backend systems, 
              combining modern web technologies with AI capabilities to build innovative solutions.
              My experience spans across web development, GUI applications, and machine learning projects.
            </motion.p>
          </motion.div>
        </div>

        {/* GitHub Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
          animate={statsInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ 
            duration: 1.0, 
            delay: 0.4,
            type: "spring",
            stiffness: 80,
            damping: 20
          }}
          className="glass-card p-8 mb-12"
        >
          <motion.h3 
            initial={{ opacity: 0, y: -20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl font-display mb-6 text-center text-white dark:text-gray-900"
          >
            GitHub Stats
          </motion.h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: -50, rotateY: -20 }}
              animate={statsInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              src="https://github-readme-stats.vercel.app/api?username=sidiq20&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&text_color=ffffff&icon_color=3b82f6"
              alt="GitHub Stats"
              className="max-w-full md:max-w-[50%] h-auto dark:invert"
            />
            <motion.img
              initial={{ opacity: 0, x: 50, rotateY: 20 }}
              animate={statsInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ scale: 1.05, rotateY: -5 }}
              src="https://github-readme-streak-stats.herokuapp.com/?user=sidiq20&theme=transparent&hide_border=true&stroke=3b82f6&ring=3b82f6&fire=3b82f6&currStreakNum=ffffff&sideNums=ffffff&currStreakLabel=3b82f6&sideLabels=3b82f6&dates=ffffff"
              alt="GitHub Streak"
              className="max-w-full md:max-w-[50%] h-auto dark:invert"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <motion.img
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=sidiq20&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=ffffff"
              alt="Top Languages"
              className="max-w-full md:max-w-[60%] h-auto dark:invert"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const getSkillAnimation = (type) => {
              switch (type) {
                case "typewriter":
                  return {
                    initial: { opacity: 0, width: 0 },
                    animate: { opacity: 1, width: "auto" },
                    transition: { duration: 1.5, delay: 0.5 + index * 0.3 }
                  };
                case "bounce":
                  return {
                    initial: { opacity: 0, y: -100, rotate: -180 },
                    animate: { opacity: 1, y: 0, rotate: 0 },
                    transition: { 
                      duration: 1.2, 
                      delay: 0.5 + index * 0.3,
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }
                  };
                case "flip":
                  return {
                    initial: { opacity: 0, rotateX: -90, scale: 0.5 },
                    animate: { opacity: 1, rotateX: 0, scale: 1 },
                    transition: { 
                      duration: 0.8, 
                      delay: 0.5 + index * 0.3,
                      type: "spring",
                      stiffness: 100
                    }
                  };
                default:
                  return {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.5 + index * 0.1 }
                  };
              }
            };

            const animation = getSkillAnimation(skill.animationType);

            return (
              <motion.div
                key={skill.title}
                initial={animation.initial}
                animate={inView ? animation.animate : animation.initial}
                transition={animation.transition}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: skill.animationType === "flip" ? 10 : 0,
                  y: skill.animationType === "bounce" ? -10 : 0,
                  transition: { duration: 0.3 }
                }}
                className="glass-card p-6 text-center"
              >
                <motion.div
                  whileHover={{ 
                    rotate: skill.animationType === "bounce" ? [0, -10, 10, 0] : 0,
                    scale: 1.2,
                    transition: { duration: 0.5 }
                  }}
                >
                  <skill.icon className="text-4xl text-blue-500 mb-4 mx-auto" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-display mb-3 text-white dark:text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: animation.transition.delay + 0.2 }}
                >
                  {skill.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 dark:text-gray-600 text-sm font-mono"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: animation.transition.delay + 0.4 }}
                >
                  {skill.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;