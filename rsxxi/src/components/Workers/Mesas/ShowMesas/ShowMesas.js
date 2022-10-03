import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { map } from "lodash";

export function ShowMesas(props) {
  const { mesas, updateMesa, onDeleteMesa } = props;
  return (
    <div>
      <Grid stackable columns={4}>
        {map(mesas, (mesa, index) => (
          <Grid.Column key={index}>
            <Segment>Mesa</Segment>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}
