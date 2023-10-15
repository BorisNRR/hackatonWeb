import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Opposite from './components/Opposite';
import ProgBar from './components/ProgBar';
import FormReload from './components/FormReload';
import Timer from './components/Timer';
import Generator from './components/Generator';
import Prueba from './components/Prueba';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Prueba />
  </React.StrictMode>
);
