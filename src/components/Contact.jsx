import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { useState, useRef } from 'react';

function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [socialRef, socialInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
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
    },
    {
      icon: FaInstagram,
      url: "https://twitter.com/napoleon_xo_",
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      icon: FaEnvelope,
      url: "mailto:sidiqolasode@gmail.com",
      label: "Email",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section ref={containerRef} id="contact" className="py-20 px-6 bg-primary dark:bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, scale: 0.5, rotateX: -15 }}
          animate={inView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="text-4xl md:text-5xl font-display mb-12 text-center text-white dark:text-gray-900"
        >
          Get in Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -100, rotateY: -20, scale: 0.8 }}
            animate={formInView ? { opacity: 1, x: 0, rotateY: 0, scale: 1 } : {}}
            transition={{ 
              duration: 1.0,
              delay: 0.2,
              type: "spring",
              stiffness: 80,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              transition: { duration: 0.3 }
            }}
            className="bg-secondary dark:bg-gray-50 p-8 rounded-xl shadow-lg"
          >
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl font-display text-white dark:text-gray-900 mb-6"
            >
              Send me a message
            </motion.h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="name" className="block text-sm font-mono mb-2 text-gray-300 dark:text-gray-700">Name</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-white border border-white/10 dark:border-gray-200 focus:border-blue-500 focus:outline-none font-mono text-white dark:text-gray-900 transition-colors"
                  required
                  whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="email" className="block text-sm font-mono mb-2 text-gray-300 dark:text-gray-700">Email</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-white border border-white/10 dark:border-gray-200 focus:border-blue-500 focus:outline-none font-mono text-white dark:text-gray-900 transition-colors"
                  required
                  whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label htmlFor="message" className="block text-sm font-mono mb-2 text-gray-300 dark:text-gray-700">Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-white border border-white/10 dark:border-gray-200 focus:border-blue-500 focus:outline-none font-mono text-white dark:text-gray-900 transition-colors resize-none"
                  required
                  whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                ></motion.textarea>
              </motion.div>
              <motion.button
                type="submit"
                disabled={formStatus === 'sending'}
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-500 text-white px-8 py-3 rounded-lg font-mono text-sm hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>
              {formStatus === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-green-400 dark:text-green-600 text-sm font-mono text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {formStatus === 'error' && (
                <motion.p 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-red-400 dark:text-red-600 text-sm font-mono text-center"
                >
                  Please fill in all fields.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            ref={socialRef}
            initial={{ opacity: 0, x: 100, rotateY: 20, scale: 0.8 }}
            animate={socialInView ? { opacity: 1, x: 0, rotateY: 0, scale: 1 } : {}}
            transition={{ 
              duration: 1.0,
              delay: 0.3,
              type: "spring",
              stiffness: 80,
              damping: 15
            }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={socialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.h3 
                className="text-xl font-display text-white dark:text-gray-900 mb-4"
                whileHover={{ scale: 1.05, color: "#3b82f6" }}
              >
                Let's connect
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={socialInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-gray-300 dark:text-gray-600 font-mono leading-relaxed"
              >
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={socialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.h4 
                className="text-lg font-display text-white dark:text-gray-900 mb-4"
                whileHover={{ scale: 1.05, color: "#3b82f6" }}
              >
                Find me on
              </motion.h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map(({ icon: Icon, url, label, color }, index) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    animate={socialInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8 + (index * 0.1),
                      type: "spring",
                      stiffness: 150,
                      damping: 12
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -5, 5, 0],
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 p-3 rounded-lg bg-white/5 dark:bg-gray-900/5 text-gray-300 dark:text-gray-600 transition-colors ${color}`}
                    aria-label={label}
                  >
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.2,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Icon className="text-xl" />
                    </motion.div>
                    <span className="font-mono text-sm">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
              animate={socialInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 1.3,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.02,
                rotateX: 2,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)",
                transition: { duration: 0.3 }
              }}
              className="bg-white/5 dark:bg-gray-900/5 p-6 rounded-lg"
            >
              <motion.h4 
                initial={{ opacity: 0, y: -10 }}
                animate={socialInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="text-lg font-display text-white dark:text-gray-900 mb-3"
              >
                Quick Response
              </motion.h4>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={socialInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.7 }}
                className="text-gray-300 dark:text-gray-600 font-mono text-sm"
              >
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to reach out via email or LinkedIn.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;