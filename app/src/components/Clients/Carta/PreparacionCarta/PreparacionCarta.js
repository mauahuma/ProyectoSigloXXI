import React from "react";
import { map } from "lodash";
import { toast } from "react-toastify";
import { addProductCart } from "../../../../api/carrito";
import { ItemsComanda, TitleItems } from "../../";
import { CategoriaCarta } from "./";
export function PreparacionCarta(props) {
  const { Preparaciones } = props;

  const agregarCarro = (preparacion) => {
    addProductCart(preparacion.id);
    toast.success(`${preparacion.nombre} añadido al carrito`);
  };

  return (
    <div className="Preparacion-carta">
      <CategoriaCarta
        Preparaciones={Preparaciones}
        categoria="Entradas"
        agregarCarro={agregarCarro}
      />
      <CategoriaCarta
        Preparaciones={Preparaciones}
        categoria="Bebestibles"
        agregarCarro={agregarCarro}
      />
      <CategoriaCarta
        Preparaciones={Preparaciones}
        categoria="Platos"
        agregarCarro={agregarCarro}
      />
      <CategoriaCarta
        Preparaciones={Preparaciones}
        categoria="Acompañamientos"
        agregarCarro={agregarCarro}
      />
      <CategoriaCarta
        Preparaciones={Preparaciones}
        categoria="Postres"
        agregarCarro={agregarCarro}
      />
    </div>
  );
}
