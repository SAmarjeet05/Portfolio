import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === 'dark' ? (
          <Moon className="w-6 h-6 text-white" />
        ) : (
          <Sun className="w-6 h-6 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
};