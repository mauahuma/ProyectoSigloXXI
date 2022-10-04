import React from "react";
import { Segment, Button, ButtonGroup } from "semantic-ui-react";
import { useMesas } from "../../../../hooks";

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
    <Segment color={ClassnameColor(mesa)}>
      <h1>{mesa.estado}</h1>
      <h2>mesa {mesa.numero_mesa}</h2>

      <ButtonGroup className="Show-Mesas__BG" compact>
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
    </Segment>
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
