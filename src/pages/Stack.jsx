import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaJs, FaPython, FaDocker, FaGitAlt,
  FaDatabase, FaFlask
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

  const technologies = {
    "Frontend": [
      { name: "React", icon: FaReact, color: "text-blue-400" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
      { name: "Jinja", icon: SiJinja, color: "text-red-400" },
    ],
    "Backend": [
      { name: "Python", icon: FaPython, color: "text-yellow-300" },
      { name: "Flask", icon: FaFlask, color: "text-gray-300" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    ],
    "AI/ML": [
      { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
      { name: "scikit-learn", icon: SiScikitlearn, color: "text-blue-500" },
      { name: "NumPy", icon: SiNumpy, color: "text-blue-300" },
      { name: "Pandas", icon: SiPandas, color: "text-purple-400" }
    ],
    "Tools": [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "Docker", icon: FaDocker, color: "text-blue-400" },
      { name: "Ngrok", icon: SiNgrok, color: "text-yellow-400" },
      { name: "Ubuntu", icon: SiUbuntu, color: "text-orange-400" },
      { name: "Selenium", icon: SiSelenium, color: "text-green-400" },
    ],
    "Gui": [
      { name: "Tkinter", icon: SiQt, color: "text-blue-500" },
      { name: "PyQt5", icon: SiQt, color: "text-green-500" },
    ],
    "Database": [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    ],
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-primary to-secondary dark:from-gray-100 dark:to-white"
    >
      <div className="max-w-6xl mx-auto pt-20">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display mb-12 text-center"
        >
          Tools I  <span className="text-blue-500">have worked</span> with
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(technologies).map(([category, techs], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-2xl font-display mb-6">{category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {techs.map(({ name, icon: Icon, color }) => (
                  <div key={name} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <Icon className={`text-2xl ${color}`} />
                    <span className="font-mono text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Stack;