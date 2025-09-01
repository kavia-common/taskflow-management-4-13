import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';

// PUBLIC_INTERFACE
function App() {
  /**
   * App component that sets the global theme attribute and renders the Home page.
   * The theme toggle remains for accessibility and quick visual verification.
   */
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      <Home />
    </div>
  );
}

export default App;
