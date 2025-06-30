import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal';

export const Bio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text">
        About Me
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        {personalInfo.bio}
      </p>
    </motion.div>
  );
};