import React, { useState, useEffect } from 'react';
import './App.css';
import AppRoutes from './routes';

/**
 * PUBLIC_INTERFACE
 * App: Root component applying theme and rendering router + navigation.
 */
function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to <html> to support CSS variables in asset pages
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 'auto', padding: 0, background: 'var(--bg-secondary)' }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          style={{ position: 'fixed', top: 12, right: 12, zIndex: 10 }}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>
      <AppRoutes />
    </div>
  );
}

export default App;
