import React from "react";
import { Image, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import { toast } from "react-toastify";
import { addProductCart } from "../../../../api/carrito";
export function PreparacionCarta(props) {
  const { Preparaciones } = props;

  const agregarCarro = (preparacion) => {
    addProductCart(preparacion.id);
    toast.success(`${preparacion.nombre} añadido al carrito`);
  };
  return (
    <div className="Preparacion-carta">
      {map(Preparaciones, (Preparacion) => (
        <div key={Preparacion.id} className="Preparacion-carta__preparacion">
          <div>
            <Image
              src={
                require("../../../../assets/Imagenes/Mantencion.jpg").default
              }
            />
            <span>{Preparacion.nombre}</span>
          </div>
          <Button primary icon onClick={() => agregarCarro(Preparacion)}>
            <Icon name="add" />
          </Button>
        </div>
      ))}
    </div>
  );
}
