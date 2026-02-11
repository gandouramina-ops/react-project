// les hooks: utilisé dans les composent de type function
// pour identifier un hook : il commence tjrs par use (ex: UseState, UseEffect, UsePArams, UseRedact)
// UseState: un state c'est un objet qui change d'état
// chaque composant peut avoir plusieurs state pas uniquement un seul
// useState est un hook qui permet de stocker l'état d'un composant en local

import React, { useState } from "react";

const Usestatehook = () => {
  const [count, setCount] = useState(0);
  const incrementation = () => {
    setCount(count + 1);
  };
  const decrementation = () => {
    setCount(count - 1);
  };
  return(
  <div>
    <h1>Mon Compteur initial est : {count} </h1>
    <button onClick={incrementation}>Incrémenter</button>
    <button onClick={decrementation}>Décrémenter</button>
  </div>
  )
};

export default Usestatehook;
