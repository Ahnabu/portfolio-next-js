'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { contactInfo } from '@/data/portfolio';

// Dynamic 3D Signal Beacon Canvas
const SignalBeacon3D = dynamic(() => import('./SignalBeacon3D'), { ssr: false });

export default function ContactSection3D() {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getContactIcon = (iconName) => {
    switch (iconName) {
      case 'FaPhoneAlt':
        return <FaPhoneAlt />;
      case 'FaEnvelope':
        return <FaEnvelope />;
      case 'FaMapMarkedAlt':
        return <FaMapMarkedAlt />;
      default:
        return null;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!name || !email || !message) {
      setError('Please fill in all the required fields.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setSuccess('Your email has been successfully sent!');
      form.reset();
    } catch (err) {
      console.error('Failed to send email:', err);
      setError(err.message || 'Failed to send the email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>TRANSMISSION CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Let&apos;s Connect & Build
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mt-4 text-base leading-relaxed">
            Have a project in mind, an inquiry, or an engineering role? Direct communication channels are open.
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-10 items-start">
          {/* Cyber Contact Form */}
          <div className="w-full xl:w-1/2">
            <form
              className="cyber-card rounded-2xl p-8 sm:p-10 flex flex-col gap-6"
              onSubmit={sendEmail}
            >
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-wider">
                  {"// SECURE TRANSMISSION"}
                </span>
                <h3 className="text-3xl sm:text-4xl text-white font-bold mt-1">
                  Let&apos;s work together
                </h3>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base mt-2">
                  Passionate and dedicated junior web developer eager to bring your projects to life.
                  Let&apos;s collaborate and create amazing, dynamic web applications together!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  className="flex h-12 rounded-xl border border-white/10 focus:border-accent font-light bg-[#14141a] px-4 py-3 text-base placeholder:text-white/50 outline-none transition-all focus:ring-1 focus:ring-accent"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="flex h-12 rounded-xl border border-white/10 focus:border-accent font-light bg-[#14141a] px-4 py-3 text-base placeholder:text-white/50 outline-none transition-all focus:ring-1 focus:ring-accent"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>

              <textarea
                className="h-[170px] flex w-full rounded-xl border border-white/10 bg-[#14141a] px-4 py-3 text-sm placeholder:text-white/50 focus:border-accent outline-none transition-all focus:ring-1 focus:ring-accent resize-none"
                placeholder="Type your message here"
                name="message"
                required
              />

              {success && (
                <div className="p-3.5 rounded-xl bg-accent/15 border border-accent text-accent font-semibold text-center text-sm shadow-[0_0_15px_rgba(0,255,153,0.25)]">
                  {success}
                </div>
              )}
              {error && (
                <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500 text-red-400 font-semibold text-center text-sm shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="h-12 px-8 rounded-xl border border-accent bg-accent text-primary font-bold hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_25px_rgba(0,255,153,0.35)] w-full sm:w-auto self-start flex items-center justify-center gap-2"
              >
                <span>{loading ? 'Transmitting...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Right Column: 3D Signal Beacon & Contact Cards */}
          <div className="w-full xl:w-1/2 flex flex-col gap-6">
            {/* 3D Signal Beacon Canvas */}
            <SignalBeacon3D />

            {/* Contact Details List */}
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className="cyber-card rounded-2xl p-5 flex items-center gap-5 group"
                >
                  <div className="w-13 h-13 sm:w-14 sm:h-14 bg-[#14141a] border border-white/10 text-accent rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(0,255,153,0.35)] transition-all shrink-0">
                    {getContactIcon(item.icon)}
                  </div>
                  <div>
                    <span className="text-white/40 text-[11px] font-mono uppercase tracking-widest">
                      {item.title}
                    </span>
                    <h4 className="text-white text-base sm:text-lg font-medium mt-0.5 group-hover:text-accent transition-colors">
                      {item.description}
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
