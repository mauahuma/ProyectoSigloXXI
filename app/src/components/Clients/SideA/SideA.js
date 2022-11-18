import React from "react";
import { Icon } from "semantic-ui-react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import { SideB } from "../SideB";
export function SideA(props) {
  const { Visible, goToCart, goToOrders, closeTable, numero_mesa } = props;
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          sticky="top"
          expand={expand}
          className="mb-3 text-bg-dark"
        >
          <Container fluid>
            <Navbar.Brand>
              <Link to={`/client/${numero_mesa}`}>Carta</Link>
            </Navbar.Brand>
            <Nav.Link onClick={goToOrders}>
              <Icon name="file alternate outline" size="big" />
            </Nav.Link>
            <Nav.Link onClick={goToCart}>
              <Icon name="shop" size="big"></Icon>{" "}
            </Nav.Link>
            <Nav.Link onClick={closeTable}>
              <Icon name="sign-out" size="big"></Icon>
            </Nav.Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              bg="dark"
              variant="dark"
              className="text-bg-dark"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <SideB />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>

    // <div className="Side-A">
    //   <div>
    //     <Menu borderless inverted fixed="top">
    //       <Menu.Item position="right">
    //         <h1>Mesa: {numero_mesa}</h1>
    //       </Menu.Item>
    //       <Menu.Item as="a" position="right" onClick={goToOrders}>
    //         <Icon name="file alternate outline" size="big"></Icon>
    //       </Menu.Item>
    //       <Menu.Item as="a" position="right" onClick={goToCart}>
    //         <Icon name="shop" size="big"></Icon>
    //       </Menu.Item>
    //       <Menu.Item as="a" position="right" onClick={closeTable}>
    //         <Icon name="sign-out" size="big"></Icon>
    //       </Menu.Item>
    //     </Menu>
    //   </div>
    // </div>
  );
}
