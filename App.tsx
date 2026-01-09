import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import About from "./components/About";
import ContactSection from "./components/Portfolio";
import Footer from "./components/Footer";

type BubbleSpec = {
  size: number;
  left: string;
  top: string;
  opacity: number;
  duration: number;
  driftX1: number;
  driftY1: number;
  driftX2: number;
  driftY2: number;
  rot1: number;
  rot2: number;
  rot3: number;
  scale1: number;
  scale2: number;
  scale3: number;
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [bubbleCount, setBubbleCount] = useState<number>(15);

  useEffect(() => {
    const updateForViewport = () => {
      const w = window.innerWidth;
      setBubbleCount(w < 768 ? 6 : w < 1024 ? 10 : 15);
    };

    updateForViewport();
    window.addEventListener("resize", updateForViewport);
    return () => window.removeEventListener("resize", updateForViewport);
  }, []);

  const bubbles: BubbleSpec[] = useMemo(() => {
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    return Array.from({ length: bubbleCount }, () => {
      const size = rand(40, 160);
      return {
        size,
        left: `${rand(0, 100)}%`,
        top: `${rand(0, 100)}%`,
        opacity: rand(0.1, 0.5),
        duration: rand(25, 40),
        driftX1: rand(20, 60),
        driftY1: rand(-80, -20),
        driftX2: rand(-60, -10),
        driftY2: rand(-30, 30),
        rot1: rand(-5, 5),
        rot2: rand(-15, 15),
        rot3: rand(-10, 10),
        scale1: rand(0.98, 1.02),
        scale2: rand(0.92, 1.08),
        scale3: rand(0.95, 1.05),
      };
    });
  }, [bubbleCount]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-black selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0616] via-[#000000] to-[#04091a] opacity-100" />

        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-orange-600/5 rounded-full blur-[140px] animate-[gel-pulse_12s_infinite_alternate]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-blue-600/5 rounded-full blur-[160px] animate-[gel-pulse_15s_infinite_alternate-reverse]" />

        <div className="absolute inset-0">
          {bubbles.map((b, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${b.size}px`,
                height: `${b.size}px`,
                left: b.left,
                top: b.top,
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 60%, transparent 100%)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(3px)",
                boxShadow:
                  "inset -2px -2px 10px rgba(0,0,0,0.5), inset 2px 2px 10px rgba(255,255,255,0.05)",
                animation: `float-gel-bubble-${i} ${b.duration}s infinite ease-in-out`,
                opacity: b.opacity,
                willChange: "transform",
              }}
            >
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full blur-[1px]" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 noise-overlay" />
      </div>

      <style>{`
        ${bubbles
          .map(
            (b, i) => `
              @keyframes float-gel-bubble-${i} {
                0% { transform: translate(0, 0) rotate(${b.rot1}deg) scale(${b.scale1}); }
                33% { transform: translate(${b.driftX1}px, ${b.driftY1}px) rotate(${b.rot2}deg) scale(${b.scale2}); }
                66% { transform: translate(${b.driftX2}px, ${b.driftY2}px) rotate(${b.rot3}deg) scale(${b.scale3}); }
                100% { transform: translate(${Math.round(b.driftX1 / 2)}px, ${Math.round(
                  -b.driftY1 / 2
                )}px) rotate(${b.rot2 / 2}deg) scale(${b.scale2}); }
              }
            `
          )
          .join("\n")}
        ;

        @keyframes gel-pulse {
          0% { transform: scale(1) translate(0, 0); opacity: 0.4; }
          50% { transform: scale(1.1) translate(20px, -10px); opacity: 0.6; }
          100% { transform: scale(0.95) translate(-10px, 20px); opacity: 0.4; }
        }

        .noise-overlay {
          opacity: 0.03;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }

        @media (prefers-reduced-motion: reduce) {
          .noise-overlay { opacity: 0.02; }
          .animate-\\[gel-pulse_12s_infinite_alternate\\],
          .animate-\\[gel-pulse_15s_infinite_alternate-reverse\\] {
            animation: none !important;
          }
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

        <section
          id="services"
          className="py-20 bg-zinc-950/20 backdrop-blur-sm border-y border-white/5 scroll-mt-20"
        >
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
