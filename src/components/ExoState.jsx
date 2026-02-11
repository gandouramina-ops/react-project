// un titre : ""
//bouton : changeColor

import React, { useState } from "react";

const ExoState = () => {
  const [Color, setColor] = useState("pink");
  const changeColor = () => {
    if (Color === "pink") {
      setColor("black");
    } else {
      setColor("pink");
    }
  };

  return (
    <div>
      <h1 style={{ color: Color }}>Le Hook : UseState</h1>
      <button onClick={changeColor}>Changer</button>
    </div>
  );
};

export default ExoState;
