import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('tema') === 'escuro';
  });

  useEffect(() => {
    document.body.classList.toggle('escuro', isDark);
    localStorage.setItem('tema', isDark ? 'escuro' : 'claro');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return { isDark, toggleTheme };
}
