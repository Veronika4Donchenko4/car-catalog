import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/screens/home/Home';
import './assets/styles/global.css'
import { Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);

