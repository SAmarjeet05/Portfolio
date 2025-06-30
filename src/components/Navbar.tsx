import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const sections = ['home', 'about', 'projects', 'certificates', 'contact'];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(sections);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-lg"
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center space-x-8">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`capitalize text-sm font-medium transition-all duration-300 ${
              activeSection === section
                ? 'text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text'
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 dark:text-gray-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 rounded-lg bg-white/95 dark:bg-black/95 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-lg"
            >
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 capitalize text-sm font-medium transition-all duration-300 ${
                    activeSection === section
                      ? 'text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};