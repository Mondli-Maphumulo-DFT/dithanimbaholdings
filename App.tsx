import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Fixed imports – correct path + correct extension
import Navbar from "./src/components/Layout/Navbar.tsx";
import Footer from "./src/components/Layout/Footer.tsx";

import WhatsAppFloat from './components/business/WhatsAppFloat';
import { DataProvider } from './context/DataContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import WhatWeBuy from './pages/WhatWeBuy';
import Pricing from './pages/Pricing';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <DataProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/what-we-buy" element={<WhatWeBuy />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;