import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { portfolioConfig } from '@/app/config';
import { useState } from 'react';
import Image from 'next/image';

const Certifications = () => {
  const [hoveredCertification, setHoveredCertification] = useState<number | null>(null);
  const { certifications, title, subtitle, description } = portfolioConfig.sections.certifications;
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            {title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              {subtitle}
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredCertification(cert.id)}
              onMouseLeave={() => setHoveredCertification(null)}
              className={`dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col
                ${
                  hoveredCertification === cert.id
                    ? 'border-emerald-500/50 shadow-xl shadow-emerald-500/10 translate-y-[-5px]'
                    : 'border-gray-700/50 shadow-lg shadow-black/20'
                }`}
            >
              <div className="relative h-40 sm:h-48 md:h-40">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-emerald-600 text-white p-2 rounded-full">
                  <Award className="h-5 w-5" />
                </div>
              </div>

              <div className="p-2 sm:p-3 flex flex-col justify-between flex-grow">
                <h3 className="font-bold text-black dark:text-white sm:text-lg mb-1">
                  {cert.title}
                </h3>
                <div>
                  <p className="text-emerald-500 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{cert.date}</p>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
