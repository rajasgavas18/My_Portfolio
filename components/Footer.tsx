import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-background-light dark:bg-background-dark text-center">
      <div className="container mx-auto px-6">
        <p className="text-text-muted mb-4">
          &copy; {new Date().getFullYear()} Rajas Gavas. All rights reserved.
        </p>
        <p className="text-sm text-text-muted opacity-60">
          rajasgavas748@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;