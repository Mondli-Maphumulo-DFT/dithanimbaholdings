import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Hexagon, Lock } from 'lucide-react';
import { COMPANY_NAME, NAV_ITEMS, ADDRESS_MAIN, PHONE_NUMBER, EMAIL_INFO } from '../../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
       {/* Decorative Pattern Overlay */}
       <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Hexagon className="h-6 w-6 text-gold-500 fill-current" />
              <span className="text-lg font-display font-bold text-white tracking-wide">{COMPANY_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dithanimba Holdings is a 100% Black-Owned Scrap Metal Recycling company in Pretoria. We offer the highest prices for copper, aluminium, and ferrous metals in Gauteng.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-wider text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services/Materials */}
          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-wider text-sm mb-4">What We Buy</h3>
            <ul className="space-y-2">
              <li><Link to="/what-we-buy" className="text-gray-400 hover:text-white text-sm">Copper Scrap Prices</Link></li>
              <li><Link to="/what-we-buy" className="text-gray-400 hover:text-white text-sm">Aluminium Recycling</Link></li>
              <li><Link to="/what-we-buy" className="text-gray-400 hover:text-white text-sm">Brass & Steel</Link></li>
              <li><Link to="/what-we-buy" className="text-gray-400 hover:text-white text-sm">Electric Motors</Link></li>
              <li><Link to="/what-we-buy" className="text-gray-400 hover:text-white text-sm">Scrap Cars</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-wider text-sm mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-gold-500 shrink-0" />
                <span>{ADDRESS_MAIN}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-gold-500 shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="hover:text-white">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-gold-500 shrink-0" />
                <a href={`mailto:${EMAIL_INFO}`} className="hover:text-white">{EMAIL_INFO}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved. B-BBEE Level 1 Contributor.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <Link to="/admin" className="hover:text-gold-500 flex items-center"><Lock size={12} className="mr-1"/> Staff Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;