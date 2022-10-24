import React from "react";

import {
  Button,
  Icon,
  Item,
  Grid,
  GridColumn,
  GridRow,
} from "semantic-ui-react";

export function ItemsComanda(props) {
  const { Preparacion, agregarCarro } = props;
  return (
    <Grid columns={1}>
      <GridRow>
        <GridColumn>
          <Item.Group divided>
            <Item>
              <Item.Image
                src={
                  Preparacion.Imagen
                    ? Preparacion.Imagen
                    : require("../../../assets/Imagenes/Mantencion.jpg").default
                }
              />

              <Item.Content>
                <Item.Header as="a">{Preparacion.nombre}</Item.Header>
                <Item.Meta>
                  <span className="cinema">${Preparacion.Valor}</span>
                </Item.Meta>
                <Item.Description></Item.Description>
                <Item.Extra>
                  <Button
                    primary
                    floated="right"
                    onClick={() => agregarCarro(Preparacion)}
                  >
                    Pedir
                    <Icon name="right chevron" />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </GridColumn>
      </GridRow>
    </Grid>
  );
}
