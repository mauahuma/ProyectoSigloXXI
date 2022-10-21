import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import "./SideB.scss";

export function SideB(props) {
  return (
    <div className="Side-B">
      <Menu fixed="left" borderless className="side" vertical inverted>
        <Menu.Item>
          <h1>Comanda</h1>
        </Menu.Item>
        <Menu.Item />
        <Menu.Item as="a">
          <Icon name="utensil spoon" />
          Entradas
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="utensils" />
          Platos
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="birthday cake" />
          Postres
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="beer" />
          Bebestibles
        </Menu.Item>
      </Menu>
    </div>
  );
}
