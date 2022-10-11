import React, { useState, useEffect } from "react";
import { Label, Button, Icon, Checkbox } from "semantic-ui-react";
import { getPedidoPorMesaApi } from "../../../../api/pedidos";
import { ReactComponent as ImTable } from "../../../../assets/table.svg";
import "./MesaWorker.scss";
import { ORDER_STATUS } from "../../../../utils/constants";
export function MesaWorker(props) {
  const { mesa } = props;

  useEffect(() => {
    (async () => {
      const response = await getPedidoPorMesaApi(
        mesa.id,
        ORDER_STATUS.PENDIENTE || ORDER_STATUS.PREPARANDO
      );
    })();
  }, []);
  return (
    <div className="mesa-worker">
      <ImTable />
      <p>mesa {mesa.numero_mesa}</p>
    </div>
  );
}
