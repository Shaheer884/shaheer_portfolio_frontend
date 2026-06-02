import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import axios from 'axios';

// Set global base URL for Axios
// Uses relative paths ('') in local development so the Vite dev server proxy handles it
// Uses the VITE_API_BASE_URL env variable in production, falling back directly to your live backend domain
axios.defaults.baseURL = import.meta.env.DEV 
  ? '' 
  : (import.meta.env.VITE_API_BASE_URL || 'https://shaheer-portfolio-backend.vercel.app');

// Import bootstrap JS bundle for modals, tabs, dropdown actions
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
