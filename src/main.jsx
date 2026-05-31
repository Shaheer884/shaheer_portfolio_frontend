import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import bootstrap JS bundle for modals, tabs, dropdown actions
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
