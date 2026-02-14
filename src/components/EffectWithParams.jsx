import React, { useEffect, useState } from "react";

const EffectWithParams = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    document.title=`Le nombre de click est ${count} fois`;
  }, [count]);

  return (
    <div>
      <p>Vous Avez cliqué {count} fois </p>
      <button onClick={() => setcount(count + 1)}>Cliquez ICI</button>
    </div>
  );
};

export default EffectWithParams;
