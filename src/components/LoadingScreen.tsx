import { motion } from 'framer-motion';
import { personalInfo } from '../data/personal';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => setTimeout(onComplete, 1000)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center text-4xl font-bold text-white">
            {personalInfo.name.charAt(0)}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-white/80 text-lg mb-8"
        >
          {personalInfo.title}
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, repeat: Infinity, duration: 1 }}
          className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto"
        />
      </div>
    </motion.div>
  );
};