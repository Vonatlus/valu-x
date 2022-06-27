import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ValuXProvider } from './ValuXContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ValuXProvider>
      <App />
    </ValuXProvider>
  </React.StrictMode>
);
