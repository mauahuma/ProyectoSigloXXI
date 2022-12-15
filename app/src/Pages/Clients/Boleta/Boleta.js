import React, { useEffect, useState } from "react";
import { Badge, Image } from "react-bootstrap";
import { Divider, Grid } from "semantic-ui-react";
import "./Boleta.scss";
import { useParams } from "react-router-dom";

import { usePagos, usePedidos } from "../../../hooks";
import { map } from "lodash";

export function Boleta() {
  const { id } = useParams();
  const { getPedidosbyPago } = usePedidos();
  const { getPago } = usePagos();
  const [pedidos, setPedidos] = useState([]);
  const [pago, setPago] = useState(null);
  useEffect(() => {
    (async () => {
      const responsePago = await getPago(id);

      const response = await getPedidosbyPago(responsePago.id);
      setPedidos(response);
      setPago(responsePago);
    })();
  }, [id]);
  return (
    <div className="Boleta">
      <button onClick={() => console.log(pago.id)}></button>
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
                <h4>Monto</h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <Grid stackable columns={3} divided>
            {map(pedidos, (pedido, index) => (
              <Grid.Row key={index}>
                <Grid.Column>
                  <h5>{pedido.preparacion_Data.nombre}</h5>
                </Grid.Column>

                <Grid.Column>
                  <h5>${pedido.preparacion_Data.Valor}</h5>
                </Grid.Column>
              </Grid.Row>
            ))}
          </Grid>
          <Divider />
          <div align="center">
            <Divider horizontal>Total a pagar</Divider>
            <h4>TOTAL A PAGAR:</h4>
            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
}
