import { motion } from 'framer-motion';
import { Bio } from './Bio';
import { Skills } from './Skills';
import { Experience } from './Experience';

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <Bio />
        <Skills />
        <Experience />
      </div>
    </section>
  );
};