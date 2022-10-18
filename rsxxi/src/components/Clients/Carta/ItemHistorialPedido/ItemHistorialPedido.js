import React from "react";
import { Image } from "semantic-ui-react";
import classNames from "classnames";
import moment from "moment";
import "moment/locale/es";
import { ORDER_STATUS } from "../../../../utils/constants";
import "./ItemHistorialPedido.scss";

export function ItemHistorialPedido(props) {
  const { pedido } = props;
  const { nombre } = pedido.preparacion_Data;
  return (
    <div
      className={classNames("order-history-item", {
        [pedido.estado.toLowerCase()]: true,
      })}
    >
      <div className="order-history-item__time">
        <span>
          Pedido {moment(pedido.created_at).startOf("second").fromNow()}
        </span>
      </div>

      <div className="order-history-item__product">
        <Image
          src={require("../../../../assets/Imagenes/Mantencion.jpg").default}
        />
        <p>{nombre}</p>
      </div>

      {pedido.estado === ORDER_STATUS.PENDIENTE ? (
        <span>En marcha</span>
      ) : (
        <span>Entregado</span>
      )}
    </div>
  );
}
