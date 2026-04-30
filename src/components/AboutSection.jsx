import React from 'react'
import SectionHeader from './SectionHeader';
import { motion } from 'motion/react';import {
  Dumbbell,
  Zap,
  Target,
  Trophy,
  ChevronRight
} from 'lucide-react';
import { assets } from '../assets/assets';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-soft-black relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 aspect-square relative"
        >
          <div className="absolute -inset-4 border-2 border-neon-green opacity-20 rounded-sm" />
          <img
          src={assets.gym_trainer}
          alt="Trainer"
            className="w-full h-full object-cover rounded-sm grayscale relative z-10"
          />
          <div className="absolute -bottom-6 -right-6 bg-neon-green p-8 z-20 rounded-sm hidden md:block">
            <span className="block text-4xl font-display font-black text-black">12+</span>
            <span className="text-black text-xs font-black uppercase tracking-widest opacity-70">Years Exp</span>
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2">
          <SectionHeader
            subtitle="The Discipline"
            title={
              <>
                Performance <br /> Over Preferences
              </>
            }
          />
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            My journey began with a single set, obsessed with the science of human potential. Today, I build the physiques and mindsets of the next generation of titans.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            {[
              { icon: <Zap size={24} />, title: 'Explosive Power', desc: 'Unlock maximum force generation.' },
              { icon: <Target size={24} />, title: 'Hyper Accuracy', desc: 'Form perfection in every rep.' },
              { icon: <Trophy size={24} />, title: 'Elite Mindset', desc: 'Mental toughness for the long haul.' },
              { icon: <Dumbbell size={24} />, title: 'Max Hypertrophy', desc: 'Science-backed muscle growth.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="p-3 bg-neon-green/10 text-neon-green rounded-sm h-fit">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase text-sm mb-1 tracking-wider">{item.title}</h4>
                  <p className="text-zinc-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="group flex items-center gap-3 text-neon-green font-black uppercase tracking-widest text-xs">
            Learn My Philosophy <ChevronRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection