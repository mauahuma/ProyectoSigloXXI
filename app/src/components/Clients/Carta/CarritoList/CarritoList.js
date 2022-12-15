import React, { useState, useEffect } from "react";
import { Image, Button, Icon } from "semantic-ui-react";
import { map, forEach, add } from "lodash";
import { useParams, useNavigate } from "react-router-dom";
import { useMesas, usePedidos } from "../../../../hooks";
import {
  removeProductCartApi,
  cleanProductCartApi,
} from "../../../../api/carrito";
import "./CarritoList.scss";

export function CarritoList(props) {
  const { preparaciones, onReloadCart } = props;
  const [total, setTotal] = useState(0);
  const { addPedidoaMesa } = usePedidos();
  const { getMesaPorNumero } = useMesas();
  const { numero_mesa } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let totalTemp = 0;
    forEach(preparaciones, (preparacion) => {
      totalTemp += Number(preparacion.Valor);
    });
    setTotal(totalTemp.toFixed(0));
  }, [preparaciones]);

  const removerPreparacion = (index) => {
    removeProductCartApi(index);
    onReloadCart();
  };

  const crearPedido = async () => {
    const MesaData = await getMesaPorNumero(numero_mesa);
    const idMesa = MesaData[0].id;

    for await (const preparacion of preparaciones) {
      await addPedidoaMesa(idMesa, preparacion.id);
    }

    cleanProductCartApi();
    navigate(`/client/${numero_mesa}/pedidos`);
  };
  return (
    <div className="list-product-cart">
      {map(preparaciones, (preparacion, index) => (
        <div key={index} className="list-product-cart__product">
          <div>
            <Image
              src={
                preparacion.Imagen
                  ? preparacion.Imagen
                  : require("../../../../assets/Imagenes/Mantencion.jpg")
                      .default
              }
              avatar
            />
            <span>{preparacion.nombre}</span>
          </div>
          <span>${preparacion.Valor}</span>
          <Icon name="close" onClick={() => removerPreparacion(index)} />
        </div>
      ))}

      <Button primary fluid onClick={crearPedido}>
        Realizar pedido (${total})
      </Button>
    </div>
  );
}
