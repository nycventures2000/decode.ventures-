import React from "react";

const ContactSection: React.FC = () => {
  const base =
    "https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537";

  const src480 = `${base}?auto=format&fit=crop&q=70&w=480`;
  const src768 = `${base}?auto=format&fit=crop&q=70&w=768`;
  const src1080 = `${base}?auto=format&fit=crop&q=80&w=1080`;
  const src1600 = `${base}?auto=format&fit=crop&q=80&w=1600`;

  return (
    <div className="max-w-6xl mx-auto px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="w-full md:w-auto flex-shrink-0">
          <div className="space-y-6">
            <a href="mailto:info@decode.ventures" className="inline-block group relative">
              <div className="absolute -inset-6 bg-orange-500/10 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative border-[3px] border-white/10 group-hover:border-orange-500 transition-colors duration-700 px-8 md:px-12 py-10 md:py-14 bg-white/5 backdrop-blur-sm">
                <h3 className="text-5xl md:text-7xl font-display font-bold uppercase leading-tight text-white group-hover:text-orange-500 transition-colors duration-500">
                  GET IN <br />{" "}
                  <span className="text-orange-500 group-hover:text-white transition-colors duration-500">
                    TOUCH
                  </span>
                </h3>
                <div className="mt-8 flex items-center space-x-4">
                  <div className="h-px w-12 bg-orange-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 group-hover:text-white transition-colors">
                    Send Email
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 max-w-lg">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={src1080}
              srcSet={`${src480} 480w, ${src768} 768w, ${src1080} 1080w, ${src1600} 1600w`}
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Music Contact"
              className="w-full grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-orange-500/5 mix-blend-overlay"></div>
            <div className="absolute inset-0 border border-white/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;