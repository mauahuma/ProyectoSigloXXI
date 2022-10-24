import React from "react";
import { Header, Divider, Container } from "semantic-ui-react";

export function TitleItems(props) {
  const { Titulo } = props;
  return (
    <Container>
      <Header as="h1">{Titulo}</Header>
    </Container>
  );
}
