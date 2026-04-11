import React, { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed the background colors and glass effects per your request
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'} bg-transparent`}>
      <div className="w-full px-6 md:px-12 flex justify-between items-center">
        
        {/* Left: Image Logo */}
        <a href="#" className="flex items-center hover:opacity-80 transition-opacity duration-300">
          {/* Replace src attribute with your actual logo image path */}
          <img 
            src="/src/assets/images/Sharan.png" 
            alt="Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </a>
        
        {/* Right: Smaller Get in touch button */}
        <div className="flex items-center">
          <MagneticButton 
            href="#contact" 
            className="px-5 py-2 text-xs md:text-sm rounded-full bg-transparent border border-white/40 hover:border-primary hover:shadow-[0_0_15px_rgba(240,185,11,0.6)] uppercase tracking-wider font-bold"
          >
            Get in touch
          </MagneticButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;