import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export const Contact = () => {
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = () => {
    if (!message.trim()) return;
    
    const subject = 'Portfolio Contact';
    const body = encodeURIComponent(message);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleWhatsAppSubmit = () => {
    if (!message.trim()) return;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${personalInfo.phone.replace(/\D/g, '')}?text=${encodedMessage}`);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and projects. 
            Let's discuss how we can work together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-white/10 p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or just say hello..."
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-white/20 dark:bg-black/30 border border-white/30 dark:border-white/20 focus:border-blue-500 focus:outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-all duration-300"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={handleEmailSubmit}
                disabled={!message.trim() || isSubmitted}
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 gradient-hover"
                whileHover={{ scale: message.trim() ? 1.02 : 1 }}
                whileTap={{ scale: message.trim() ? 0.98 : 1 }}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Mail size={20} />
                    Send Email
                  </>
                )}
              </motion.button>

              <motion.button
                onClick={handleWhatsAppSubmit}
                disabled={!message.trim() || isSubmitted}
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 border-2 border-green-500 text-green-500 rounded-xl font-semibold text-lg hover:bg-green-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 gradient-hover-border"
                whileHover={{ scale: message.trim() ? 1.02 : 1 }}
                whileTap={{ scale: message.trim() ? 0.98 : 1 }}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Sent!
                  </>
                ) : (
                  <>
                    <MessageCircle size={20} />
                    WhatsApp
                  </>
                )}
              </motion.button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                Or reach out directly:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  {personalInfo.email}
                </a>
                <span className="hidden sm:block text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-300">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};