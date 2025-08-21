import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-16 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/*featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))*/}
        </div>

        {/* Other Projects */}
        {/*otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text">
                Other Projects
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
              ))}
            </div>
          </>
        )} */}
      </div>
    </section>
  );
};