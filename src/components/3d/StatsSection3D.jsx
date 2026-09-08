'use client';

import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { stats } from '@/data/portfolio';

export default function StatsSection3D() {
  return (
    <section className="py-12 relative z-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative group p-6 rounded-2xl bg-gradient-to-b from-[#232329]/80 to-[#1c1c22]/90 border border-white/10 hover:border-accent/50 backdrop-blur-md transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_35px_rgba(0,255,153,0.15)] flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left"
            >
              {/* Glowing decorative corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-2xl bg-accent/5 group-hover:bg-accent/20 transition-all pointer-events-none" />

              <div className="text-4xl sm:text-5xl font-extrabold text-accent font-mono">
                <CountUp end={item.num} duration={4} delay={0.5} enableScrollSpy scrollSpyOnce />
                {item.num === 1600 || item.num === 1100 ? '+' : ''}
              </div>

              <p className="text-white/80 text-sm sm:text-base leading-snug max-w-[140px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
