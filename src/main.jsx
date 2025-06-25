import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const base = document.createElement('base');
base.setAttribute('href', import.meta.env.BASE_URL);
document.head.insertBefore(base, document.head.firstChild);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


