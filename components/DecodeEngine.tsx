
import React, { useState } from 'react';
import { analyzeTrend } from '../services/gemini';
import { Search, Loader2, Rocket, ShieldCheck, Map, Lightbulb } from 'lucide-react';

interface AnalysisResult {
  analysis: string;
  growthScore: number;
  strategicRoadmap: string;
  marketRisk: string;
  finalTakeaway: string;
}

const DecodeEngine: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    try {
      const data = await analyzeTrend(query);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="relative glass rounded-[2.5rem] overflow-hidden p-8 md:p-20 border-white/5 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] -mr-48 -mt-48 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 blur-[120px] -ml-48 -mb-48 rounded-full"></div>
        
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest mb-6">
            BLUEPRINT ENGINE v1.0
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Strategy <span className="text-blue-500">Accelerator</span>.</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-light leading-relaxed">
            Generate an AI-powered growth roadmap for your emerging technology or digital media venture.
          </p>
        </div>

        <form onSubmit={handleAnalyze} className="max-w-2xl mx-auto relative mb-16 z-10">
          <div className="group relative">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Generative AI in Music Distribution"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-8 pr-40 focus:outline-none focus:border-blue-500 transition-all text-white text-lg placeholder:text-gray-700 backdrop-blur-sm"
            />
            <button 
              type="submit"
              disabled={loading}
              className="absolute right-3 top-3 bottom-3 px-8 rounded-xl bg-white text-black font-bold flex items-center space-x-2 disabled:opacity-50 hover:bg-blue-500 hover:text-white transition-all shadow-lg"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
              <span>Generate</span>
            </button>
          </div>
        </form>

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-700 relative z-10">
            <div className="glass p-8 rounded-3xl bg-blue-500/5 border-blue-500/20">
              <div className="flex items-center space-x-3 mb-6">
                <Rocket className="w-5 h-5 text-blue-400" />
                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400">Growth Score</h4>
              </div>
              <div className="text-6xl font-display font-bold text-white mb-2">{result.growthScore}</div>
              <p className="text-xs text-gray-500 font-medium">Estimated commercial viability index</p>
            </div>

            <div className="glass p-8 rounded-3xl bg-white/2 border-white/5">
              <div className="flex items-center space-x-3 mb-6">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400">Risk Assessment</h4>
              </div>
              <div className="text-xl font-bold text-white mb-4 leading-tight">{result.marketRisk}</div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-emerald-500 w-[70%]"></div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl bg-white/2 border-white/5">
              <div className="flex items-center space-x-3 mb-6">
                <Lightbulb className="w-5 h-5 text-amber-400" />
                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400">The Takeaway</h4>
              </div>
              <p className="text-sm text-gray-300 italic leading-relaxed">"{result.finalTakeaway}"</p>
            </div>

            <div className="lg:col-span-3 glass p-10 rounded-3xl mt-4 bg-white/[0.01]">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                  <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs text-blue-400">01</span>
                    Strategic Roadmap
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{result.strategicRoadmap}</p>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs text-purple-400">02</span>
                    Commercial Analysis
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{result.analysis}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 space-y-6">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500/10 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-white font-display text-xl font-bold tracking-tight">Processing Market Data</p>
              <p className="text-gray-600 text-xs uppercase tracking-widest mt-2">Diligence in progress...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DecodeEngine;
