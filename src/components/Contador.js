import React, { useCallback, useState } from "react";
import ContadorHijo from "./ContadorHijo";


export const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");

  // const Sumar = () => {
  //   setContador(contador + 1);
  // };
  // const Restar = () => {
  //   setContador(contador - 1);
  // };

  const Sumar = useCallback(
    () => {
      setContador(contador + 1);
    },
    [contador],
  )
  const Restar = useCallback(
    () => {
      setContador(contador - 1);
    },
    [contador],
  )

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Contador</h3>
      <nav>
        <button onClick={Sumar}>+</button>
        <button onClick={Restar}>-</button>
      </nav>
      <h4>{contador}</h4>
      <input type="text" onChange={handleInput} value={input}/>
      <ContadorHijo contador={contador} sumar={Sumar} restar={Restar} />
    </div>
  );
};
