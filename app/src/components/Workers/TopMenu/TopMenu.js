import React from "react";
import { Icon } from "semantic-ui-react";
import { Navbar, Container, NavDropdown, Offcanvas } from "react-bootstrap";
import { useAuth } from "../../../hooks";
import "./TopMenu.scss";
import { SideMenu } from "../SideMenu";
export function TopMenu() {
  const { auth, logout } = useAuth();

  const renderName = () => {
    if (auth.me?.first_name && auth.me?.last_name) {
      return `${auth.me.first_name} ${auth.me.last_name}`;
    }
    return auth.me?.email;
  };

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          sticky="top"
          bg="light"
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand
              className="Navbar__logo"
              src={require("../../../assets/Imagenes/SXX1 LOGO.png").default}
            ></Navbar.Brand>
            <Navbar.Text className="Navbar__saludo" placement="end">
              Hola, {renderName()}
            </Navbar.Text>
            <Navbar.Text placement="end" className="ml-auto" onClick={logout}>
              <Icon name="sign-out" />
            </Navbar.Text>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <SideMenu />
                {/* <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    // <Navbar>
    //   <Container>
    //     <Navbar.Brand>rsxxi logo</Navbar.Brand>
    //     <Navbar.Toggle />
    //     <Navbar.Collapse className="justify-content-end">
    //
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}
