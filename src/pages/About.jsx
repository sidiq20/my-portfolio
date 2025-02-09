import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaRobot, FaDatabase } from 'react-icons/fa';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      title: "Full Stack Development",
      icon: FaCode,
      description: "Experienced in building responsive web applications using modern technologies like React, Flask, jinja, and MongoDB."
    },
    {
      title: "AI/ML Development",
      icon: FaRobot,
      description: "Proficient in developing machine learning models using TensorFlow, scikit-learn, and PyQt5 for data analysis and predictions."
    },
    {
      title: "GUI Development",
      icon: FaDatabase,
      description: "Skilled in creating desktop applications using PyQt5, with a focus on user-friendly interfaces."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-primary to-secondary dark:from-gray-100 dark:to-white"
    >
      <div className="max-w-4xl mx-auto pt-20">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl"
          >
            <img
              src="https://placehold.co/200x200/png"
              alt="Olasode Sidiq"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex-1">
            <motion.h2 
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-display mb-4"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-black-600 dark:text-black-300 font-mono leading-relaxed"
            >
              I'm Olasode Sidiq, a passionate Full Stack Developer with expertise in AI/ML technologies.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 mb-12"
        >
          <p className="text-black-300 font-mono leading-relaxed mb-6">
            I'm Olasode Sidiq, a passionate Full Stack Developer with a strong focus on AI/ML technologies. 
            My journey in software development has led me to work with a diverse range of technologies, 
            from web development to machine learning applications.
          </p>
          <p className="text-black-300 font-mono leading-relaxed">
            I specialize in creating intuitive user interfaces and robust backend systems, 
            combining modern web technologies with AI capabilities to build innovative solutions.
            My experience spans across web development, GUI applications, and machine learning projects.
          </p>
        </motion.div>

        {/* GitHub Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-8 mb-12"
        >
          <h3 className="text-2xl font-display mb-6 text-center">GitHub Stats</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=sidiq20&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&text_color=ffffff&icon_color=3b82f6"
              alt="GitHub Stats"
              className="max-w-full md:max-w-[50%] h-auto dark:invert"
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=sidiq20&theme=transparent&hide_border=true&stroke=3b82f6&ring=3b82f6&fire=3b82f6&currStreakNum=ffffff&sideNums=ffffff&currStreakLabel=3b82f6&sideLabels=3b82f6&dates=ffffff"
              alt="GitHub Streak"
              className="max-w-full md:max-w-[50%] h-auto dark:invert"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=sidiq20&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=ffffff"
              alt="Top Languages"
              className="max-w-full md:max-w-[60%] h-auto dark:invert"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <skill.icon className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-display mb-3">{skill.title}</h3>
              <p className="text-gray-400 text-sm font-mono">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;