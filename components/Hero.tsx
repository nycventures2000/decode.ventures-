import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* High-end liquid art background mirroring the reference image */}
      <div className="absolute inset-0 z-0 scale-110">
        <img 
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=2000" 
          alt="Liquid Ink Art" 
          className="w-full h-full object-cover opacity-70 animate-pulse duration-[8000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col items-center text-center">
        {/* Centered Logo in Hero */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Logo className="h-24 md:h-32 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
        </div>

        <div className="max-w-5xl space-y-10">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-[9rem] font-bold font-display uppercase tracking-tight text-white leading-[1.0] drop-shadow-2xl">
              Decode<br/>The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Future</span>
            </h1>
          </div>
          
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mx-auto"></div>
          
          <p className="text-xl md:text-2xl text-gray-300 font-bold tracking-[0.1em] mx-auto max-w-3xl leading-relaxed uppercase">
            Navigating Innovation, Transformation & Growth In Media & Entertainment
          </p>
        </div>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Hero;