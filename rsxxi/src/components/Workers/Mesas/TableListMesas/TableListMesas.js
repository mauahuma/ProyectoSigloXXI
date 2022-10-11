import React from "react";
import { Button, Icon, Checkbox } from "semantic-ui-react";
import { map, size } from "lodash";
import "./TableListMesas.scss";
import { MesaWorker } from "../";
export function TableListMesas(props) {
  const { mesas } = props;
  return (
    <div className="mesas-list-worker">
      <Button
        primary
        icon
        className="mesas-list-worker__reload"
        onClick={() => console.log("onRefetchReload")}
      >
        <Icon name="refresh" />
      </Button>

      <div className="mesas-list-worker__reload-toggle">
        <span>Actualizar Automaticamente</span>
        <Checkbox toggle onChange={(_, data) => console.log(data.checked)} />
      </div>
      {map(mesas, (mesa) => (
        <MesaWorker key={mesa.numero_mesa} mesa={mesa} />
      ))}
    </div>
  );
}
