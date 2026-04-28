import React from 'react'
import {
  Dumbbell,
  Mail,
  Github,
  Linkedin,
  Instagram,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-deep-black pt-24 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-8 h-8 bg-neon-green flex items-center justify-center rounded-sm">
                                <Dumbbell size={18} className="text-black" />
                            </div>
                            <span className="text-xl font-display font-black tracking-tighter italic">TITAN</span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xs">
                            Premium coaching and elite training methodologies for those committed to performance excellence.
                        </p>
                        <div className="flex gap-4">
                            {[<Instagram size={18} />, <Linkedin size={18} />, <Github size={18} />, <Mail size={18} />].map((icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-sm hover:border-neon-green hover:text-neon-green transition-all">
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display font-black uppercase text-xs tracking-widest mb-8 text-white">Programs</h4>
                        <ul className="space-y-4 text-sm text-zinc-500 font-bold uppercase tracking-widest">
                            <li><a href="#" className="hover:text-neon-green transition-colors">Hypertrophy Max</a></li>
                            <li><a href="#" className="hover:text-neon-green transition-colors">Elite Strength</a></li>
                            <li><a href="#" className="hover:text-neon-green transition-colors">Metabolic Revive</a></li>
                            <li><a href="#" className="hover:text-neon-green transition-colors">Home Titan</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-black uppercase text-xs tracking-widest mb-8 text-white">Training</h4>
                        <ul className="space-y-4 text-sm text-zinc-500 font-bold uppercase tracking-widest">
                            <li><a href="#" className="hover:text-neon-green transition-colors">Personal 1:1</a></li>
                            <li><a href="#" className="hover:text-neon-green transition-colors">Group X-Power</a></li>
                            <li><a href="#" className="hover:text-neon-green transition-colors">Nutrition Lab</a></li>
                            <li><a href="#" className="hover:text-neon-green transition-colors">Corporate Performance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-black uppercase text-xs tracking-widest mb-8 text-white">Stay Elite</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed mb-6">
                            Subscribe to get elite training tips and early access to new programs.
                        </p>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="EMAIL"
                                className="w-full bg-soft-black border border-white/10 p-3 rounded-sm text-[10px] font-black tracking-widest focus:outline-none focus:border-neon-green"
                            />
                            <button className="absolute right-2 top-2 bottom-2 text-neon-green">
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 font-bold uppercase text-[10px] tracking-[0.2em]">
                        (C) 2026 TITAN PERFORMANCE ELITE. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8 text-zinc-600 font-bold uppercase text-[10px] tracking-[0.2em]">
                        <a href="#" className="hover:text-zinc-400">Privacy</a>
                        <a href="#" className="hover:text-zinc-400">Terms</a>
                        <a href="#" className="hover:text-zinc-400">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer