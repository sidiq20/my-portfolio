import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
            className="text-2xl font-display text-white dark:text-gray-900 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 483.812 300.031"
              className="fill-current text-blue-500"
            >
              <path d="M120.435 219.222q0 26.9-11.787 41.4t-33.717 14.5q-17.912 0-31.25-13.692t-16.63-35.181H0.005q1.461 32.073 22.386 52.882t51.626 20.809q34.9 0 54.55-21.381T148.212 219.375V0.939h-27.777V219.222zM370.752 130.778S310.089 34.263 297.712 17.309C290.229 7.056 270.154 0 246.686 0c-16.182 0-75.039 12.676-75.039 74.044s45.852 71.394 61.032 76.928 73.039 13.529 73.039 71.159c0 59.44-109.221 81.761-114.061-6.731h-28.015s0.067 84.621 83.044 84.621c52.562 0 73.039-38.464 73.039-38.464l51.027-79.814 75.04 118.165H477.812L386.761 156.742 483.812 4.808h-32.017zm-95.05-99.045 78.041 125.009-24.013 38.464s-4.784-34.42-34.018-50c-56.511-30.124-98.945-21.662-97.051-73.082C200.48 22.738 257.562 19.663 275.702 31.733z" />
            </svg>
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
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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

export default Navbar;