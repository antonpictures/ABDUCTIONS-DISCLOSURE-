
import React from 'react';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-header text-4xl font-bold text-white mb-4">Production Roadmap</h2>
          <p className="text-slate-500 uppercase tracking-widest text-sm">A lean, 12-month timeline from concept to delivery</p>
        </div>

        <div className="relative">
          {/* Main Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden md:block"></div>
          <div className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 -translate-y-1/2 hidden md:block w-1/4"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {TIMELINE.map((phase, idx) => (
              <div key={idx} className="group cursor-default">
                <div className="mb-8 hidden md:block">
                  <div className={`w-8 h-8 rounded-full border-4 border-slate-900 shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-500 group-hover:scale-125 mx-auto ${idx === 0 ? 'bg-cyan-500' : 'bg-slate-700'}`}></div>
                </div>

                <div className="p-8 bg-slate-950 rounded-2xl border border-white/5 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:-translate-y-2">
                  <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2 block">{phase.month}</span>
                  <h3 className="text-xl font-bold text-white mb-6 underline decoration-cyan-500/30 underline-offset-4">{phase.title}</h3>
                  
                  <ul className="space-y-4">
                    {phase.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-slate-950 to-cyan-950/20 border border-white/5 text-center">
          <p className="text-xl text-slate-300 italic mb-4">
            "Targeting Premiere: Q4 2025 - Independent Documentary Film Festivals"
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-header font-bold text-xl">SUNDANCE</span>
            <span className="font-header font-bold text-xl">SXSW</span>
            <span className="font-header font-bold text-xl">TRIBECA</span>
            <span className="font-header font-bold text-xl">DOC NYC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
