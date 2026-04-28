import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    { title: 'The 90-Day Titan', category: 'Transformation', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000&grayscale=true' },
    { title: 'Iron Core Protocol', category: 'Training Program', img: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000&grayscale=true' },
    { title: 'Hybrid Athlete', category: 'Performance Coaching', img: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&q=80&w=1000&grayscale=true' },
    { title: 'Peak Aesthetics', category: 'Contest Prep', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000&grayscale=true' },
  ];

  return (
    <section id="projects" className="py-24 md:py-40 bg-soft-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="The Results"
          title={
            <>
              Evidence of <br /> Excellence
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[16/10] group overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-neon-green text-xs font-black uppercase tracking-[0.2em] mb-2">{project.category}</span>
                <h3 className="text-3xl font-display font-black uppercase tracking-tighter mb-4">{project.title}</h3>
                <div className="flex items-center gap-2 text-white/0 group-hover:text-white transition-all">
                  <span className="text-xs font-bold uppercase tracking-widest transition-opacity duration-500">View Project Details</span>
                  <ArrowRight size={16} className="text-neon-green" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection