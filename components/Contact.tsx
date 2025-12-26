
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send to a backend or email service
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="font-header text-4xl font-bold text-white mb-4 uppercase tracking-tight">Investor Message Board</h2>
          <p className="text-slate-500 uppercase tracking-widest text-sm">Direct encrypted channel to George Anton & The Production Team</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Board Info & Direct Links */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 bg-slate-900 border border-white/10 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Board Guidelines</h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 font-bold">01</span>
                  <span>Serious investment inquiries only for the Pilot and Series expansion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 font-bold">02</span>
                  <span>Response time is typically within 24-48 hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 font-bold">03</span>
                  <span>NDA available upon request for detailed budget viewing.</span>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-4 text-white group">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Direct Email</p>
                    <a href="mailto:antonpictures@me.com" className="text-sm hover:text-cyan-400 transition-colors">antonpictures@me.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white group">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-slate-950 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Direct Phone</p>
                    <a href="tel:3232026780" className="text-sm hover:text-cyan-400 transition-colors">(323) 202-6780</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white group">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Office Hours</p>
                    <p className="text-sm">Mon-Fri: 10AM - 6PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-white/5 rounded-3xl">
              <p className="text-xs text-cyan-400 font-bold uppercase tracking-widest mb-2">Location</p>
              <p className="text-white text-lg">Hollywood, California</p>
            </div>
          </div>

          {/* Right Column: The Message Board Interface */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl h-full flex flex-col">
              <div className="bg-white/5 p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-slate-500 font-mono tracking-tighter">SECURE_POST_GATEWAY_V2.0</span>
              </div>

              <div className="flex-1 p-8 overflow-y-auto space-y-6">
                {/* Simulated Previous "Posts" or placeholders */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 shrink-0 flex items-center justify-center border border-white/10">
                    <span className="text-slate-500 text-xs font-bold">ADMIN</span>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-2xl rounded-tl-none border border-white/5 max-w-[80%]">
                    <p className="text-slate-300 text-sm">Welcome to the board. Post your inquiry below or reach out directly to George via email or phone. We are currently vetting partners for the 2025 Production Cycle.</p>
                  </div>
                </div>

                {submitted && (
                  <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500 shrink-0 flex items-center justify-center border border-white/10 shadow-lg glow-cyan">
                      <span className="text-slate-950 text-xs font-black">USER</span>
                    </div>
                    <div className="bg-cyan-500/10 p-4 rounded-2xl rounded-tl-none border border-cyan-500/30">
                      <p className="text-white text-sm font-medium mb-1">Inquiry from: {name || 'Anonymous Investor'}</p>
                      <p className="text-cyan-100 text-sm italic">"{message}"</p>
                      <p className="text-[10px] text-cyan-400 mt-2 uppercase font-bold tracking-widest">Message Logged - Relaying to Producer...</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8 border-t border-white/10 bg-slate-950/50">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        required 
                        placeholder="Your Name / Entity"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                      <div className="flex items-center px-4 py-3 bg-slate-900 border border-white/10 rounded-xl">
                        <span className="text-xs text-slate-500 mr-2 uppercase">Subject:</span>
                        <select className="bg-transparent text-white text-sm focus:outline-none w-full">
                          <option>Pilot Investment</option>
                          <option>Series Distribution</option>
                          <option>Technical Partnership</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative">
                      <textarea 
                        required 
                        rows={3} 
                        placeholder="Type your message to the team..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none">
                        All communications are confidential and prioritized by investment tier.
                      </p>
                      <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all glow-cyan shrink-0">
                        Post to Board
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-cyan-400 font-bold mb-2">MESSAGE SENT SUCCESSFULLY</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-white underline"
                    >
                      Post another message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
