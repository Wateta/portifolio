import React from 'react';
import { Github, Linkedin, Twitter, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white font-mono font-bold text-xl">
          <Terminal className="w-6 h-6 text-primary" />
          <span>shimirwa<span className="text-primary">.dev</span></span>
        </div>
        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Shimirwa Teta Sonia. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Wateta" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400/20 transition-all">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}