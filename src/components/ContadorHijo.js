import React, { memo, useMemo } from "react";

const ContadorHijo = ({ contador, sumar, restar }) => {
  // let superNro=0;
  // for (let i = 0; i < 1000000000; i++) {
  //    superNro++;
  // }

  let superNro = useMemo(() => 
  {let Nro=0;
  for (let i = 0; i < 1000000000; i++) {
     Nro++;
  }
  return Nro;}
  , []);

  console.log("Hijo del Contador Rederisado");
  return (
    <div style={{ border: "thin solid #00FFFF", margin: "1rem" }}>
      <h2>Hijo del Contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{contador}</h3>
      <h4>{superNro}</h4>
    </div>
  );
};

export default memo(ContadorHijo);
