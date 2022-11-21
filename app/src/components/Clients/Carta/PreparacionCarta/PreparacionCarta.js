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
      <TitleItems Titulo="Entradas" />
      {map(Preparaciones, (Preparacion) =>
        Preparacion.categoria === "Entradas" ? (
          <ItemsComanda Preparacion={Preparacion} agregarCarro={agregarCarro} />
        ) : null
      )}
      <TitleItems Titulo="Bebestibles" />
      {map(Preparaciones, (Preparacion) =>
        Preparacion.categoria === "Bebestibles" ? (
          <ItemsComanda Preparacion={Preparacion} agregarCarro={agregarCarro} />
        ) : null
      )}
      <TitleItems Titulo="Platos" />
      {map(Preparaciones, (Preparacion) =>
        Preparacion.categoria === "Platos" ? (
          <ItemsComanda Preparacion={Preparacion} agregarCarro={agregarCarro} />
        ) : null
      )}
      <TitleItems Titulo="Acompañamientos" />
      {map(Preparaciones, (Preparacion) =>
        Preparacion.categoria === "Acompañamientos" ? (
          <ItemsComanda Preparacion={Preparacion} agregarCarro={agregarCarro} />
        ) : null
      )}
      <TitleItems Titulo="Postres" />
      {map(Preparaciones, (Preparacion) =>
        Preparacion.categoria === "Acompañamientos" ? (
          <ItemsComanda Preparacion={Preparacion} agregarCarro={agregarCarro} />
        ) : null
      )}
    </div>
  );
}
