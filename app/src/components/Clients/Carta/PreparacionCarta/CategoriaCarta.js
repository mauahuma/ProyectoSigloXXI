import React from "react";
import { ItemsComanda, TitleItems } from "../../";
import { map } from "lodash";

export function CategoriaCarta(props) {
  const { Preparaciones, categoria, agregarCarro } = props;

  return (
    <>
      <TitleItems Titulo={categoria} />
      {map(Preparaciones, (Preparacion) =>
        Preparacion.categoria === `${categoria}` ? (
          <ItemsComanda Preparacion={Preparacion} agregarCarro={agregarCarro} />
        ) : null
      )}
    </>
  );
}
