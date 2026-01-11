import React from "react";
import { Target, Zap, Network, TrendingUp } from "lucide-react";

type Service = {
  title: string;
  icon: React.ReactNode;
  imageBase: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Strategy Consulting",
    icon: <Target className="w-8 h-8 text-orange-500" />,
    imageBase: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    description:
      "We solve complex strategic equations and lay the groundwork for growth by translating market shifts into clear priorities, positioning, and execution roadmaps.",
  },
  {
    title: "Venture Partnership",
    icon: <Zap className="w-8 h-8 text-orange-500" />,
    imageBase: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
    description:
      "Hands-on partnership with founders and management teams - aligning strategy, operating systems, and post-merger integration through critical inflection points.",
  },
  {
    title: "Network Access",
    icon: <Network className="w-8 h-8 text-orange-500" />,
    imageBase: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    description:
      "Strategic value creation through matchmaking across creators, platforms, and capital powered by an expansive network in media & entertainment.",
  },
  {
    title: "IP Rights Transactions",
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
    imageBase: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    description:
      "Optimizing value in specialized IP asset class transactions, with an emphasis on music rights.",
  },
];

function buildSrc(base: string, w: number, q: number) {
  return `${base}?auto=format&fit=crop&q=${q}&w=${w}`;
}

const Philosophy: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-orange-500 font-display font-bold uppercase tracking-[1em] text-xs">
            Our Expertise
          </h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight text-white leading-none">
            Convert <br /> Complexity <br /> Into{" "}
            <span className="text-orange-500">Action</span>
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => {
          const src480 = buildSrc(s.imageBase, 480, 70);
          const src768 = buildSrc(s.imageBase, 768, 70);
          const src1200 = buildSrc(s.imageBase, 1200, 75);

          return (
            <div
              key={i}
              className="group relative flex flex-col glass p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all duration-700 h-full"
            >
              <div className="mb-8 relative z-10">
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/10 transition-colors">
                  {s.icon}
                </div>
                <h4 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-tight">
                  {s.title}
                </h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                  {s.description}
                </p>
              </div>

              {/* Background Hover Effect
                  - Hidden on touch/mobile to prevent unnecessary image downloads.
                  - Only shows on md+ where hover is meaningful. */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none opacity-0 md:group-hover:opacity-10 transition-opacity duration-1000 hidden md:block">
                <img
                  src={src768}
                  srcSet={`${src480} 480w, ${src768} 768w, ${src1200} 1200w`}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Philosophy;