import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//importamos una funcion que esta exportada por default


/*
 <React.StrictMode> Componenete de React que se utiliza en el desarrollo
 para detectar y advertir sobre posibles problemas en una aplicacion.

*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);


