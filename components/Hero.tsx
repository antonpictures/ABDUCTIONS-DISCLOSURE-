
import React from 'react';

const Hero: React.FC = () => {
  const scrollToTrailer = () => {
    const el = document.getElementById('trailer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Poster Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://generativelanguage.googleapis.com/v1beta/files/input_file_0.png" 
          alt="Abductions Disclosure Poster" 
          className="w-full h-full object-cover object-center opacity-40 md:opacity-50 scale-110 blur-[2px] md:blur-0"
        />
        {/* Cinematic Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_90%)]"></div>
      </div>
      
      {/* Animated Light Beam Overlay */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-1200px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse">
          TV Series Pitch: The 45-Minute Pilot
        </div>
        
        <h1 className="font-header text-5xl md:text-9xl font-bold text-white mb-6 leading-none tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
          ABDUCTIONS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500">DISCLOSURE</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
          A groundbreaking docu-series investigating what actually happens on the craft. 
          Led by <span className="text-white font-bold border-b border-cyan-500/50">George Anton</span> and an elite core team of experts.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-20">
          <button 
            onClick={scrollToTrailer}
            className="group relative w-full md:w-auto px-10 py-5 bg-cyan-500 text-slate-950 rounded-xl font-black transition-all hover:scale-105 active:scale-95 glow-cyan text-lg overflow-hidden"
          >
            <span className="relative z-10">WATCH TRAILER</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
          </button>
          <button 
            onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-10 py-5 border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 backdrop-blur-sm transition-all text-lg"
          >
            EXPLORE THE PILOT
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 backdrop-blur-sm bg-slate-950/20 rounded-xl p-8">
          <div className="text-center">
            <p className="text-3xl font-black text-white">45M</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">Pilot Length</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-white">3 CORE</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">Full-Time Commitment</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-white">20M+</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">Audience Reach</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-white">MUFON</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">Expert Vetting</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
