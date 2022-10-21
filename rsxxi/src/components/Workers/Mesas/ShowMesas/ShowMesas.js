import React from "react";
import { Grid, Segment, Button, ButtonGroup } from "semantic-ui-react";
import { map } from "lodash";
import "./ShowMesas.scss";
import { SegmentoMesas } from "../SegmentoMesas";
export function ShowMesas(props) {
  const { mesas, onRefetch } = props;
  return (
    <div className="Show-Mesas">
      <Grid stackable columns={3}>
        {map(mesas, (mesa, index) => (
          <Grid.Column key={index}>
            <SegmentoMesas mesa={mesa} onRefetch={onRefetch} />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}
