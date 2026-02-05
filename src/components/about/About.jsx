import React from "react";
import image from "./images.png";


// première méthode
// on a rajouter le parametre props qui est prédéfini qui permet de recuperer les props
// export const About = (props) => {
//   return (
//     <div className="about">
//       <h2>A propos de nous</h2>
//       {/* {props.name} : permet de récupérer le props name */}
//       {/* {props.age} : permet de récupérer le props age */}
//       <p>
//         Bienvenue {props.name} qui a l'age de {props.age} sur notre site web
//       </p>
//       <img src={image} alt="" />
//     </div>
//   );
// };


// 2ème méthode 
// export const About = (props) => {
//   const name = props.name; //le detructuring : donner le meme nom de props à la constante
//   const age = props.age;
//   return (
//     <div className="about">
//       <h2>A propos de nous</h2>
//       {/* {name} : permet de récupérer le props name */}
//       {/* {age} : permet de récupérer le props age */}
//       <p>
//         Bienvenue {name} qui a l'age de {age} sur notre site web
//       </p>
//       <img src={image} alt="" />
//     </div>
//   );
// };
export const About = ({ name, age }) => {
  return (
    <div className="about">
      <h2>A propos de nous</h2>
      {/* {name} : permet de récupérer le props name */}
      {/* {age} : permet de récupérer le props age */}
      <p>
        Bienvenue {name} qui a l'age de {age} sur notre site web
      </p>
      <img src={image} alt="" />
    </div>
  );
};
