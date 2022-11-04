import React from "react";
import { Icon, Menu } from "semantic-ui-react";

import { useAuth } from "../../../hooks";
import "./TopMenu.scss";
export function TopMenu() {
  const { auth, logout } = useAuth();

  const renderName = () => {
    if (auth.me?.first_name && auth.me?.last_name) {
      return `${auth.me.first_name} ${auth.me.last_name}`;
    }
    return auth.me?.email;
  };

  return (
    <Menu fixed="top" className="top-menu-worker">
      <Menu.Item className="top-menu-worker__logo">
        <p>rsxxi logo</p>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>Hola, {renderName()}</Menu.Item>
        <Menu.Item onClick={logout}>
          <Icon name="sign-out" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
