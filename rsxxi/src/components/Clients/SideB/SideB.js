import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import "./SideB.scss";
import { useParams, useNavigate, Link } from "react-router-dom";

export function SideB(props) {
  const { children, numero_mesa } = props;
  return (
    <div className="Side-B">
      <Menu fixed="left" borderless className="side" vertical inverted>
        <Menu.Item>
          <Link to={`/client/${numero_mesa}`}>
            <h1>Carta</h1>
          </Link>
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
      <div className="content">{children}</div>
    </div>
  );
}
