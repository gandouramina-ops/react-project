// calculer la moyenne de deux module de façon dynamique
// premiere méthode : 
import React from "react";

const Exoprops = ({ moduleA, moduleB }) => {
  const moyenne = (moduleA  +  moduleB ) / 2;
  return (
    <>
      <p>Module A : {moduleA}</p>
      <p>Module B : {moduleB}</p>
      <p>Moyenne : {moyenne}</p>
    </>
  );
};

export default Exoprops;

// 2ème méthode :
// import React from "react";

// const Exoprops = ({ moduleA, moduleB }) => {
//   return (
//     <>
//       <p>Module A : {moduleA}</p>
//       <p>Module B : {moduleB}</p>
      // <p>Moyenne : {(moduleA+moduleB)/2}</p> // ça s'appelle le destructuring 
//     </>
//   );
// };

// export default Exoprops;
