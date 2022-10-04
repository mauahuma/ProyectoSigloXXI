import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { map } from "lodash";

export function ShowPreparaciones(props) {
  const { preparaciones, updatePreparacion, onDeletePreparacion } = props;
  return (
    <div>
      <Grid stackable columns={4}>
        {map(preparaciones, (preparacion, index) => (
          <Grid.Column key={index}>
            <Segment>Mesa</Segment>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}
