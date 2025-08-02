import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { internships, education } from '../../data/personal';

export const Experience = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Internships */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text">
          Experience
        </h3>
        <div className="space-y-6">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-lg p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-cyan-400/50 shadow-lg dark:hover:shadow-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <img
                  src={internship.logo}
                  alt={internship.company}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1">
                    {internship.role}
                  </h4>
                  <p className="text-blue-500 dark:text-blue-400 font-medium mb-2">
                    {internship.company}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar size={16} />
                    {internship.duration}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {internship.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text">
          Education
        </h3>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-lg p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-cyan-400/50 shadow-lg dark:hover:shadow-xl hover:shadow-xl transition-all duration-300"
            >
              <h4 className="font-bold text-gray-800 dark:text-white mb-1">
                {edu.degree}
              </h4>
              <p className="text-blue-500 dark:text-blue-400 font-medium mb-2">
                {edu.institution}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <Calendar size={16} />
                {edu.duration}
              </div>
              <div className="space-y-1">
                {edu.achievements.map((achievement, i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-300 text-sm">
                    • {achievement}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};