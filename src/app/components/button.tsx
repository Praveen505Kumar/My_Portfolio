'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  target?: string;
  rel?: string;
  iconType?: 'arrow' | 'default';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  label,
  icon,
  variant = 'primary',
  onClick,
  target,
  rel,
  iconType = 'default',
  className = '',
}) => {
  // Base classes for all buttons
  const baseClasses =
    'group relative px-6 py-3 rounded-full font-medium flex items-center justify-center transition-all duration-300';

  // Variant-specific classes
  const variantClasses = {
    primary:
      'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40',
    secondary:
      'bg-gray-300/10 dark:bg-gray-800/60 text-black dark:text-white backdrop-blur-sm border border-gray-700  \
      hover:bg-gray-800/10 hover:border-emerald-500/50 shadow-xl hover:shadow-emerald-500/10 dark:hover:bg-gray-700/60 dark:hover:border-emerald-500/30 \
      shadow-lg dark:hover:shadow-emerald-500/10 hover:translate-y-[-3px]',
    outline:
      'text-black dark:text-white border border-emerald-500/50 hover:border-gray-600 dark:border-gray-600 dark:hover:border-emerald-500/50',
  };

  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`${baseClasses} ${variantClasses[variant]} ${className} inline-flex transition-transform duration-300`}
    >
      <span className="flex items-center">
        <span>{label}</span>

        {iconType === 'arrow' ? (
          <motion.div
            className="ml-2 inline-flex"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        ) : (
          <motion.div
            className="ml-2 inline-flex"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}
      </span>
    </a>
  );
};
