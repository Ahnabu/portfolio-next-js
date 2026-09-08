'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { contactInfo } from '@/data/portfolio';

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
          <span className="text-accent text-sm font-mono uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mt-4 text-base">
            Have a project in mind, an inquiry, or an opportunity? Feel free to reach out.
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-12 items-start">
          {/* Form */}
          <div className="w-full xl:w-1/2">
            <form
              className="flex flex-col gap-6 p-8 sm:p-10 bg-gradient-to-b from-[#232329]/90 to-[#1c1c22]/95 border border-white/10 rounded-2xl backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
              onSubmit={sendEmail}
            >
              <h3 className="text-3xl sm:text-4xl text-accent font-bold">
                Let&apos;s work together
              </h3>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                Passionate and dedicated junior web developer eager to bring your projects to life.
                Let&apos;s collaborate and create amazing, dynamic web applications together!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  className="flex h-12 rounded-xl border border-white/10 focus:border-accent font-light bg-primary px-4 py-3 text-base placeholder:text-white/60 outline-none transition-colors"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="flex h-12 rounded-xl border border-white/10 focus:border-accent font-light bg-primary px-4 py-3 text-base placeholder:text-white/60 outline-none transition-colors"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>

              <textarea
                className="h-[180px] flex w-full rounded-xl border border-white/10 bg-primary px-4 py-3 text-sm placeholder:text-white/60 focus:border-accent outline-none transition-colors resize-none"
                placeholder="Type your message here"
                name="message"
                required
              />

              {success && (
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/40 text-accent font-semibold text-center text-sm">
                  {success}
                </div>
              )}
              {error && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/40 text-red-400 font-semibold text-center text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="h-12 px-8 rounded-xl border border-accent bg-accent text-primary font-bold hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,255,153,0.3)] w-full sm:w-auto self-start"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information Cards */}
          <div className="w-full xl:w-1/2 flex flex-col justify-center gap-8">
            <ul className="flex flex-col gap-6">
              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-[#232329]/70 border border-white/10 hover:border-accent/40 backdrop-blur-md transition-all duration-300 group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-accent rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,255,153,0.4)] transition-all shrink-0">
                    {getContactIcon(item.icon)}
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-mono uppercase tracking-wider">
                      {item.title}
                    </p>
                    <h4 className="text-white text-base sm:text-xl font-medium mt-1">
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
