import React from 'react'
import SectionHeader from './SectionHeader';
import { motion } from 'motion/react';
import {
  Star,
  Quote
} from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    { name: 'John Marcus', role: 'Elite Athlete', text: 'Training with Titan changed not just my body, but my entire perspective on discipline. The intensity is unmatched.', avatar: 'https://i.pravatar.cc/150?u=1' },
    { name: 'Sarah Chen', role: 'Software CEO', text: 'As a busy professional, I needed efficiency. The custom protocols are data-driven and deliver consistent growth.', avatar: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Mike Ross', role: 'Founder', text: 'The accountability and science-based approach made the difference. Finally saw results after years of plateau.', avatar: 'https://i.pravatar.cc/150?u=3' },
  ];

  return (
    <section className="py-24 md:py-40 bg-deep-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="The Proof"
          title={
            <>
              Voices of the <br /> Resilient
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 bg-soft-black border border-white/5 rounded-sm relative"
            >
              <Quote className="absolute top-6 right-8 text-neon-green/20" size={40} />
              <div className="flex gap-1 text-neon-green mb-6">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-zinc-400 italic mb-8 relative z-10 leading-relaxed font-light text-lg">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  className="w-12 h-12 rounded-full grayscale border border-neon-green/30"
                  alt={testimonial.name}
                />
                <div>
                  <h5 className="font-display font-black uppercase text-sm">{testimonial.name}</h5>
                  <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection