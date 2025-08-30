import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import only the CSS files that are available as npm packages
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// REMOVE THIS LINE:
// import 'lightbox2/dist/css/lightbox.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);