import React from "react";
import { Badge, Image } from "react-bootstrap";
import { Divider, Grid } from "semantic-ui-react";
import "./Boleta.scss";

export function Boleta() {
  return (
    <div className="Boleta">
      <div className="Boleta__Cont" align="center">
        <img
          width={300}
          src={require("../../../assets/Imagenes/SXX1 LOGO.png").default}
        />
        <div className="Boleta__Title" align="center">
          <h1>Boleta de pago</h1>
          <h3>Dirección ejemplo 241</h3>
          <h3>Rut de empresa: xxxxxxxx-x</h3>
        </div>
        <div align="center">
          <Divider horizontal>Datos de la boleta</Divider>
          <h4>FECHA DE EMISIÓN:</h4>
          <h4>HORA DE EMISIÓN:</h4>
          <h4>NÚMERO DE MESA:</h4>
          <Divider horizontal>Descripción de la boleta</Divider>
        </div>
        <div align="center" className="Boleta__Des">
          <Divider />
          <Grid stackable columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <h4>Producto</h4>
              </Grid.Column>
              <Grid.Column>
                <h4>Cantidad</h4>
              </Grid.Column>
              <Grid.Column>
                <h4>Monto</h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <Grid stackable columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <h5>Ejemplo1</h5>
              </Grid.Column>
              <Grid.Column>
                <h5>Ejemplo1</h5>
              </Grid.Column>
              <Grid.Column>
                <h5>Ejemplo1</h5>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <di align="center">
            <Divider horizontal>Total a pagar</Divider>
            <h4>TOTAL SIN ADICIONALES:</h4>
            <h4>PROPINA:</h4>
            <h4>IVA:</h4>
            <h4>TOTAL A PAGAR:</h4>
            <Divider />
          </di>
        </div>
      </div>
    </div>
  );
}
