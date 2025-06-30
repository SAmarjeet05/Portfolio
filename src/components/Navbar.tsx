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
    <>
      {/* Mobile Menu Icon */}
      <div className="md:hidden fixed top-6 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-10 w-10 flex items-center justify-center text-gray-700 dark:text-gray-200 rounded-lg hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
        >
          {isOpen ? <X size={22} strokeWidth={2.25} /> : <Menu size={22} strokeWidth={2.25} />}
        </button>
      </div>

      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-40 px-8 py-4 rounded-2xl bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-white/30 dark:border-white/20 shadow-2xl"
      >

        <div className="hidden md:flex items-center justify-center space-x-10">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg ${activeSection === section
                  ? 'text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text bg-white/30 dark:bg-black/40'
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/20 dark:hover:bg-black/20'
                }`}
            >
              {section}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden fixed top-20 right-4 w-48 p-6 rounded-2xl bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/30 dark:border-white/20 shadow-2xl z-40"
          >
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left py-3 px-4 capitalize text-sm font-medium transition-all duration-300 rounded-lg ${activeSection === section
                    ? 'text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text bg-white/40 dark:bg-black/40'
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/30 dark:hover:bg-black/30'
                  }`}
              >
                {section}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
