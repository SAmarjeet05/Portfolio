import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme') as Theme;
      if (stored) return stored;
      
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Remove existing theme classes
    document.documentElement.classList.remove('light', 'dark');
    document.body.classList.remove('light', 'dark');
    
    // Add current theme class to both html and body
    document.documentElement.classList.add(theme);
    document.body.classList.add(theme);
    
    // Update data attribute for better CSS targeting
    document.documentElement.setAttribute('data-theme', theme);
    
    // Apply background directly to body
    if (theme === 'light') {
      document.body.style.background = 'linear-gradient(to bottom right, #ffffff, #f9fafb, #dbeafe)';
    } else {
      document.body.style.background = 'linear-gradient(to bottom right, #111827, #000000, #1e3a8a)';
    }
    
    // Force a re-render by updating a CSS custom property
    document.documentElement.style.setProperty('--theme-mode', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};