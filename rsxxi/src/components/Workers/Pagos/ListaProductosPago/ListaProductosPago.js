import React, { useState, useEffect } from "react";
import { Image } from "semantic-ui-react";
import { map } from "lodash";
import { usePedidos } from "../../../../hooks";
import "./ListaProductosPago.scss";

export function ListaProductosPago(props) {
  const { pagos } = props;
  const [pedidos, setPedidos] = useState([]);
  const { getPedidosbyPago } = usePedidos();

  useEffect(() => {
    (async () => {
      const response = await getPedidosbyPago(pagos.id);
      setPedidos(response);
    })();
  }, []);

  return (
    <div className="payment-product-list">
      {map(pedidos, (pedido) => (
        <div className="payment-product-list__product" key={pedido.id}>
          <div>
            {/* <Image src={pedido.preparacion_Data.image} avatar size="tiny" /> */}
            <span>{pedido.preparacion_Data.nombre}</span>
          </div>
          <span>${pedido.preparacion_Data.Valor}</span>
        </div>
      ))}
    </div>
  );
}
