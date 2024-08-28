
import React from 'react';
import useDarkMode from '../darkmode/useDarkMode';

const ThemeToggle: React.FC = () => {
  const { darkMode, handleToggle } = useDarkMode();

  return (
    <button onClick={handleToggle}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
