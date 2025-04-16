
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, FileText, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);
  
  const navLinks = [
    { path: '/', name: 'Home', icon: <Home size={18} /> },
    { path: '/projects', name: 'Projects', icon: <Briefcase size={18} /> },
    { path: '/resume', name: 'Resume', icon: <FileText size={18} /> },
    { path: '/contact', name: 'Contact', icon: <Mail size={18} /> },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-cyber-darker/90 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="cyber-container flex items-center justify-between">
        <Link to="/" className="group flex items-center space-x-2">
          <span className="font-tech font-bold text-xl sm:text-2xl text-white">
            <span className="text-cyber-green animate-pulse-glow">Cyber</span>Security
          </span>
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center space-x-1 text-sm font-medium transition-all hover:text-cyber-green ${
                location.pathname === link.path 
                  ? 'text-cyber-green border-b-2 border-cyber-green' 
                  : 'text-gray-300'
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-cyber-green"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cyber-darker/95 backdrop-blur-md shadow-lg py-3 border-t border-cyber-green/20 animate-fade-in">
          <div className="cyber-container flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-3 p-2 rounded-md ${
                  location.pathname === link.path
                    ? 'text-cyber-green bg-cyber-green/10'
                    : 'text-gray-300 hover:bg-cyber-green/5 hover:text-cyber-green'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
