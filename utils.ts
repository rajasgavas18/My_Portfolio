import React from 'react';

/**
 * Smooth scrolls to a specific element ID with an offset for fixed headers.
 * @param e The mouse event from the click
 * @param href The href string containing the ID (e.g., "#about")
 * @param callback Optional callback to run after scroll starts (e.g., close menu)
 */
export const smoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, 
  href: string,
  callback?: () => void
) => {
  e.preventDefault();
  if (callback) callback();
  
  const targetId = href.replace('#', '');
  // Special case for "home" or empty href
  if (targetId === '' || href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(targetId);
  
  if (element) {
    // Offset for fixed header (approx 80px)
    const headerOffset = 80; 
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};