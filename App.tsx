import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import About from './components/About';
import ContactSection from './components/Portfolio';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-black selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* Global Liquid Gel & Bubbles Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
        {/* Deep Viscous Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0616] via-[#000000] to-[#04091a] opacity-100"></div>
        
        {/* Animated Gel Globs */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-orange-600/5 rounded-full blur-[140px] animate-[gel-pulse_12s_infinite_alternate]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-blue-600/5 rounded-full blur-[160px] animate-[gel-pulse_15s_infinite_alternate-reverse]"></div>

        {/* Bubble Layer */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 120 + 40}px`,
                height: `${Math.random() * 120 + 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 60%, transparent 100%)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(3px)',
                boxShadow: 'inset -2px -2px 10px rgba(0,0,0,0.5), inset 2px 2px 10px rgba(255,255,255,0.05)',
                animation: `float-gel-bubble ${Math.random() * 15 + 25}s infinite ease-in-out`,
                opacity: Math.random() * 0.4 + 0.1,
              }}
            >
              {/* Highlight spec for gel feel */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full blur-[1px]"></div>
            </div>
          ))}
        </div>

        {/* Noise overlay for tactile feel */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <style>{`
        @keyframes float-gel-bubble {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(40px, -60px) rotate(10deg) scale(1.05); }
          66% { transform: translate(-30px, -20px) rotate(-10deg) scale(0.95); }
          100% { transform: translate(20px, 40px) rotate(5deg) scale(1.02); }
        }
        @keyframes gel-pulse {
          0% { transform: scale(1) translate(0, 0); opacity: 0.4; }
          50% { transform: scale(1.1) translate(20px, -10px); opacity: 0.6; }
          100% { transform: scale(0.95) translate(-10px, 20px); opacity: 0.4; }
        }
      `}</style>

      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow relative z-10">
        <section id="hero">
          <Hero />
        </section>

        <section id="philosophy" className="py-20 scroll-mt-20">
          <About />
        </section>
        
        <section id="services" className="py-20 bg-zinc-950/20 backdrop-blur-sm border-y border-white/5 scroll-mt-20">
          <Philosophy />
        </section>

        <section id="contact" className="py-16 scroll-mt-16">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;