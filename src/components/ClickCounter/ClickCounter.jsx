import React, { useState } from 'react';

function ClickCounter({stock}) {
  let [ cantidad, setCantidad] = useState(1);
  

  function handleIncrement(){
    if ( cantidad < stock)
    setCantidad (cantidad + 1)
  }

  function handleDecrement(){
    if (cantidad > 1)
    setCantidad (cantidad - 1)
  }

  function handleAddToCart(){
    console.log("Agregado al carrito")
  }
  
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <p>{cantidad}</p>
      <button onClick={handleDecrement}>-</button>
      <br/>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ClickCounter;
