import React from 'react';
import './PageLayout.css';

export { PageLayout };

function PageLayout({ children }) {
  return (
    <React.StrictMode>
      {children}      
    </React.StrictMode>
  );
}

function Layout({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto',
      }}
    >
      {children}
    </div>
  );
}


