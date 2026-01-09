import React from 'react';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-10 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center h-8 md:h-10">
          <a href="#hero" className="h-full block">
            <Logo className="h-full" />
          </a>
        </div>

        {/* Navigation links removed as requested */}
      </div>
    </nav>
  );
};

export default Navbar;