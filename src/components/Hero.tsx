import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, ArrowRight, Smartphone } from 'lucide-react';
import { profileImg } from '../images';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
     
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-white/10 text-xs font-mono text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Backend Developer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-gradient">Shimirwa Teta Sonia</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Backend Developer, Mobile App Developer & Cyber Security Enthusiast. Building robust architectures, cross-platform mobile apps, and securing digital perimeters.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-dark-800 text-white font-medium border border-white/10 hover:border-white/30 transition-colors">
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm font-mono text-gray-500">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-primary" /> Backend Eng.
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" /> InfoSec
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-blue-400" /> Mobile Dev
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-accent/30 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-dark-700 bg-dark-800">
              
              <div className="w-full h-full bg-dark-800 flex items-center justify-center text-gray-600">
                <img src={profileImg} alt="Shimirwa Teta Sonia" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}