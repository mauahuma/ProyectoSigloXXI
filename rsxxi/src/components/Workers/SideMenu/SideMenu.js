import React from "react";
import "./SideMenu.scss";
import { Menu, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks";

export function SideMenu(props) {
  const { children } = props;
  const { pathname } = useLocation();
  return (
    <div className="side-menu-worker">
      <MenuLeft pathname={pathname} />
      <div className="content">{children}</div>
    </div>
  );
}

function MenuLeft(props) {
  const { pathname } = props;
  const { auth } = useAuth();

  switch (auth.me.cargo) {
    default:
      return <h1></h1>;

    case "Administrador":
      return (
        <Menu fixed="left" borderless className="side" vertical>
          <Menu.Item as={Link} to={"/workers"} active={pathname === "/workers"}>
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={"/workers/Mesas"}
            active={pathname === "/workers/Mesas"}
          >
            <Icon name="home" />
            Mesas
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={"/workers/Finanzas"}
            active={pathname === "/workers/Finanzas"}
          >
            <Icon name="home" />
            Finanzas
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={"/workers/Pedidos"}
            active={pathname === "/workers/Pedidos"}
          >
            <Icon name="home" />
            Pedidos
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={"/workers/Preparaciones"}
            active={pathname === "/workers/Preparaciones"}
          >
            <Icon name="home" />
            Preparaciones
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={"/workers/Ingredientes"}
            active={pathname === "/workers/Ingredientes"}
          >
            <Icon name="food" />
            Ingredientes
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={"/workers/Reportes"}
            active={pathname === "/workers/Reportes"}
          >
            <Icon name="home" />
            Reportes
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={"/workers/Bodega"}
            active={pathname === "/workers/Bodega"}
          >
            <Icon name="users" />
            Bodega
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={"/workers/Usuarios"}
            active={pathname === "/workers/Usuarios"}
          >
            <Icon name="users" />
            Usuarios
          </Menu.Item>
        </Menu>
      );

    case "Bodega":
      return (
        <Menu fixed="left" borderless className="side" vertical>
          <Menu.Item as={Link} to={"/workers"} active={pathname === "/workers"}>
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={"/workers/Bodega"}
            active={pathname === "/workers/Bodega"}
          >
            <Icon name="users" />
            Bodega
          </Menu.Item>
        </Menu>
      );
    case "Recepcion":
      return (
        <Menu fixed="left" borderless className="side" vertical>
          <Menu.Item as={Link} to={"/workers"} active={pathname === "/workers"}>
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={"/workers/Mesas"}
            active={pathname === "/workers/Mesas"}
          >
            <Icon name="home" />
            Mesas
          </Menu.Item>
        </Menu>
      );
    case "Cocina":
      return (
        <Menu fixed="left" borderless className="side" vertical>
          <Menu.Item as={Link} to={"/workers"} active={pathname === "/workers"}>
            <Icon name="home" />
            Home
          </Menu.Item>

          <Menu.Item
            as={Link}
            to={"/workers/Preparaciones"}
            active={pathname === "/workers/Preparaciones"}
          >
            <Icon name="home" />
            Preparaciones
          </Menu.Item>
        </Menu>
      );
    case "Garzon":
      return (
        <Menu fixed="left" borderless className="side" vertical>
          <Menu.Item as={Link} to={"/workers"} active={pathname === "/workers"}>
            <Icon name="home" />
            Home
          </Menu.Item>

          <Menu.Item
            as={Link}
            to={"/workers/Pedidos"}
            active={pathname === "/workers/Pedidos"}
          >
            <Icon name="home" />
            Pedidos
          </Menu.Item>
        </Menu>
      );
  }
}
