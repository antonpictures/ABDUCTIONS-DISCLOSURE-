
import React from 'react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Cinematic Image Side */}
          <div className="lg:col-span-5 relative group">
            <div className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
              <img 
                src="https://lh3.googleusercontent.com/gg/AIJ2gl_aU5M2mOOdSxdfaSr4XDEMMvDKZT6rzWFDurEXKVX6zVGmAMRNs9eoMSSP5FIrpc8LclpvvsNROECDI4eRJL15oFfX3h_Suwn7iyNDwJ7x-_owHxRQh0RYCJuRJJ_OJwQKGOLpeBJ_Lm7sZ9_iYFRU5wnlt04G9Klk2Dnrd1uV7PofdSq8=s1024-rj-mp2" 
                alt="Director George Anton" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-white font-header text-2xl font-bold tracking-tight">George Anton</p>
                <p className="text-cyan-400 text-sm uppercase tracking-widest font-bold">Director & Executive Producer</p>
              </div>
            </div>
            
            {/* Floating Stats Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 p-6 bg-slate-950 border border-cyan-500/30 rounded-2xl shadow-2xl backdrop-blur-xl animate-bounce-slow">
              <div className="text-center">
                <p className="text-3xl font-black text-white leading-none">20Y</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Hollywood Legacy</p>
              </div>
            </div>

            {/* Accent light */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          </div>

          {/* Statement Content Side */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em]">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              The Director's Statement
            </div>
            
            <h2 className="font-header text-4xl md:text-5xl font-bold text-white leading-tight">
              "We aren't just making a film. We're launching an <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Investigative Engine</span>."
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
              <p>
                This series represents my total commitment. I have assembled a core team of <span className="text-white font-medium">three full-time specialists</span>—myself and two certified MUFON investigators. We are locked in at a fixed cost of <span className="text-cyan-400 font-bold">$3,000/month each</span> to ensure the project never stalls.
              </p>
              <p>
                When we aren't in the field tracking down cases from the Pacific Northwest to the Florida coast, we are in our Hollywood studio booking the next witnesses and analyzing high-speed telemetry data. 
              </p>
              <p className="border-l-2 border-cyan-500 pl-6 italic text-slate-300">
                "The UFO subculture is hungry for authenticity. Following the 'Rogan Model', we leverage established UFO celebrities and massive podcast networks to ensure this 45-minute pilot sparks a global conversation that drives a multi-season series."
              </p>
            </div>

            <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/5">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-1">Crew Commitment</p>
                <p className="text-xl font-bold text-white">Full-Time (3)</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-1">Target Format</p>
                <p className="text-xl font-bold text-white">45m Pilot</p>
              </div>
              <div className="hidden md:block">
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-1">Marketing Model</p>
                <p className="text-xl font-bold text-white">Podcast First</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href="https://www.imdb.com/name/nm2428276/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white text-sm font-bold bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-all"
              >
                <span>View Director's IMDb</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@antonpictures/videos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-red-500 text-sm font-bold bg-red-500/5 border border-red-500/20 px-6 py-3 rounded-full hover:bg-red-500/10 transition-all"
              >
                <span>Production Vlog</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Vision;
