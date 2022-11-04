import React from "react";
import { LoginMenu } from "../../components/Clients";

export function HomeLayout(props) {
  const { children } = props;
  return (
    <div className="Home-layout">
      <div className="Home-layout__menu">
        <LoginMenu
          opc0="Home"
          opc1="Reservar"
          opc2="Carta"
          opc3="Contactanos"
        ></LoginMenu>
      </div>
      {children}
    </div>
  );
}
