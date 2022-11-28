import React, { useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { map } from "lodash";
import { Table, Button } from "react-bootstrap";

export function TableReservas(props) {
  const { reservas, cerrarReserva } = props;

  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo electronico</th>
            <th>Cantidad comensales</th>

            <th>Fecha</th>
            <th>Hora</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {map(reservas, (reserva, index) => (
            <tr key={index}>
              <td>{reserva.nombre}</td>
              <td>{reserva.correo}</td>
              <td>{reserva.comensales}</td>
              <td>{reserva.fecha}</td>
              <td>{reserva.hora}</td>
              <td>
                <Button onClick={() => cerrarReserva(reserva.id)}>
                  Cerrar
                </Button>
              </td>
              {/* <Actions
                producto={producto}
                updateProducto={updateProducto}
                onDeleteProducto={onDeleteProducto}
              /> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
function Actions(props) {
  const { producto, updateProducto, onDeleteProducto } = props;
  return (
    <td>
      <Button icon onClick={() => updateProducto(producto)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => onDeleteProducto(producto)}>
        <Icon name="close" />
      </Button>
    </td>
  );
}
