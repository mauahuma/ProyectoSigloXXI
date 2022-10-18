import React from "react";
import "./Home.scss";
import { LoginMenu, ContH, FinalP } from "../../components/Clients";
export function Home() {
  return (
    <div>
      <div>
        <LoginMenu opc1="Reservar" opc2="Carta" opc3="Contactanos" />
      </div>
      <div>
        <ContH />
      </div>
      <div>
        <FinalP />
      </div>
    </div>
  );
}
