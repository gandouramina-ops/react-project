import React, { useEffect, useState } from "react";

//useEffect : utilisé quand on fait appel à l'api, interraction avec le dom,
// useEffect : son role est d'executer le code aprés  le rendu du composant (side effect)

const Effect = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const result = await response.json();
      setdata(result);
    };

    fetchData();
  }, []);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setdata(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  return (
    <div>
      <h1>Poste</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Effect;
