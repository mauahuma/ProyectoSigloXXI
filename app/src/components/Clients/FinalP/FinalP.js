import React from "react";
import { Segment, Header, Container, List, Grid } from "semantic-ui-react";

export function FinalP() {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Nosotros" />
              <List link inverted>
                <List.Item as="a">Contáctanos</List.Item>
                <List.Item as="a">Comentarios</List.Item>
                <List.Item as="a">Evaluaciones</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Servicios" />
              <List link inverted>
                <List.Item as="a">Asociaciones</List.Item>
                <List.Item as="a">Aprobaciones</List.Item>
                <List.Item as="a">¿Cómo reservar?</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Disfruta la experiencia
              </Header>
              <p>
                Agradecemos a los comensales y esperamos tus comentarios para
                mejorar la experiencia.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
