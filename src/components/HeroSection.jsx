import { motion, useScroll, useTransform } from 'motion/react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070&grayscale=true"
          alt="Gym Hero"
          className="w-full h-full object-cover grayscale opacity-30 scale-105"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-neon-green font-display font-black uppercase tracking-[0.3em] mb-6 text-sm"
        >
          Unleash Your Inner Beast
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl lg:text-[7rem] font-display font-black uppercase leading-none tracking-tighter mb-8"
        >
          SCULPT YOUR <br />
          <span className="text-neon-green text-glow">PERFORMANCE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-light leading-relaxed"
        >
          Premium coaching and elite training programs designed for those who demand excellence in every set.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto bg-neon-green text-black px-10 py-5 font-black uppercase tracking-[0.1em] text-sm rounded-sm hover:-translate-y-1 transition-all glow-on-hover shadow-[0_10px_30px_-10px_rgba(198,255,0,0.5)]">
            Start Training Now
          </button>
          <button className="w-full sm:w-auto border border-white/20 hover:border-neon-green hover:bg-white/5 px-10 py-5 font-black uppercase tracking-[0.1em] text-sm rounded-sm transition-all">
            See Programs
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-neon-green rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
