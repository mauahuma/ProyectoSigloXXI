import React from "react";
import {
  Container,
  Header,
  Icon,
  Button,
  Divider,
  Segment,
} from "semantic-ui-react";

export function HeaDR(props) {
  const {} = props;
  return (
    <Container fluid>
      <Segment inverted>
        <Header
          as="h1"
          content="Carta"
          textAlign="center"
          style={{
            fontSize: props ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: props ? "1.5em" : "3em",
          }}
        />
        <Header
          as="h2"
          content="Ingresa para realizar los pedidos"
          textAlign="center"
          style={{
            fontSize: props ? "1.5em" : "2em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: props ? "0.5em" : "1.5em",
          }}
        />
        <Segment inverted>
          <p>
            <Button floated="right" size="large" primary>
              Realizar Pedido
              <Icon name="right arrow" />
            </Button>
          </p>
        </Segment>
        <Divider horizontal section />
      </Segment>
    </Container>
  );
}
