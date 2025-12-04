import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Hexagon } from 'lucide-react';
import { NAV_ITEMS, PHONE_NUMBER } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Navbar Logic:
  // On Home: Transparent at top (White Text), White when scrolled (Dark Text).
  // Other Pages: Always White (Dark Text).
  const isTransparent = isHome && !scrolled && !isOpen;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent py-4' : 'bg-white shadow-md py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Hexagon className={`h-8 w-8 text-gold-500 fill-current group-hover:rotate-90 transition-transform duration-500`} />
            <div className="flex flex-col">
              <span className={`text-xl font-display font-bold tracking-wide ${isTransparent ? 'text-white' : 'text-gray-900'}`}>DITHANIMBA</span>
              <span className={`text-[0.6rem] uppercase tracking-[0.2em] ${isTransparent ? 'text-gray-200' : 'text-gray-500'}`}>Holdings (Pty) Ltd</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                  location.pathname === item.path 
                    ? 'text-gold-500 font-bold' 
                    : isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all font-bold text-sm ${
                isTransparent 
                  ? 'bg-white/10 text-white hover:bg-gold-500 hover:text-black' 
                  : 'bg-gold-500 text-black hover:bg-gold-400 shadow-sm'
              }`}
            >
              <Phone size={16} />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors ${isTransparent ? 'text-white' : 'text-gray-900'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden fixed top-[60px] left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 text-base font-medium rounded-md hover:bg-gray-50 ${
                location.pathname === item.path 
                  ? 'text-gold-500 bg-gold-50 border-l-4 border-gold-500' 
                  : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="flex items-center justify-center space-x-2 w-full mt-6 bg-gold-500 text-black px-4 py-3 rounded-md font-bold shadow-md active:bg-gold-600"
            >
              <Phone size={18} />
              <span>Call {PHONE_NUMBER}</span>
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;