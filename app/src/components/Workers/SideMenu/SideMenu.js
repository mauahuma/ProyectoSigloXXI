import React from "react";
import "./SideMenu.scss";
import { Icon, Header, HeaderContent } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { Nav, Container, Row, Col } from "react-bootstrap";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";
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
          <Header
            icon="home"
            as={Link}
            to={"/workers"}
            active={pathname === "/workers"}
            content="Home"
          ></Header>

          <Header
            icon="block layout"
            as={Link}
            to={"/workers/Mesas"}
            active={pathname === "/workers/Mesas"}
            content="Mesas"
          ></Header>
          <Header
            icon="address card"
            as={Link}
            to={"/workers/Reservas"}
            active={pathname === "/workers/Reservas"}
            content="Reservas"
          ></Header>
          <Header
            icon="money bill alternate"
            as={Link}
            to={"/workers/Finanzas"}
            active={pathname === "/workers/Finanzas"}
            content="Finanzas"
          ></Header>
          <Header
            icon="calendar check"
            as={Link}
            to={"/workers/Pedidos"}
            active={pathname === "/workers/Pedidos"}
            content="Pedidos"
          ></Header>
          <Header
            icon="list alternate"
            as={Link}
            to={"/workers/Preparaciones"}
            active={pathname === "/workers/Preparaciones"}
            content="Preparaciones"
          ></Header>
          <Header
            icon="credit card"
            as={Link}
            to={"/workers/Pagos"}
            active={pathname === "/workers/Pagos"}
            content="Pagos"
          ></Header>
          <Header
            icon="chart line"
            as={Link}
            to={"/workers/Reportes"}
            active={pathname === "/workers/Reportes"}
            content="Reportes"
          ></Header>
          <Header
            icon="warehouse"
            as={Link}
            to={"/workers/Bodega"}
            active={pathname === "/workers/Bodega"}
            content="Bodega"
          ></Header>
          <Header
            icon="user circle"
            as={Link}
            to={"/workers/Usuarios"}
            active={pathname === "/workers/Usuarios"}
            content="Usuarios"
          ></Header>
          <Header
            icon="handshake"
            as={Link}
            to={"/workers/Proveedores"}
            active={pathname === "/workers/Proveedores"}
            content="Proveedores"
          ></Header>
          <Header
            icon="utensils"
            as={Link}
            to={"/workers/Cocina"}
            active={pathname === "/workers/Cocina"}
            content="Cocina"
          ></Header>
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
