 const sections = document.querySelectorAll('section .section-title');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(sectionTitle => observer.observe(sectionTitle));

    
    document.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you shortly.');
      e.target.reset();
    });