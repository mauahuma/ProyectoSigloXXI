import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
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

  const gotoreservas = () => {
    navigate(`/reservas/`);
  };
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
          <Button as="a">Registrarse</Button>
          <Button as="a">Ingresar</Button>
        </Navbar.Text>
      </Nav>
    </Navbar>
  );
}
