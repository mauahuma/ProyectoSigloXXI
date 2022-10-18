import React from "react";
import { Button, Image } from "semantic-ui-react";
import classNames from "classnames";
import moment from "moment";
import { usePedidos } from "../../../../hooks";
import { ORDER_STATUS } from "../../../../utils/constants";
import "moment/locale/es";
import "./PedidoItem.scss";

export function PedidoItem(props) {
  const { pedido, onReloadPedidos } = props;
  //const { nombre } = pedido.preparacion_Data;
  const { checkPedidoEntregado } = usePedidos();

  const onCheckPedidoEntregado = async () => {
    await checkPedidoEntregado(pedido.id);
    onReloadPedidos();
  };

  return (
    <div
      className={classNames("order-item-admin", {
        [pedido.estado.toLowerCase()]: true,
      })}
    >
      <div className="order-item-admin__time">
        <span>{moment(pedido.created_at).format("HH:mm")}</span> {" - "}
        <span>{moment(pedido.created_at).startOf("secods").fromNow()}</span>
      </div>

      <div className="order-item-admin__product">
        <Image
          src={require("../../../../assets/Imagenes/Mantencion.jpg").default}
        />
        <p>{pedido.preparacion_Data.nombre}</p>
      </div>

      {pedido.estado === ORDER_STATUS.PENDIENTE && (
        <Button primary onClick={onCheckPedidoEntregado}>
          Marcar entregado
        </Button>
      )}
    </div>
  );
}
