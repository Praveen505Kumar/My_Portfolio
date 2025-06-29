'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  description?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = props => {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
        {props.title}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
          {props.subtitle}
        </span>
      </h2>
      <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
      {props.description && (
        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {props.description}
        </p>
      )}
    </motion.div>
  );
};
