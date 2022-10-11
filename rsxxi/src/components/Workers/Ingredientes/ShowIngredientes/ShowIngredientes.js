import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { map } from "lodash";

export function ShowIngredientes(props) {
  const { ingredientes, updateIngrediente, onDeleteIngrediente } = props;
  return (
    <div>
      <Grid stackable columns={4}>
        {map(ingredientes, (ingrediente, index) => (
          <Grid.Column key={index}>
            <Segment>Ingrediente</Segment>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}