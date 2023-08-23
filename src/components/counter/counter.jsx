
//reterizar el componente
import { useState } from 'react';

export const Counter = () => {
    console.log("Estoy dentro del componente Counter");
  
    /* let counterValue = 100; se comenta porque ya no se necesita*/ 
    //hook useSate:
    //useState permite a los componentes gestionar su propio estado.
    //const[ value, setValue] = useSate (initialValue);
  
    const[ counterValue, setCounter] = useState (100 ); //destructuracion

    const handleIncrement = () => {
      console.log("Estoy en fnc increment");
      setCounter(counterValue + 1);
      console.log("Contador" + counterValue);
    }
  
    const handleDecrement = () => {
      console.log("Estoy en la fnc decrement");
      setCounter(counterValue -1);
       console.log("Contador" + counterValue);
    }

    return (
      <>
        <p>Contador: {counterValue}</p>
        <button onClick={ handleDecrement } > Decrementar</button>
        <button onClick={ handleIncrement } > Incrementar</button>
        {/* Agregar boton reset y resetee el valor de 100*/}
        <botton onClick={ ( event) => counterValue(100)  } > Rest </botton>
        
      </>
    );
  };