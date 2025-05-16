import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Palette } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Palette className={`h-8 w-8 ${isScrolled ? 'text-indigo-600' : 'text-white'}`} />
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Susara Editz
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks isScrolled={isScrolled} />
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-md ${
                isScrolled
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-white text-indigo-600 hover:bg-gray-100'
              } transition-all duration-300`}
            >
              Get in Touch
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-600' : 'text-white'}`}
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLinks closeMenu={closeMenu} />
            <Link
              to="/contact"
              className="block px-4 py-2 rounded-md text-center bg-indigo-600 text-white hover:bg-indigo-700"
              onClick={closeMenu}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const linkClasses = `text-sm font-medium ${
    isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-gray-200'
  } transition-colors duration-300`;
  
  return (
    <>
      <Link to="/" className={linkClasses}>Home</Link>
      <Link to="/portfolio" className={linkClasses}>Portfolio</Link>
      <Link to="/services" className={linkClasses}>Services</Link>
      <Link to="/about" className={linkClasses}>About</Link>
    </>
  );
};

const MobileNavLinks: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  const linkClasses = "block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md";
  
  return (
    <>
      <Link to="/" className={linkClasses} onClick={closeMenu}>Home</Link>
      <Link to="/portfolio" className={linkClasses} onClick={closeMenu}>Portfolio</Link>
      <Link to="/services" className={linkClasses} onClick={closeMenu}>Services</Link>
      <Link to="/about" className={linkClasses} onClick={closeMenu}>About</Link>
    </>
  );
};

export default Navbar;