
//const pages = [ "Home", "Users", "About", "Register" ];
const pages = [ 
    { name: "Home",  url: "/"} ,
    { name: "Users",  url: "/"} ,
    { name: "Counter",  url: "/"} ,
    { name: "About",  url: "/"},
    { name: "Register",  url: "/"}
 ];
 
 /*
  Cuando se renderiza una lista de elementos, es importante
  proporcionar una prop "key" única a cada elemento de la lista.
  Esto permite a React realizar una actualización eficiente
  y optimizada de la interfaz de usuario cuando cambia el
  contenido de la lista.
 
 */
 
 const Navbar = () => {
   return (
     <>
         <h4>CH30</h4>
         <ul>
             { pages.map( page => <li key={page.name}>{page.name}</li>  ) }
         </ul>
     </>
   )
 }
 

const Footer = () => {
    return(
        <>
        <p>Derechos no reservador 2023.</p>
        <p>Lo que esta en Mexico, pertenece a los Mexicanos</p>
        </>
    );
}

export { Navbar, Footer};