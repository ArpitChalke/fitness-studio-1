import { motion } from 'motion/react';
import { Dumbbell } from 'lucide-react';

const pulseTransition = {
  duration: 1.4,
  repeat: Infinity,
  ease: 'easeInOut',
};

const Loading = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-deep-black px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,255,0,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(198,255,0,0.08),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex h-20 w-20 items-center justify-center rounded-sm bg-neon-green text-black shadow-[0_0_40px_rgba(198,255,0,0.35)]"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Dumbbell size={38} />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-xs font-black uppercase tracking-[0.45em] text-neon-green"
        >
          Titan Fitness Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 font-display text-4xl font-black uppercase leading-none tracking-tight md:text-6xl"
        >
          Preparing Your
          <span className="block text-neon-green">Next Set</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-10 max-w-md text-sm font-light uppercase tracking-[0.2em] text-zinc-500 md:text-base"
        >
          Loading the studio experience
        </motion.p>

        <div className="w-full max-w-sm">
          <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-neon-green"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="flex items-center justify-center gap-3">
            {[0, 1, 2].map((item) => (
              <motion.span
                key={item}
                className="h-2.5 w-2.5 rounded-full bg-neon-green"
                animate={{ opacity: [0.25, 1, 0.25], scale: [0.9, 1.2, 0.9] }}
                transition={{ ...pulseTransition, delay: item * 0.18 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
