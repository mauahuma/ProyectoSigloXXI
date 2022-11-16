import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import "./SideB.scss";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

export function SideB(props) {
  const { children, numero_mesa } = props;
  return (
    <Nav className="justify-content-end flex-grow-1 pe-3 text-bg-dark">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>

    // <div className="Side-B">
    //   <Menu fixed="left" borderless className="side" vertical inverted>
    //     <Menu.Item>
    //       <Link to={`/client/${numero_mesa}`}>
    //         <h1>Carta</h1>
    //       </Link>
    //     </Menu.Item>
    //     <Menu.Item />
    //     <Menu.Item as="a">
    //       <Icon name="utensil spoon" />
    //       Entradas
    //     </Menu.Item>
    //     <Menu.Item as="a">
    //       <Icon name="utensils" />
    //       Platos
    //     </Menu.Item>
    //     <Menu.Item as="a">
    //       <Icon name="birthday cake" />
    //       Postres
    //     </Menu.Item>
    //     <Menu.Item as="a">
    //       <Icon name="beer" />
    //       Bebestibles
    //     </Menu.Item>
    //   </Menu>
    //   <div className="content">{children}</div>
    // </div>
  );
}
