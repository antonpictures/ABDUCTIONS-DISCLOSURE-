
import React, { useState } from 'react';
import { BUDGET_DATA } from '../constants';
import { BudgetItem } from '../types';

const BudgetBreakdown: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const totalRequest = BUDGET_DATA
    .filter(cat => cat.id !== 'equipment')
    .reduce((sum, cat) => sum + cat.total, 0);

  const contingency = totalRequest * 0.1;

  return (
    <section id="budget" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-header text-4xl font-bold text-white mb-4">Investment Requirement</h2>
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              ${(totalRequest + contingency).toLocaleString()}
            </span>
            <span className="text-slate-500 mb-2 uppercase tracking-widest text-sm">Total Movie Funding</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {BUDGET_DATA.map((category) => (
              <div 
                key={category.id}
                className={`border transition-all duration-300 rounded-xl overflow-hidden cursor-pointer ${
                  expandedId === category.id ? 'border-cyan-500/50 bg-cyan-500/5' : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
                onClick={() => setExpandedId(expandedId === category.id ? null : category.id)}
              >
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                    {category.timeframe && <span className="text-xs text-slate-500 uppercase tracking-widest">{category.timeframe}</span>}
                  </div>
                  <div className="text-right">
                    <p className={`text-xl font-bold ${category.id === 'equipment' ? 'text-green-400' : 'text-cyan-400'}`}>
                      ${category.total.toLocaleString()}
                    </p>
                    <span className="text-[10px] text-slate-500 uppercase">Click to view items</span>
                  </div>
                </div>

                {/* Fixed max-height utility class from max-height-[1000px] to max-h-[1000px] */}
                <div className={`overflow-hidden transition-all duration-300 ${expandedId === category.id ? 'max-h-[1000px] opacity-100 border-t border-white/10' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 space-y-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start border-b border-white/5 pb-4 last:border-0 last:pb-0">
                        <div className="flex-1 pr-4">
                          <p className="text-slate-200 font-medium">{item.label}</p>
                          <p className="text-sm text-slate-500">{item.description}</p>
                        </div>
                        <p className="text-slate-300 font-bold">${item.cost.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/30 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-white">Contingency Fund (10%)</h3>
                <p className="text-sm text-slate-400">Reserved for unforeseen production needs</p>
              </div>
              <p className="text-xl font-bold text-purple-400">${contingency.toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 h-fit sticky top-32">
            <h4 className="text-2xl font-bold text-white mb-6">Equipment Advantage</h4>
            <p className="text-slate-400 mb-8">
              Because George Anton owns his production package, we are saving <span className="text-white font-bold">$50,000</span> in upfront capital costs. This reduces investor risk and ensures every dollar goes toward the investigation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white">4K RED Camera Package</p>
                  <p className="text-sm text-slate-500">Industry standard high-dynamic range acquisition</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white">Pro Audio Suite</p>
                  <p className="text-sm text-slate-500">Wireless multi-track recording for all interviews</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-10 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors">
              DOWNLOAD DETAILED PROSPECTUS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetBreakdown;
