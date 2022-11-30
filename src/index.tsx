import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/application/App';
import reportWebVitals from './reportWebVitals';
import './styles/application/reset.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
