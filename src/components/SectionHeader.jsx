import React from 'react'
import { motion } from 'motion/react';

const SectionHeader = ({ subtitle, title }) => (
  <div className="mb-16 md:mb-24 text-center md:text-left">
    <motion.h4
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-neon-green font-display font-black uppercase tracking-[0.3em] text-sm mb-4"
    >
      {subtitle}
    </motion.h4>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter"
    >
      {title}
    </motion.h2>
  </div>
);

export default SectionHeader