import React from "react";
import { SideB, SideA, MenuC } from "../../../components/Clients";
import { Header, Icon, Menu } from "semantic-ui-react";
import "./ComandCa.scss";

export function ComandCa() {
  return (
    <div className="ComandCa">
      <div className="ComandCa__Menu">
        <SideA />
        <SideB />
      </div>
      <div className="ComandCa__Content">
        <MenuC />
      </div>
    </div>
  );
}
