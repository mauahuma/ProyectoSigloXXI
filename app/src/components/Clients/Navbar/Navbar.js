import React from "react";
import { Menu, Button, Select, Input, Segment } from "semantic-ui-react";

export function Navbar(props) {
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
        <Menu.Menu position="right">
          <Input
            labelPosition="right"
            type="text"
            placeholder="Buscar..."
            action
          >
            <input />
            <Select compact options={options} defaultValue="Filtros" />
            <Button type="submit">Buscar</Button>
          </Input>
        </Menu.Menu>
      </Menu>
    </Segment>
  );
}
