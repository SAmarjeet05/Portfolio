import { motion } from 'framer-motion';
import { skills } from '../../data/personal';

export const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text">
        Skills & Technologies
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-lg p-4 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-cyan-400/50 shadow-lg dark:hover:shadow-xl hover:shadow-xl transition-all duration-300"
          >
            <div className="text-2xl mb-2">{skill.icon}</div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{skill.name}</h4>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};