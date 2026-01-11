import React from "react";

const About: React.FC = () => {
  const base = "https://images.unsplash.com/photo-1584044283481-9b18070011e1";

  const src480 = `${base}?auto=format&fit=crop&q=70&w=480`;
  const src768 = `${base}?auto=format&fit=crop&q=70&w=768`;
  const src1080 = `${base}?auto=format&fit=crop&q=80&w=1080`;
  const src1600 = `${base}?auto=format&fit=crop&q=80&w=1600`;

  return (
    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16 md:gap-24">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <div className="relative group">
          <div className="absolute -inset-4 bg-orange-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <img
            src={src1080}
            srcSet={`${src480} 480w, ${src768} 768w, ${src1080} 1080w, ${src1600} 1600w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Value Creation"
            className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-8 order-1 md:order-2 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase leading-tight text-white">
          Create <span className="text-orange-500">Lasting</span> Value
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
          At Decode.Ventures, we believe in the power of innovation to unlock new
          possibilities, embrace change, and solve complex challenges, paving the
          way for lasting value.
        </p>
        <div className="pt-6">
          <a
            href="mailto:ac@decode.ventures"
            className="inline-block px-12 py-5 border-[3px] border-white text-black bg-white hover:bg-transparent hover:text-white transition-all duration-500 font-display font-bold uppercase tracking-[0.2em] text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Reach Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;