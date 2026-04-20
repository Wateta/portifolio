import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── EmailJS config ───────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail) and copy the Service ID below
// 3. Create an Email Template and copy the Template ID below
// 4. Copy your Public Key from Account > API Keys
const EMAILJS_SERVICE_ID  = 'service_1zugglh';
const EMAILJS_TEMPLATE_ID = 'template_0ai0vz9';
const EMAILJS_PUBLIC_KEY  = 'V2ZShcrM-UBcxJemF';
// ──────────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('loading');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: (formRef.current.querySelector('[name="from_name"]') as HTMLInputElement)?.value,
          from_email: (formRef.current.querySelector('[name="from_email"]') as HTMLInputElement)?.value,
          message: (formRef.current.querySelector('[name="message"]') as HTMLTextAreaElement)?.value,
          name: (formRef.current.querySelector('[name="from_name"]') as HTMLInputElement)?.value,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
    } catch (err: any) {
      console.error('EmailJS error:', err?.status, err?.text);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-800/50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Initiate <span className="text-primary">Connection</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's talk about your next project.</h3>
              <p className="text-gray-400">
                Whether you need a secure backend architecture, a vulnerability assessment, or just want to connect, my inbox is always open.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-mono mb-1">EMAIL</p>
                  <a href="mailto:shimirwasonia5@gmail.com" className="text-white hover:text-primary transition-colors">shimirwasonia5@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-mono mb-1">LOCATION</p>
                  <p className="text-white">Rwanda Coding Academy<br/>Nyabihu, Rwanda</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-mono mb-1">PHONE</p>
                  <a href="tel:+250783286251" className="text-white hover:text-primary transition-colors">+250 78 328 6251</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 glass-card p-8"
          >
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400">NAME</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400">EMAIL</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400">MESSAGE</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-primary text-sm font-mono">
                  <CheckCircle className="w-4 h-4" /> Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm font-mono">
                  <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-lg bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <><Loader className="w-4 h-4 animate-spin" /> Sending...</>
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
