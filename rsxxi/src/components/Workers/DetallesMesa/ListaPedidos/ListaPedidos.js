import React from "react";
import { map } from "lodash";
import { PedidoItem } from "../";
import "./ListaPedidos.scss";

export function ListaPedidos(props) {
  const { pedidos, onReloadPedidos } = props;

  return (
    <div className="list-orders-admin">
      {map(pedidos, (pedido) => (
        <PedidoItem
          key={pedido.id}
          pedido={pedido}
          onReloadPedidos={onReloadPedidos}
        />
      ))}
    </div>
  );
}
