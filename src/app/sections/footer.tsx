import React from 'react';
import { portfolioConfig } from '@/app/config';

const Footer: React.FC = () => {
  const { copyright, tagline } = portfolioConfig.footer;

  return (
    <footer className="py-8 px-4 bg-gray-50 dark:bg-gray-900 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="container mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-300 text-sm">{copyright}</p>
        <p className="text-gray-700 dark:text-gray-400 text-xs mt-2">{tagline}</p>
      </div>
    </footer>
  );
};

export { Footer };
