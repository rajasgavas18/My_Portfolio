import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      // Using FormSubmit AJAX endpoint to send email directly
      const response = await fetch("https://formsubmit.co/ajax/rajasgavas748@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject, // Maps to email subject in FormSubmit
          message: formData.message,
          // Optional: Disables captcha if you want simpler submission, though sometimes required by service
          // _captcha: "false" 
        })
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
        // Reset form state after 3 seconds
        setTimeout(() => setFormState('idle'), 3000);
      } else {
        console.error("Submission failed");
        setFormState('error');
        setTimeout(() => setFormState('idle'), 3000);
      }
    } catch (error) {
      console.error(error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 bg-background-light dark:bg-background-dark rounded-[3rem] p-8 md:p-16 shadow-2xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's work together</h2>
              <p className="text-text-muted text-lg">
                Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                    <span className="material-symbols-outlined">{link.icon}</span>
                  </div>
                  <span className="font-semibold text-lg">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider opacity-70">Name</label>
                <input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-transparent border-b-2 border-gray-300 dark:border-white/20 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider opacity-70">Email</label>
                <input 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-transparent border-b-2 border-gray-300 dark:border-white/20 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider opacity-70">Subject</label>
              <select 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-gray-300 dark:border-white/20 py-3 focus:outline-none focus:border-primary transition-colors text-text-muted"
              >
                <option value="Project Inquiry">Project Inquiry</option>
                <option value="Freelance Work">Freelance Work</option>
                <option value="General Question">General Question</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider opacity-70">Message</label>
              <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4} 
                placeholder="Tell me about your project..." 
                className="w-full bg-transparent border-b-2 border-gray-300 dark:border-white/20 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={formState !== 'idle' && formState !== 'error'}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2
                ${formState === 'success' ? 'bg-green-500 text-white' : ''}
                ${formState === 'error' ? 'bg-red-500 text-white' : ''}
                ${formState === 'idle' || formState === 'submitting' ? 'bg-text-main text-white dark:bg-white dark:text-black hover:bg-primary hover:text-black' : ''}
              `}
            >
              {formState === 'submitting' && (
                <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
              )}
              {formState === 'success' && 'Message Sent Successfully!'}
              {formState === 'error' && 'Failed. Try Again.'}
              {formState === 'idle' && 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;