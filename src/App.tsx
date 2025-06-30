import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParticleBackground } from './components/ParticleBackground';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Certificates } from './components/Certificates/Certificates';
import { Contact } from './components/Contact/Contact';
import { useTheme } from './hooks/useTheme';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen transition-all duration-1000">
      <ParticleBackground />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Navbar />
            <ThemeToggle />
            
            <main>
              <Hero />
              <About />
              <Projects />
              <Certificates />
              <Contact />
            </main>

            <footer className="py-8 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200/50 dark:border-white/10">
              <div className="container mx-auto px-6">
                <p>&copy; 2024 Alex Johnson. Built with React, TypeScript, and lots of ❤️</p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;