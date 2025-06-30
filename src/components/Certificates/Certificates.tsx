import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Award, Calendar } from 'lucide-react';
import { certificates } from '../../data/certificates';
import 'react-photo-view/dist/react-photo-view.css';

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-16 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text">
              Certificates
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <PhotoProvider>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group cursor-pointer shadow-lg dark:shadow-none"
              >
                <PhotoView src={certificate.image}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium text-sm">Click to view full size</p>
                    </div>
                  </div>
                </PhotoView>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                      <Award size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
                        {certificate.title}
                      </h3>
                      <p className="text-blue-500 dark:text-blue-400 font-medium text-sm">
                        {certificate.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={16} />
                    {certificate.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
};