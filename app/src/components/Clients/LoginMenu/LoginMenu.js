import React from "react";
import { Menu, Button, Select, Input, Segment } from "semantic-ui-react";

export function LoginMenu(props) {
  const { opc1, opc2, opc3 } = props;
  const options = [
    { key: "todos", text: "Todos", value: "todos" },
    { key: "entradas", text: "Entradas", value: "entradas" },
    { key: "platos", text: "Platos", value: "platos" },
    { key: "postres", text: "Postres", value: "postres" },
    { key: "bebestibles", text: "Bebestibles", value: "bebestibles" },
  ];
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item name={opc1} onClick={() => console.log} />
        <Menu.Item name={opc2} onClick={() => console.log} />
        <Menu.Item name={opc3} onClick={() => console.log} />
        <Menu.Item position="right">
          <Button as="a" inverted>
            Registrarse
          </Button>
          <Button as="a" inverted>
            Ingresar
          </Button>
        </Menu.Item>
      </Menu>
    </Segment>
  );
}
