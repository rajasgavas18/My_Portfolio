import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white/50 dark:bg-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
          <p className="text-text-muted">
            A curated list of tools, languages, and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name}
              className="group bg-background-light dark:bg-background-dark p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-transparent hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <span className={`material-symbols-outlined text-4xl group-hover:scale-110 transition-transform duration-300 ${skill.colorClass}`}>
                {skill.icon}
              </span>
              <span className="font-medium text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;