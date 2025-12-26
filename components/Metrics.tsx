
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Documentaries', value: 85, fill: '#22d3ee' },
  { name: 'UFO/UAP Content', value: 92, fill: '#a855f7' },
  { name: 'Mystery/True Crime', value: 78, fill: '#3b82f6' },
  { name: 'Sci-Fi Investigations', value: 88, fill: '#10b981' }
];

const Metrics: React.FC = () => {
  return (
    <section id="metrics" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-header text-4xl font-bold text-white mb-4">Market Opportunity</h2>
          <p className="text-slate-500 max-w-2xl mx-auto uppercase tracking-widest text-sm">Audience Engagement Index by Category (2024)</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  stroke="#94a3b8" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  width={150}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
                />
                <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Revenue Potential</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span>Direct Ad Revenue (YouTube Partner Program)</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span>International Licensing (Streaming Platforms)</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span>Educational Distribution & Speaking Tours</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span>Ancillary Sales (Merchandise & Special Editions)</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-cyan-950 to-slate-950 rounded-2xl border border-cyan-500/30">
              <p className="text-cyan-400 font-bold mb-2">Comparable Success</p>
              <h4 className="text-2xl font-bold text-white mb-4">"The Phenomenon"</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Independent UAP documentaries have recently outperformed mainstream blockbusters on rental charts (iTunes, Amazon), demonstrating a massive, underserved global audience willing to pay for quality investigation.
              </p>
              <div className="flex justify-between items-center text-xs text-slate-500 uppercase tracking-widest">
                <span>IMDb Rating: 7.9/10</span>
                <span>Top #1 Trending Documentaries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
