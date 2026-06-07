import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';
import { Button } from '../components/Button';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactLink = ({ icon: Icon, label, value, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 10, scale: 1.05 }}
      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 border border-neon-purple/30 hover:border-neon-cyan/50 transition-all duration-300 group"
    >
      <Icon className="text-neon-cyan group-hover:text-neon-pink transition-colors size-6" />
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-white font-semibold">{value}</p>
      </div>
    </motion.a>
  );
};

export const Contact = () => {
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      // TODO: Implement form submission (connect to Formspree, EmailJS, or your backend)
      // Example with Formspree:
      // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // For now, just simulate success
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.1), transparent)',
            'radial-gradient(ellipse at 80% 50%, rgba(6, 182, 212, 0.1), transparent)',
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
          >
            <span className="bg-gradient-to-r from-neon-pink to-neon-lime bg-clip-text text-transparent">
              {portfolioData.contact.heading}
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-gray-300 text-lg mb-12"
          >
            {portfolioData.contact.subtext}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-card/50 border border-neon-purple/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-card/50 border border-neon-purple/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-dark-card/50 border border-neon-purple/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 transition-colors resize-none"
              />

              <Button
                type="submit"
                variant="primary"
                className="w-full justify-center relative group"
                disabled={submitStatus === 'sending'}
              >
                {submitStatus === 'sending' ? (
                  'Sending...'
                ) : submitStatus === 'success' ? (
                  '✓ Message Sent!'
                ) : submitStatus === 'error' ? (
                  '✗ Error sending'
                ) : (
                  'Send Message'
                )}

                {/* Particle burst on submit */}
                {submitStatus === 'success' && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-neon-lime rounded-full"
                        initial={{
                          x: 0,
                          y: 0,
                          opacity: 1,
                        }}
                        animate={{
                          x: Math.cos((i / 8) * Math.PI * 2) * 50,
                          y: Math.sin((i / 8) * Math.PI * 2) * 50,
                          opacity: 0,
                        }}
                        transition={{ duration: 0.6 }}
                      />
                    ))}
                  </>
                )}
              </Button>
            </motion.form>

            {/* Direct Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              {portfolioData.contact.links.map((link) => {
                const iconMap = {
                  Mail: Mail,
                  Linkedin: Linkedin,
                  Github: Github,
                };
                const Icon = iconMap[link.icon];

                return (
                  <ContactLink
                    key={link.label}
                    icon={Icon}
                    label={link.label}
                    value={link.value}
                    href={link.href}
                  />
                );
              })}
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-neon-purple/30 text-center text-gray-400"
          >
            <p>
              Built with React + Tailwind CSS + Framer Motion 🚀
            </p>
            <p className="mt-2 text-sm">
              © 2026 Yeshwanth Surya. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
