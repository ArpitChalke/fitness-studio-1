import React from 'react'
import {
  Zap,
  Dumbbell,
  Target,
  Trophy 
} from 'lucide-react';

const StatsSection = () => {
  return (
    <div className="py-24 bg-deep-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/5 pointer-events-none select-none uppercase tracking-widest whitespace-nowrap">
        TITAN PERFORMANCE
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-4 gap-12 relative z-10">
        {[
          { icon: <Dumbbell />, label: 'Kilograms Moved', val: '500k+' },
          { icon: <Target />, label: 'Clients Transformed', val: '150+' },
          { icon: <Zap />, label: 'Avg Body Fat Drop', val: '12%' },
          { icon: <Trophy />, label: 'Pro Competitions', val: '8' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center md:items-start">
            <div className="text-neon-green mb-4">{stat.icon}</div>
            <span className="text-6xl md:text-5xl font-display font-black uppercase mb-1">{stat.val}</span>
            <span className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] sm:text-xs">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection