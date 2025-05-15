import React, { useState, useEffect } from 'react';
import { Menu, X, Monitor, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Monitor className="h-8 w-8 text-blue-500" />
              <Zap className="h-8 w-8 -ml-3 text-indigo-400" />
              <span className="ml-2 text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
                TechAdlien
              </span>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['services', 'work', 'testimonials', 'tools', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 hover:text-white transition-colors capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['services', 'work', 'testimonials', 'tools', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;