import React from "react";
import { Segment, Button, ButtonGroup } from "semantic-ui-react";
import { useMesas } from "../../../../hooks";
import "./SegmentoMesas.scss";
import { ReactComponent as ImTable } from "../../../../assets/table.svg";
import classNames from "classnames";

export function SegmentoMesas(props) {
  const { mesa, onRefetch } = props;
  const { updateMesa } = useMesas();

  function DispChng(mesa) {
    updateMesa(mesa.id, {
      estado: "Disponible",
    });
    onRefetch();
  }
  function ResChng(mesa) {
    updateMesa(mesa.id, {
      estado: "Reservado",
    });
    onRefetch();
  }
  function OcpChng(mesa) {
    updateMesa(mesa.id, {
      estado: "Ocupado",
    });
    onRefetch();
  }

  return (
    <div className="Segmento-Mesas">
      <h2>mesa {mesa.numero_mesa}</h2>

      <ImTable
        className={classNames({
          ocupada: mesa.estado === "Ocupado",
          disponible: mesa.estado === "Disponible",
          reservada: mesa.estado === "Reservado",
        })}
      />
      <h1>{mesa.estado}</h1>

      <ButtonGroup className="Segmento-Mesas__BG" compact>
        <Button
          color="green"
          type="button"
          onClick={() => {
            DispChng(mesa);
          }}
        >
          Disponible
        </Button>
        <Button
          color="blue"
          type="button"
          onClick={() => {
            ResChng(mesa);
          }}
        >
          Reservado
        </Button>
        <Button
          color="red"
          type="button"
          onClick={() => {
            OcpChng(mesa);
          }}
        >
          Ocupado
        </Button>
      </ButtonGroup>
    </div>
  );
}

function ClassnameColor(mesa) {
  switch (mesa.estado) {
    case "Disponible":
      return "green";
    case "Ocupado":
      return "red";
    case "Reservado":
      return "blue";
    case "Deshabilitado":
      return "gray";
  }
}
