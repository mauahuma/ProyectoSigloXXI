import React from "react";
import { map } from "lodash";
import { toast } from "react-toastify";
import { addProductCart } from "../../../../api/carrito";
import { ItemsComanda, TitleItems } from "../../";

export function PreparacionCarta(props) {
  const { Preparaciones } = props;

  const agregarCarro = (preparacion) => {
    addProductCart(preparacion.id);
    toast.success(`${preparacion.nombre} añadido al carrito`);
  };
  return (
    <div className="Preparacion-carta">
      {/* <TitleItems Titulo="Entradas" />

      {map(Preparaciones, (Preparacion) => (
        <ItemsComanda Preparacion={Preparacion} />
      ))} */}
      <TitleItems Titulo="Platos" />
      {map(Preparaciones, (Preparacion) => (
        <ItemsComanda Preparacion={Preparacion} agregarCarro={agregarCarro} />
      ))}
      {/* <TitleItems Titulo="Postres" />
      {map(Preparaciones, (Preparacion) => (
        <ItemsComanda Preparacion={Preparacion} />
      ))}
      <TitleItems Titulo="Bebestibles" />
      {map(Preparaciones, (Preparacion) => (
        <ItemsComanda Preparacion={Preparacion} />
      ))} */}
    </div>
  );
}
