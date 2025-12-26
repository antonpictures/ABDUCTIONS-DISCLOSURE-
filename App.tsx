
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BudgetBreakdown from './components/BudgetBreakdown';
import Vision from './components/Vision';
import Metrics from './components/Metrics';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen selection:bg-cyan-500 selection:text-slate-900">
      <Header />
      
      <main>
        <Hero />
        
        {/* Official Sora AI Trailer Section */}
        <section id="trailer" className="py-24 bg-slate-950 border-b border-white/5 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse">
                Official Vision Trailer
              </div>
              <h2 className="font-header text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">ABDUCTIONS DISCLOSURE</h2>
              <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                Witness the future of cinematic disclosure. Utilizing <span className="text-white font-bold">OpenAI Sora</span> to reconstruct the most profound encounters ever documented.
              </p>
            </div>

            {/* Sora Feature Card */}
            <div className="relative max-w-6xl mx-auto group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/10 flex flex-col items-center justify-center text-center p-12">
                {/* Background Visual (Simulated) */}
                <div className="absolute inset-0 z-0 opacity-40">
                  <img 
                    src="https://generativelanguage.googleapis.com/v1beta/files/input_file_0.png" 
                    alt="Sora Background" 
                    className="w-full h-full object-cover grayscale scale-110 blur-sm"
                  />
                  <div className="absolute inset-0 bg-slate-950/60"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 mx-auto shadow-[0_0_30px_rgba(255,255,255,0.4)] animate-bounce-slow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-slate-950 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Launch Sora Vision Reel</h3>
                  <p className="text-slate-400 mb-8 max-w-lg mx-auto">Click below to view the high-fidelity AI reenactment trailer on the official Sora platform.</p>
                  <a 
                    href="https://sora.chatgpt.com/p/s_694dabaa273481919294f252dfe3a5b6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-slate-950 px-10 py-4 rounded-xl font-black text-lg hover:bg-cyan-400 transition-all shadow-2xl tracking-tight"
                  >
                    WATCH ON SORA.COM
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-12 text-center">
              <div className="space-y-2">
                <p className="text-cyan-400 font-bold text-2xl">SORA</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">AI Gen Partnership</p>
              </div>
              <div className="space-y-2">
                <p className="text-purple-400 font-bold text-2xl">4K</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Cinematic Finish</p>
              </div>
              <div className="space-y-2">
                <p className="text-white font-bold text-2xl">PROVEN</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Audience Demand</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Sections */}
        <Vision />

        {/* Why This Matters Section */}
        <section className="py-24 bg-slate-900 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-header text-4xl font-bold text-white mb-4 uppercase tracking-tight">Why ABDUCTIONS DISCLOSURE Matters NOW</h2>
              <p className="text-slate-500 uppercase tracking-widest text-sm">Seizing the current UAP transparency momentum</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-950 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 font-black">01</div>
                <h3 className="text-xl font-bold text-white mb-4">Government Disclosure</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The UAP phenomenon is gaining unprecedented mainstream acceptance and legislative attention. We are positioned at the leading edge of this transparency wave.
                </p>
              </div>
              <div className="p-8 bg-slate-950 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 font-black">02</div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Audience</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The hunger for authentic content is massive. Our director has already commanded <span className="text-white font-bold">20M+ channel views</span>, proving a loyal, engaged global audience.
                </p>
              </div>
              <div className="p-8 bg-slate-950 rounded-3xl border border-white/5 hover:border-green-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-6 font-black">03</div>
                <h3 className="text-xl font-bold text-white mb-4">Scientific Approach</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We follow the rigorous <span className="text-white font-bold">Dr. John Mack methodology</span>, collaborating with MUFON investigators to bring institutional-grade analysis to witness testimony.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI & Sora Section */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 border border-white/10 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-white to-slate-400 flex items-center justify-center p-8 shadow-inner">
                  <span className="text-slate-950 font-black text-4xl italic">Sora</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">VFX Partnership: OpenAI Sora</h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    We are proud to announce our <span className="text-white font-bold">OpenAI cast partnership</span>. We will be utilizing <span className="text-cyan-400 font-bold">Sora.com</span> for cinematic recreations and high-fidelity special effects, bringing abductee experiences to life with unprecedented realism.
                  </p>
                  <a 
                    href="https://sora.chatgpt.com/profile/georgeanton" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-500 font-bold border-b border-cyan-500/30 pb-1 hover:text-cyan-400 transition-all"
                  >
                    Follow George on Sora.com 
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cinematic Sample Section (Deep Dive) */}
        <section className="py-24 bg-slate-950 border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-12">
              <div className="inline-block mb-4 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                Production Quality Demonstration
              </div>
              <h2 className="font-header text-4xl font-bold text-white mb-6 uppercase tracking-tight">4K Cinematic Interview Sample</h2>
              <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                Experience the look and feel of our production. While the sample below features a UAP witness who observed a craft, <span className="text-white font-bold">our series focus is exclusively on abductees</span> and leading experts from the UFO podcast subculture.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.15)] border border-white/10 bg-slate-900 group">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/kHFwpCfN0sg?start=197" 
                title="UAP Witness: Vickie Toure - Cinematic Sample"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-left">
                <p className="text-cyan-400 font-bold text-sm mb-2">4K ACQUISITION</p>
                <p className="text-xs text-slate-500 leading-relaxed">High-bitrate recording ensures industry-standard delivery for streaming platforms like Netflix or Hulu.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-left">
                <p className="text-purple-400 font-bold text-sm mb-2">IMMERSE SOUND</p>
                <p className="text-xs text-slate-500 leading-relaxed">Professional audio mastering captures every nuance of the witness testimony for maximum engagement.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-left">
                <p className="text-green-400 font-bold text-sm mb-2">COLOR GRADING</p>
                <p className="text-xs text-slate-500 leading-relaxed">Cinematic LUTs and grading provide the "unseen world" atmosphere required for the genre.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Strategy Section */}
        <section className="py-24 bg-slate-900 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-header text-4xl font-bold text-white mb-6 uppercase tracking-tight">The Growth Strategy</h2>
                <div className="space-y-6 text-slate-400 text-lg">
                  <p>
                    This is more than a movie; it's the foundation for a <span className="text-white font-bold">multi-season TV series</span>. Our 45-minute pilot sets the stage for continuous production.
                  </p>
                  <p>
                    We leverage the massive <span className="text-cyan-400 font-bold">UFO Subculture</span>. We don't just film; we infiltrate. By featuring UFO celebrities and engaging with the global network of UAP researchers, we tap into a built-in marketing machine.
                  </p>
                  <div className="p-6 bg-slate-950 rounded-2xl border border-cyan-500/20">
                    <p className="text-white font-bold mb-2">The "Rogan" Blueprint</p>
                    <p className="text-sm">
                      Joe Rogan built an entire media empire on the back of UFO and UAP interest. Our strategy involves intensive outreach to the top UFO podcasts, placing our team and our footage in front of millions of active listeners.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                  <p className="text-4xl font-black text-white mb-2">$50K</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Equipment Owned</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                  <p className="text-4xl font-black text-white mb-2">20M+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Channel Views</p>
                </div>
                <div className="col-span-2 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 p-8 rounded-3xl border border-white/10">
                   <h4 className="font-bold text-white mb-2">Continuous Pipeline</h4>
                   <p className="text-sm text-slate-400">When not in the field, our team is in the studio vetting the next 10 episodes. No downtime. Full commitment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BudgetBreakdown />
        <Metrics />
        
        {/* Movie Concept Extra Detail */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-10 bg-slate-950 border border-white/5 rounded-3xl relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-6">Authentic Locations</h4>
                <p className="text-slate-400 leading-relaxed">
                  We film abductees at the actual sites where their experiences occurred, utilizing on-location sensory triggers to capture authentic memory recall.
                </p>
              </div>

              <div className="p-10 bg-slate-950 border border-white/5 rounded-3xl relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-6">Expert Vetting</h4>
                <p className="text-slate-400 leading-relaxed">
                  Partnering with certified MUFON Field Investigators to provide rigorous, real-world case verification protocols using institutional data sets.
                </p>
              </div>

              <div className="p-10 bg-slate-950 border border-white/5 rounded-3xl relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-6">Pattern Analysis</h4>
                <p className="text-slate-400 leading-relaxed">
                  Focusing on the patterns between accounts across the USA. Following Dr. Mack's research, we document consistent physical and psychological phenomena.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Timeline />
        
        <section className="py-24 bg-slate-950 border-y border-white/5">
           <div className="container mx-auto px-6 text-center">
              <h3 className="font-header text-3xl font-bold text-white mb-8">Ready to support the Disclosure?</h3>
              <div className="flex flex-wrap justify-center gap-4">
                 <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-12 py-5 bg-cyan-500 text-slate-950 font-black rounded-full hover:bg-cyan-400 transition-all glow-cyan text-xl tracking-tighter"
                 >
                   INVEST IN ABDUCTIONS DISCLOSURE
                 </button>
              </div>
           </div>
        </section>

        <Contact />
      </main>

      <footer className="py-12 bg-slate-950 border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-8">
            <h4 className="font-header text-2xl font-bold text-white mb-2">ABDUCTIONS DISCLOSURE</h4>
            <p className="text-slate-500 text-xs uppercase tracking-widest">© 2025 | Anton Pictures</p>
            <p className="text-cyan-400/60 text-[10px] mt-2 italic">A Documentary Investigation Following Dr. John Mack's Methodology</p>
          </div>
          <div className="flex justify-center space-x-6 mb-8 text-slate-500 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Investment</a>
            <a href="https://www.imdb.com/name/nm2428276/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">IMDb Verification</a>
          </div>
          <p className="text-slate-600 text-sm">
            Directed by George Anton. All Rights Reserved.
          </p>
          <p className="mt-4 text-slate-800 text-[10px]">
             Investments in film production involve substantial risk. Please consult with financial advisors.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
