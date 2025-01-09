import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import "./css/Home.css";
import "./css/PostCard.css";
import "./css/Form.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


