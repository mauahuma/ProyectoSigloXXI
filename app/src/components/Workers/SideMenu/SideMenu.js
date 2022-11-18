import React from "react";
import "./SideMenu.scss";
import { Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { Nav, Container, Row, Col } from "react-bootstrap";
export function SideMenu(props) {
  const { children } = props;
  const { pathname } = useLocation();
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <MenuLeft pathname={pathname} />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            {children}{" "}
          </Col>
        </Row>
      </Container>
    </>
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
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to={"/workers"} active={pathname === "/workers"}>
            <Icon name="home" />
            Home
          </Nav.Link>

          <Nav.Link
            as={Link}
            to={"/workers/Mesas"}
            active={pathname === "/workers/Mesas"}
          >
            <Icon name="home" />
            Mesas
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/workers/Reservas"}
            active={pathname === "/workers/Reservas"}
          >
            <Icon name="home" />
            Reservas
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/workers/Finanzas"}
            active={pathname === "/workers/Finanzas"}
          >
            <Icon name="home" />
            Finanzas
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/workers/Pedidos"}
            active={pathname === "/workers/Pedidos"}
          >
            <Icon name="home" />
            Pedidos
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/workers/Preparaciones"}
            active={pathname === "/workers/Preparaciones"}
          >
            <Icon name="home" />
            Preparaciones
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/workers/Pagos"}
            active={pathname === "/workers/Pagos"}
          >
            <Icon name="food" />
            Pagos
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/workers/Reportes"}
            active={pathname === "/workers/Reportes"}
          >
            <Icon name="home" />
            Reportes
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/workers/Bodega"}
            active={pathname === "/workers/Bodega"}
          >
            <Icon name="users" />
            Bodega
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/workers/Usuarios"}
            active={pathname === "/workers/Usuarios"}
          >
            <Icon name="users" />
            Usuarios
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/workers/Proveedores"}
            active={pathname === "/workers/Proveedores"}
          >
            <Icon name="users" />
            Proveedores
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/workers/Cocina"}
            active={pathname === "/workers/Cocina"}
          >
            <Icon name="users" />
            Cocina
          </Nav.Link>
        </Nav>
      );

    case "Bodega":
      return (
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to={"/workers"} active={pathname === "/workers"}>
            <Icon name="home" />
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/workers/Bodega"}
            active={pathname === "/workers/Bodega"}
          >
            <Icon name="users" />
            Bodega
          </Nav.Link>
        </Nav>
      );
    case "Recepcion":
      return (
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to={"/workers"} active={pathname === "/workers"}>
            <Icon name="home" />
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/workers/Mesas"}
            active={pathname === "/workers/Mesas"}
          >
            <Icon name="home" />
            Mesas
          </Nav.Link>
        </Nav>
      );
    case "Cocina":
      return (
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to={"/workers"} active={pathname === "/workers"}>
            <Icon name="home" />
            Home
          </Nav.Link>

          <Nav.Link
            as={Link}
            to={"/workers/Preparaciones"}
            active={pathname === "/workers/Preparaciones"}
          >
            <Icon name="home" />
            Preparaciones
          </Nav.Link>
        </Nav>
      );
    case "Garzon":
      return (
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to={"/workers"} active={pathname === "/workers"}>
            <Icon name="home" />
            Home
          </Nav.Link>

          <Nav.Link
            as={Link}
            to={"/workers/Pedidos"}
            active={pathname === "/workers/Pedidos"}
          >
            <Icon name="home" />
            Pedidos
          </Nav.Link>
        </Nav>
      );
  }
}
