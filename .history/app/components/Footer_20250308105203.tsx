'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub />, href: 'https://github.com/priteshraj' },
    { name: 'LinkedIn', icon: <FiLinkedin />, href: 'https://linkedin.com/in/priteshraj' },
    { name: 'Twitter', icon: <FiTwitter />, href: 'https://twitter.com/priteshraj' },
    { name: 'Email', icon: <FiMail />, href: 'mailto:contact@priteshraj.com' },
  ];

  return (
    <footer className="bg-white dark:bg-dark py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Pritesh Raj
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Software Developer | Problem Solver | Tech Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <span className="text-xl">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Pritesh Raj. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 