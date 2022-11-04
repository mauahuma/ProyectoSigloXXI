import React from "react";
import { Icon, Menu, Button } from "semantic-ui-react";

export function SideA(props) {
  const { Visible, goToCart, goToOrders, closeTable, numero_mesa } = props;
  return (
    <div className="Side-A">
      <div>
        <Menu borderless inverted fixed="top">
          <Menu.Item position="right">
            <h1>Mesa: {numero_mesa}</h1>
          </Menu.Item>
          <Menu.Item as="a" position="right" onClick={goToOrders}>
            <Icon name="file alternate outline" size="big"></Icon>
          </Menu.Item>
          <Menu.Item as="a" position="right" onClick={goToCart}>
            <Icon name="shop" size="big"></Icon>
          </Menu.Item>
          <Menu.Item as="a" position="right" onClick={closeTable}>
            <Icon name="sign-out" size="big"></Icon>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
