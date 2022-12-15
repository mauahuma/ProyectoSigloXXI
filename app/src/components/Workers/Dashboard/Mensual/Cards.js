import React, { useState, useEffect } from "react";
import { Statistic, Grid, Segment, Button } from "semantic-ui-react";
import axios from "axios";

export function Cards() {
  const groupby = require("group-by-with-sum");
  const [total_pago, setTotal_pago] = useState([]);
  const [totalIngresos, setTotalIngresos] = useState([]);
  const [totalEgresos, setTotalEgresos] = useState([]);

  const peticionApi3 = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/finanzas/?tipo=INGRESO")
      .then((Response) => {
        var respuesta = Response.data;
        var auxTotal_pago = 0;
        respuesta.map((elemento) => {
          auxTotal_pago = auxTotal_pago + elemento.monto;
        });

        setTotalIngresos(auxTotal_pago);
      });
  };
  const peticionApi2 = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/pagos/?estadoPago=PAGADO")
      .then((Response) => {
        var respuesta = Response.data;
        var auxTotal_pago = 0;
        respuesta.map((elemento) => {
          auxTotal_pago = auxTotal_pago + elemento.total_Pago;
        });

        setTotal_pago(auxTotal_pago);
      });
  };
  const peticionApi4 = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/finanzas/?tipo=EGRESO")
      .then((Response) => {
        var respuesta = Response.data;
        var auxTotal_pago = 0;
        respuesta.map((elemento) => {
          auxTotal_pago = auxTotal_pago + elemento.monto;
        });

        setTotalEgresos(auxTotal_pago);
      });
  };
  useEffect(() => {
    peticionApi2();
    peticionApi3();
    peticionApi4();
  }, []);

  return (
    <Grid columns={3} divided textAlign="center">
      <Grid.Row>
        <Grid.Column>
          <Segment inverted color="blue">
            <Statistic inverted>
              <Statistic.Value>${totalIngresos}</Statistic.Value>
              <Statistic.Label>Ingresos</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment inverted color="blue">
            <Statistic inverted>
              <Statistic.Value>${totalEgresos}</Statistic.Value>
              <Statistic.Label>Total Egresos</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment inverted color="blue">
            <Statistic inverted>
              <Statistic.Value>${totalIngresos - totalEgresos}</Statistic.Value>
              <Statistic.Label>Balance</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
