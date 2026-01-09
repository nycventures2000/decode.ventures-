
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Q1', value: 120 },
  { name: 'Q2', value: 240 },
  { name: 'Q3', value: 190 },
  { name: 'Q4', value: 380 },
  { name: 'Current', value: 450 },
];

const Stats: React.FC = () => {
  const stats = [
    { label: 'Deals Advised', value: '150+' },
    { label: 'Client Growth Avg', value: '62%' },
    { label: 'Rights Optimized', value: '12K+' },
    { label: 'Strategic Partners', value: '450' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="glass rounded-3xl p-8 md:p-12 border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-3xl font-display font-bold uppercase tracking-tight">Scale <span className="text-blue-500">Metrics</span>.</h3>
            <p className="text-gray-500 text-sm">Quantifiable impact across our advisory portfolio in media and rights management.</p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((s, i) => (
                <div key={i} className="group">
                  <div className="text-3xl font-bold font-display group-hover:text-blue-500 transition-colors">{s.value}</div>
                  <div className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 h-64 relative">
             <div className="absolute -top-4 -right-4 text-[100px] font-bold text-white/[0.02] pointer-events-none font-display">DECODE</div>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#444', fontSize: 10, fontWeight: 'bold'}} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.02)'}}
                  contentStyle={{backgroundColor: '#050505', border: '1px solid #222', borderRadius: '12px'}}
                  itemStyle={{color: '#fff', fontSize: '12px'}}
                />
                <Bar dataKey="value" radius={[2, 2, 0, 0]} barSize={40}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#3b82f6' : '#111'} className="hover:fill-blue-400 transition-colors" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
