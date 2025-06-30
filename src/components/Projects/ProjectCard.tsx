import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  images: string[];
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-xl border border-white/20 dark:border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
    >
      {/* Image Gallery */}
      <div className="relative h-48 overflow-hidden">
        <PhotoProvider>
          <div className="flex">
            <PhotoView src={project.images[0]}>
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover cursor-pointer group-hover:scale-110 transition-transform duration-300"
              />
            </PhotoView>
          </div>
          {project.images.length > 1 && (
            <div className="absolute top-4 right-4 flex gap-2">
              {project.images.slice(1).map((img, i) => (
                <PhotoView key={i} src={img}>
                  <div className="w-8 h-8 rounded bg-black/50 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-black/70 transition-colors">
                    <Eye size={16} className="text-white" />
                  </div>
                </PhotoView>
              ))}
            </div>
          )}
        </PhotoProvider>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>
          {project.featured && (
            <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full">
              Featured
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-white/20 dark:bg-black/30 text-gray-700 dark:text-gray-300 rounded-full border border-white/20 dark:border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 gradient-hover"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink size={16} />
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 border border-blue-500/50 text-blue-500 dark:text-blue-400 rounded-lg font-medium text-sm hover:bg-blue-500/10 transition-all duration-300 gradient-hover-border"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={16} />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};