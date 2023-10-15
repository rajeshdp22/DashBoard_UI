import React from 'react';
import ReactDOM from 'react-dom/client';
// Boostrap Css Import
import 'bootstrap/dist/css/bootstrap.min.css';
// Own Css import
import './style/style.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);