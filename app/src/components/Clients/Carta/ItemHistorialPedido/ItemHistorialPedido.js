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
          src={
            pedido.preparacion_Data.Imagen
              ? pedido.preparacion_Data.Imagen
              : require("../../../../assets/Imagenes/Mantencion.jpg").default
          }
          style={{ width: "150px", height: "100px" }}
        />
        <p>{nombre}</p>
      </div>

      {pedido.estado === ORDER_STATUS.ENTREGADO ? (
        <span>Entregado</span>
      ) : (
        <span>En marcha</span>
      )}
    </div>
  );
}
