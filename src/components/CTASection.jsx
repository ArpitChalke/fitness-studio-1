import React from 'react'
import { motion } from 'motion/react';

const CTASection = () => {
  return (
    <section id="contact" className="py-32 bg-neon-green text-black overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 text-glow">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-10 leading-tight"
        >
          LETS BUILD <br /> SOMETHING POWERFUL
        </motion.h2>
        <p className="text-black/70 font-bold uppercase tracking-widest text-sm md:text-lg mb-12 max-w-xl mx-auto">
          Ready to shatter your plateaus? Book your initial assessment and join the elite.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="w-full bg-black/5 border-2 border-black/20 p-5 pr-40 rounded-sm font-black uppercase text-xs tracking-widest placeholder:text-black/40 focus:outline-none focus:border-black transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-black text-neon-green px-8 font-black uppercase text-[10px] tracking-widest rounded-sm">
              Join Now
            </button>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-black uppercase opacity-60">Call Us</span>
            <span className="text-xl font-display font-black">+91 (800) TITAN-POWER</span>
          </div>
          <div className="w-px h-12 bg-black/20" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-black uppercase opacity-60">Location</span>
            <span className="text-xl font-display font-black">Seawoods, Navi Mumbai</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection