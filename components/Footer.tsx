import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black pt-8 pb-12 relative overflow-hidden">
      {/* Decorative Cerulean Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full -mr-64 -mt-64"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          
          <div className="pt-4">
            <Logo className="h-14 md:h-16 opacity-80 hover:opacity-100 transition-opacity" />
          </div>

          <div className="space-y-2">
            <div className="text-[10px] md:text-xs font-display font-bold text-white uppercase tracking-[0.4em]">
              © 2026. All Rights Reserved.
            </div>
          </div>

          <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex space-x-12 text-[9px] font-bold text-gray-500 tracking-[0.4em] uppercase">
              <a href="https://www.linkedin.com/company/decode-ventures" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">LinkedIn</a>
              <a href="mailto:ac@decode.ventures" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;