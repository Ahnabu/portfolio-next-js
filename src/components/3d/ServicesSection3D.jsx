'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowDownRight } from 'react-icons/bs';
import { services } from '@/data/portfolio';

export default function ServicesSection3D() {
  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-mono uppercase tracking-widest">
            Expertise & Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 text-white">
            Services & Solutions
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mt-4 text-base">
            High-performance web applications built from front to back with modern engineering standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-[#232329]/90 to-[#1c1c22]/95 border border-white/10 hover:border-accent/60 backdrop-blur-md transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(0,255,153,0.15)] flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500 font-mono">
                    {item.num}
                  </span>
                  <button
                    onClick={scrollToWork}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:text-primary group-hover:rotate-45 transition-all duration-300 shadow-md"
                    aria-label={`View ${item.title}`}
                  >
                    <BsArrowDownRight className="text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </button>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-4">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10 flex items-center gap-2 text-accent text-sm font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Production Ready</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
