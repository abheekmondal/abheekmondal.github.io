
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-darker border-t border-cyber-green/10 py-8">
      <div className="cyber-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-tech font-bold text-xl text-white">
              <span className="text-cyber-green">Cyber</span>Security
            </Link>
            <p className="text-gray-400 mt-2 text-sm max-w-md">
              Securing the digital frontier with advanced cybersecurity solutions and proactive threat mitigation.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-green transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-green transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-green transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-400 hover:text-cyber-green transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} CyberFolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
