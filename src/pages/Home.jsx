import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex items-center justify-center px-6 bg-gradient-to-b from-primary to-secondary dark:from-gray-100 dark:to-white"
    >
      <div className="text-center max-w-4xl">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-display mb-6 text-white dark:text-gray-900"
        >
          Olasode <span className="text-blue-500">Sidiq</span> 
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 dark:text-gray-600 font-mono mb-8"
        >
          Full Stack Developer & AI/ML Enthusiast
        </motion.p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <Link 
            to="/projects"
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-mono text-sm hover:bg-blue-600 transition-colors"
          >
            View Projects
          </Link>
          <Link 
            to="/contact"
            className="bg-transparent border-2 border-white dark:border-gray-900 text-white dark:text-gray-900 px-8 py-3 rounded-full font-mono text-sm hover:bg-white/10 dark:hover:bg-gray-900/10 transition-colors"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home