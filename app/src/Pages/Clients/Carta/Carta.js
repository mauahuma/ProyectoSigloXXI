import { Grid, Segment, Menu } from "semantic-ui-react";
import React from "react";
import { MenuC } from "../../../components/Clients";
import { Carousel } from "react-bootstrap";
import "./Carta.scss";

export function Carta() {
  const options = [
    { key: "todos", text: "Todos", value: "todos" },
    { key: "entradas", text: "Entradas", value: "entradas" },
    { key: "platos", text: "Platos", value: "platos" },
    { key: "postres", text: "Postres", value: "postres" },
    { key: "bebestibles", text: "Bebestibles", value: "bebestibles" },
  ];
  return (
    <div className="Carta">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../../assets/Imagenes/MENUSXXI.jpg").default}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Selección de platos</h1>
            <p>
              Revisa nuestra selección de platos, insipirados en la gastronomía
              tradicional chilena.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Menu fluid stackable widths={4}>
        <Menu.Item name="Entradas" content="Entradas" />

        <Menu.Item name="Platos" content="Platos" />

        <Menu.Item name="Postres" content="Postres" />
        <Menu.Item name="Bebestibles" content="Bebestibles" />
      </Menu>
      <Segment basic stackable>
        <MenuC
          Title="Entradas"
          Product1="ceviche"
          Product2="ceviche"
          Product3="ceviche"
        />
        <MenuC
          Title="Platos"
          Product1="Porotos"
          Product2="Porotos"
          Product3="Porotos"
        />
        <MenuC
          Title="Postres"
          Product1="Helado"
          Product2="Helado"
          Product3="Helado"
        />
        <MenuC
          Title="Bebestibles"
          Product1="Jugo"
          Product2="Jugo"
          Product3="Jugo"
        />
      </Segment>
    </div>
  );
}
