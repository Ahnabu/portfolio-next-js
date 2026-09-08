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
              className="cyber-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-[160px] group cursor-default"
            >
              <div className="flex justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-white group-hover:text-accent group-hover:text-glow transition-all duration-300 font-mono tracking-tight">
                  <CountUp end={item.num} duration={3.5} delay={0.2} enableScrollSpy scrollSpyOnce />
                </span>
                <span className="text-2xl font-bold text-accent font-mono">
                  {item.num === 1600 || item.num === 1100 ? '+' : ''}
                </span>
              </div>

              <p className="text-white/70 text-sm leading-snug font-medium line-clamp-2">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
