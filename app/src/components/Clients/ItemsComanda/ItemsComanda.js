import React from "react";

import {
  Button,
  Icon,
  Item,
  Grid,
  GridColumn,
  GridRow,
} from "semantic-ui-react";
// migrar a Card
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
                  <span className="cinema">{Preparacion.stock}</span>
                </Item.Meta>
                <Item.Description></Item.Description>
                <Item.Extra>
                  {Preparacion.stock > 0 ? (
                    <Button
                      primary
                      floated="right"
                      onClick={() => agregarCarro(Preparacion)}
                    >
                      Pedir
                      <Icon name="right chevron" />
                    </Button>
                  ) : (
                    <Button
                      primary
                      disabled
                      floated="right"
                      onClick={() => agregarCarro(Preparacion)}
                    >
                      Pedir
                      <Icon name="right chevron" />
                    </Button>
                  )}
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </GridColumn>
      </GridRow>
    </Grid>
  );
}
