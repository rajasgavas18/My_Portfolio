import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Works</h2>
            <p className="text-text-muted">
              Explore a collection of my recent projects, spanning web development, mobile apps, and data visualization.
            </p>
          </div>
          <a href="https://github.com/rajasgavas18" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center font-semibold hover:text-primary transition-colors">
            View All GitHub Repos <span className="material-symbols-outlined ml-1">arrow_forward</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300" 
                      title="View Code"
                    >
                      <span className="material-symbols-outlined">code</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300" 
                      title="Live Demo"
                    >
                      <span className="material-symbols-outlined">visibility</span>
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-text-muted mb-6 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a href="https://github.com/rajasgavas18" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold hover:text-primary transition-colors">
            View All GitHub Repos <span className="material-symbols-outlined ml-1">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;