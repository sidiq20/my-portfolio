import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/sidiq20", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/sidiqolasode", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com/sidiqolasode", label: "Twitter" },
    { icon: FaInstagram, url: "https://twitter.com/napoleon_xo_", label: "Instagram" },
    { icon: FaEnvelope, url: "mailto:sidiqolasode@gmail.com", label: "Email" }
  ];

  return (
    <footer className="py-8 px-6 bg-primary/50 dark:bg-gray-100/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {socialLinks.map(({ icon: Icon, url, label }) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900 transition-colors"
              aria-label={label}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-600 font-mono">
          © {new Date().getFullYear()} Olasode Sidiq. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer