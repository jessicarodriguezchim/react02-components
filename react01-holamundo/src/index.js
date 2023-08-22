import  ReactDOM  from "react-dom/client";

//Referencia al nodo "root" el DOM
const refRootDom= document.getElementById("root");

//rederizar un componente
const root = ReactDOM.createRoot( refRootDom);
const cohorte = "Ch30";
//crear el componente
root.render(  
  <div id="principal">
  <h1>Hola mundo</h1>
  <h2> Ya se la saben, ch30</h2>
  <p>Saludos a la {cohorte}</p>
  <p>Fecha: {new Date().toLocaleTimeString ()}</p>
  </div>

  );