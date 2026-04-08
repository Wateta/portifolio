import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lock, TerminalSquare, Smartphone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-400 leading-relaxed"
          >
            <p>
              Hello! I'm <strong className="text-white">Shimirwa Teta Sonia</strong>, a passionate Backend Developer and Cyber Security Enthusiast currently studying at the prestigious <strong className="text-primary">Rwanda Coding Academy</strong>.
            </p>
            <p>
              My journey in tech is driven by a fascination with how systems work under the hood and how to protect them from malicious threats. I specialize in building scalable server-side applications, cross-platform mobile apps using Kotlin and React Native, and implementing robust security measures to safeguard data integrity.
            </p>
            <p>
              When I'm not writing APIs or configuring databases, you can find me participating in CTF (Capture The Flag) challenges, analyzing network traffic, or exploring the latest vulnerabilities in the cybersecurity landscape.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div className="glass-card p-6 flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Backend Engineering</h3>
                <p className="text-sm text-gray-400">Designing RESTful APIs, managing databases, and ensuring high performance and responsiveness to requests from the front-end.</p>
              </div>
            </div>

            <div className="glass-card p-6 flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cyber Security</h3>
                <p className="text-sm text-gray-400">Vulnerability assessment, penetration testing, secure coding practices, and understanding modern threat landscapes.</p>
              </div>
            </div>

            <div className="glass-card p-6 flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                <TerminalSquare className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Rwanda Coding Academy</h3>
                <p className="text-sm text-gray-400">Rigorous training in software engineering, embedded systems, and cyber security, preparing for world-class tech challenges.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}