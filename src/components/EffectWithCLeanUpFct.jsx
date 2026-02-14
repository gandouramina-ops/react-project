import React, { useEffect, useState } from "react";

const EffectWithCLeanUpFct = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setcount((count)=>count + 1);
    }, 1000);

    return () => clearInterval(interval); //cleanup fonction : permet de nettoyer pr éviter la surcharge de la mémoire +serveur, raffraichir les données , areter les listners
  }, []);

  return <div>Compteur : {count}</div>;
};

export default EffectWithCLeanUpFct;
