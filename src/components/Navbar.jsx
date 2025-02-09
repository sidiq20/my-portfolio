import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Stack', path: '/stack' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-primary/80 dark:bg-white/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-display text-white dark:text-gray-900"
          >
            Olasode <span className="text-blue-500">Sidiq</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`nav-link font-mono text-sm ${
                location.pathname === item.path 
                  ? 'text-blue-400 dark:text-blue-600' 
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-primary/95 dark:bg-white/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-mono text-sm ${
                  location.pathname === item.path 
                    ? 'text-blue-400 dark:text-blue-600' 
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar