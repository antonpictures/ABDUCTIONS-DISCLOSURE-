
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/20 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-cyan-500 blur-[2px] opacity-70 animate-pulse"></div>
          <span className="font-header text-xl font-bold tracking-tighter text-white">ABDUCTIONS DISCLOSURE</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase text-slate-400">
          <button onClick={() => scrollTo('vision')} className="hover:text-cyan-400 transition-colors">Vision</button>
          <button onClick={() => scrollTo('budget')} className="hover:text-cyan-400 transition-colors">Budget</button>
          <button onClick={() => scrollTo('metrics')} className="hover:text-cyan-400 transition-colors">Metrics</button>
          <button onClick={() => scrollTo('timeline')} className="hover:text-cyan-400 transition-colors">Timeline</button>
        </div>

        <button 
          onClick={() => scrollTo('contact')}
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2 rounded-full font-bold text-sm transition-all shadow-lg glow-cyan"
        >
          INVEST NOW
        </button>
      </div>
    </nav>
  );
};

export default Header;
