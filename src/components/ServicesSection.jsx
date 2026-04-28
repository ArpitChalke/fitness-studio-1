import React from 'react'
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

const ServicesSection = () => {
  const services = [
    { title: 'One-on-One Elite', price: '$120/mo', desc: 'Personalized coaching tailored to your specific biomechanics and metabolic goals.' },
    { title: 'Group Power', price: '$60/mo', desc: 'High-intensity functional training sessions in a competitive, team-based environment.' },
    { title: 'Nutrition Design', price: '$45/mo', desc: 'Macro-calculated meal pathways designed for performance and recovery.' },
  ];

  return (
    <section id="services" className="py-24 md:py-40 bg-deep-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="My Specialization"
          title={
            <>
              Services Built <br /> for Results
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 bg-soft-black border border-white/5 rounded-sm relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-neon-green/5 blur-3xl group-hover:bg-neon-green/20 transition-all" />
              <div className="text-neon-green text-sm font-display font-black mb-6 tracking-widest uppercase">
                {service.price}
              </div>
              <h3 className="text-3xl font-display font-black uppercase mb-4 tracking-tighter leading-none group-hover:text-neon-green transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-500 mb-8 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3 mb-10">
                {['Weekly Check-ins', 'Video Analysis', 'App Access'].map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60">
                    <div className="w-1 h-1 bg-neon-green rounded-full" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-white/10 text-xs font-black uppercase tracking-widest hover:bg-neon-green hover:text-black hover:border-neon-green transition-all">
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection