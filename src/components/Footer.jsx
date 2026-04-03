import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-white/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between  gap-8 text-center md:text-left">
        <div className="space-y-4">
          <h3 className="text-2xl font-display  font-bold uppercase tracking-tight">
            sharan<span className="text-primary">raj</span>
          </h3>
          <p className="text-text-gray text-sm max-w-xs">
            Designing and developing digital experiences that leave an impression.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-text-gray text-xs uppercase tracking-widest font-medium text-center md:text-left w-full">Contact Details</span>
          <div className="flex flex-col gap-2">
            <a href="tel:+918015116201" className="hover:text-primary transition-colors">+91 80151 16201</a>
            <a href="mailto:tsharan2006@gmail.com" className="hover:text-primary transition-colors">tsharan2006@gmail.com</a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-text-gray text-xs uppercase tracking-widest font-medium text-center md:text-left w-full">Socials</span>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/sharanrajt/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>  
            <a href="https://github.com/SHARAN-GIT-7" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-text-gray text-xs tracking-widest">
        <p>© {currentYear} Sharanraj. All rights reserved.</p>
        <p>Built with React & Passion</p>
      </div>
    </footer>
  );
};

export default Footer;
