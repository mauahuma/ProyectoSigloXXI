import React, { useState, useEffect } from "react";
import { Label, Button, Icon, Checkbox } from "semantic-ui-react";
import { getPedidoPorMesaApi } from "../../../../api/pedidos";
import { ReactComponent as ImTable } from "../../../../assets/table.svg";
import "./MesaWorker.scss";
export function MesaWorker(props) {
  const { mesa } = props;

  useEffect(() => {
    async();
  });
  return (
    <div className="mesa-worker">
      <ImTable />
      <p>mesa {mesa.numero_mesa}</p>
    </div>
  );
}
