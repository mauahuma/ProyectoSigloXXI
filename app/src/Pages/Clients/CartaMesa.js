import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { useMesas } from "../../hooks";

export function CartaMesa() {
  const { numero_mesa } = useParams();
  const { isExistMesa } = useMesas();
  const [error, setError] = useState(null);

  const ValidateMesa = async () => {
    setError(null);
    const exist = await isExistMesa(numero_mesa);
    console.log(exist);
    return exist;
  };

  return (
    <div>{ValidateMesa ? <h1>Mesa válida</h1> : <h1>Mesa inválida</h1>}</div>
  );
}
