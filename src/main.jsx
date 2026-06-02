import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import axios from 'axios';

// Set global base URL for Axios
// Defaults to empty string (relative paths) for local Vite proxy development
// Resolves to your deployed backend URL in production using the VITE_API_BASE_URL env variable
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || '';

// Import bootstrap JS bundle for modals, tabs, dropdown actions
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
