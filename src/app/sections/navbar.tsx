import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '@/app/config';
import { Code2, Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../contexts/ThemeContext';

interface NavBarProps {
  activeSection: string;
  onSectionNav: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, onSectionNav }) => {
  const { links } = portfolioConfig.navigation;
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white/20 dark:bg-gray-800/30 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <a
            href="#home"
            className="flex items-center space-x-2 text-xl font-bold text-teal-400 cursor-pointer"
            onClick={e => onSectionNav(e, 'home')}
          >
            <Code2 className="h-6 w-6 text-emerald-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Praveen Kumar
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={e => onSectionNav(e, link.href)}
                  initial={linkVariants.initial}
                  animate={linkVariants.animate}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.1,
                  }}
                  className={`
                    transition-all 
                    duration-300 
                    hover:text-emerald-500 
                    darK:hover:text-emerald-400 
                    ${activeSection === link.href ? 'text-emerald-500 dark:text-emerald-400' : 'text-gray-600 dark:text-gray-300'}
                  `}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
