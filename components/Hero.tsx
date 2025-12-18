import React from 'react';
import { smoothScroll } from '../utils';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/4"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-text-muted/20 bg-background-light/50 dark:bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-wider text-text-muted">Available for work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Building digital <br />
            <span className="relative inline-block">
              experiences
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
            <br /> that matter.
          </h1>
          
          <p className="text-lg text-text-muted max-w-lg leading-relaxed">
            Hi, I'm <strong className="text-text-main dark:text-white">Rajas Gavas</strong>. A Computer Engineering student passionate about crafting scalable web applications and solving complex algorithmic challenges.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              onClick={(e) => smoothScroll(e, '#projects')}
              className="px-8 py-4 bg-text-main text-background-light dark:bg-white dark:text-black rounded-xl font-semibold hover:bg-primary hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              View Projects
            </a>
            <a
              href="https://rajasgavas18.github.io/My_Portfolio/resume.pdf"
              download
              className="px-8 py-4 bg-primary text-black rounded-xl font-semibold hover:bg-primary/80 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative z-10 w-full aspect-square rounded-full overflow-hidden border-8 border-background-light dark:border-background-dark/50 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000" 
              alt="Rajas Gavas" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating badges */}
          <div className="absolute top-10 -right-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl z-20 animate-bounce-slow">
             <span className="material-symbols-outlined text-4xl text-primary">code</span>
          </div>
          <div className="absolute bottom-20 -left-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl z-20 animate-bounce-delayed">
             <span className="material-symbols-outlined text-4xl text-blue-500">data_object</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;