import React, { useState, useEffect } from "react";
import { Button, Icon, Checkbox } from "semantic-ui-react";
import { map, size } from "lodash";
import "./TableListMesas.scss";
import { MesaWorker } from "../";
export function TableListMesas(props) {
  const { mesas } = props;
  const [reload, setReload] = useState(false);
  const [autoReload, setAutoReload] = useState(false);

  const onReload = () => setReload((prev) => !prev);

  useEffect(() => {
    if (autoReload) {
      const autoreloadAction = () => {
        onReload();
        setTimeout(() => {
          autoreloadAction();
        }, 5000);
      };
      autoreloadAction();
    }
  }, [autoReload]);

  const onCheckAutoReload = (check) => {
    if (check) {
      setAutoReload(check);
    } else {
      window.location.reload();
    }
  };
  return (
    <div className="mesas-list-worker">
      <Button
        primary
        icon
        className="mesas-list-worker__reload"
        onClick={onReload}
      >
        <Icon name="refresh" />
      </Button>

      <div className="mesas-list-worker__reload-toggle">
        <span>Actualizar Automaticamente</span>
        <Checkbox
          toggle
          checked={autoReload}
          onChange={(_, data) => onCheckAutoReload(data.checked)}
        />
      </div>
      {map(mesas, (mesa) => (
        <MesaWorker key={mesa.numero_mesa} mesa={mesa} reload={reload} />
      ))}
    </div>
  );
}
