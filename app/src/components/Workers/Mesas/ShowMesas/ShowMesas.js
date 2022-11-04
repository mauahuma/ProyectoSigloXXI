import React from "react";
import { Grid, Segment, Button, ButtonGroup } from "semantic-ui-react";
import { map } from "lodash";
import "./ShowMesas.scss";
import { SegmentoMesas } from "../SegmentoMesas";
export function ShowMesas(props) {
  const { mesas, onRefetch } = props;
  return (
    <div className="Show-Mesas">
      {map(mesas, (mesa, index) => (
        <SegmentoMesas
          key={mesa.numero_mesa}
          mesa={mesa}
          onRefetch={onRefetch}
        />
      ))}
    </div>
  );
}
