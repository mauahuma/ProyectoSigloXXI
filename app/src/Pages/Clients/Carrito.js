import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { size } from "lodash";
import { usePreparaciones } from "../../hooks";
import { getPrepraracionesCart } from "../../api/carrito";
import { CarritoList } from "../../components/Clients";

export function Carrito() {
  const [preparaciones, setPreparaciones] = useState(null);
  const [reloadCart, setReloadCart] = useState(false);
  const { getPreparacionById } = usePreparaciones();
  const { numero_mesa } = useParams();

  useEffect(() => {
    (async () => {
      const idPreparacionesCart = getPrepraracionesCart();

      const preparacionesArray = [];
      for await (const idPreparacion of idPreparacionesCart) {
        const response = await getPreparacionById(idPreparacion);
        preparacionesArray.push(response);
      }
      setPreparaciones(preparacionesArray);
    })();
  }, [reloadCart]);

  const onReloadCart = () => setReloadCart((prev) => !prev);

  return (
    <div>
      <h1>Carrito</h1>
      {!preparaciones ? (
        <p>Cargando...</p>
      ) : size(preparaciones) === 0 ? (
        <div style={{ textAlign: "center" }}>
          <p>Tu carrito esta vacío</p>
          <Link to={`/client/${numero_mesa}/pedidos`}>
            <Button primary>Ver pedidos</Button>
          </Link>
        </div>
      ) : (
        <CarritoList
          preparaciones={preparaciones}
          onReloadCart={onReloadCart}
        />
      )}
    </div>
  );
}
