import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    const mailtoUrl = `mailto:sidiqolasode@gmail.com?subject=Portfolio Contact: ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoUrl;

    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/sidiq20",
      label: "GitHub",
      color: "hover:text-gray-400 dark:hover:text-gray-600"
    },
    {
      icon: FaLinkedin,
      url: "https://linkedin.com/in/sidiqolasode",
      label: "LinkedIn",
      color: "hover:text-blue-400 dark:hover:text-blue-600"
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/sidiqolasode",
      label: "Twitter",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-6 bg-primary dark:bg-white"
    >
      <div className="max-w-4xl mx-auto pt-20">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display mb-12 text-center text-white dark:text-gray-900"
        >
          Get in Touch
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-secondary dark:bg-gray-50 p-8 rounded-xl shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-mono mb-2 text-gray-300 dark:text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 dark:bg-white border border-white/10 dark:border-gray-200 focus:border-blue-500 focus:outline-none font-mono text-white dark:text-gray-900"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono mb-2 text-gray-300 dark:text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 dark:bg-white border border-white/10 dark:border-gray-200 focus:border-blue-500 focus:outline-none font-mono text-white dark:text-gray-900"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mono mb-2 text-gray-300 dark:text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-white/5 dark:bg-white border border-white/10 dark:border-gray-200 focus:border-blue-500 focus:outline-none font-mono text-white dark:text-gray-900"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full bg-blue-500 text-white px-8 py-3 rounded-full font-mono text-sm hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus === 'success' && (
              <p className="text-green-400 dark:text-green-600 text-sm font-mono text-center">Message sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-400 dark:text-red-600 text-sm font-mono text-center">Please fill in all fields.</p>
            )}
          </form>

          <div className="flex justify-center space-x-8 mt-8">
            {socialLinks.map(({ icon: Icon, url, label, color }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-3xl text-gray-300 dark:text-gray-600 transition-colors ${color}`}
                aria-label={label}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;