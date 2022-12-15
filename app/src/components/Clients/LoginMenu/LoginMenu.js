import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import { useAuth } from "../../../hooks";

export function LoginMenu(props) {
  const { opc1, opc2, opc3, opc1click, opc2click, opc3click } = props;
  const options = [
    { key: "todos", text: "Todos", value: "todos" },
    { key: "entradas", text: "Entradas", value: "entradas" },
    { key: "platos", text: "Platos", value: "platos" },
    { key: "postres", text: "Postres", value: "postres" },
    { key: "bebestibles", text: "Bebestibles", value: "bebestibles" },
  ];
  const navigate = useNavigate();
  const { auth, logout } = useAuth();

  const renderName = () => {
    if (auth.me?.first_name && auth.me?.last_name) {
      return `${auth.me.first_name} ${auth.me.last_name}`;
    }
    return auth.me?.email;
  };
  const gotoreservas = () => {
    navigate(`/reservas/`);
  };
  const gotoRegistro = () => {
    navigate(`/Registrarse/`);
  };
  const gotoLogin = () => {
    navigate(`/Ingresar/`);
  };
  if (!auth)
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Navbar.Text onClick={() => gotoreservas()}>Reservar</Navbar.Text>
          <Navbar.Text onClick={() => opc2click}>{opc2}</Navbar.Text>
          <Navbar.Text onClick={() => opc3click}>{opc3}</Navbar.Text>
        </Nav>
        <Nav className="me-2">
          <Navbar.Text position="right">
            <Button variant="outline-dark" size="sm" as="a" onClick={() => gotoRegistro()} href="#Regisgtrarse">
            Registrarse
          </Button>
          <Button variant="outline-light" onClick={() => gotoLogin()} size="sm" as="a" href="#Ingresar">
            Ingresar
            </Button>
          </Navbar.Text>
        </Nav>
      </Navbar>
    );
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        <Nav.Link href="#Reservar" onClick={() => gotoreservas()}>
          Reservar
        </Nav.Link>
        <Nav.Link href="#opc2" onClick={() => opc2click}>
          {opc2}
        </Nav.Link>
        <Nav.Link href="#opc3" onClick={() => opc3click}>
          {opc3}
        </Nav.Link>
      </Nav>
      <Nav className="me-2">
        <Navbar.Text position="right">
          <Navbar.Text>Bienvenido, {renderName()}</Navbar.Text>
          <Button as="a" onClick={() => logout()}>
            Cerrar Sesión
          </Button>
        </Navbar.Text>
      </Nav>
    </Navbar>
  );
}
