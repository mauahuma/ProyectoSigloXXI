import React, { useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { map } from "lodash";
import { Table, Button } from "react-bootstrap";

import "./TableBodega.scss";

export function TableBodega(props) {
  const { productos, updateProducto, onDeleteProducto } = props;

  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Medida</th>
            <th>Proveedor</th>

            <th>Stock actual</th>
            <th>Stock crítico</th>
            <th>Valor</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {map(productos, (producto, index) => (
            <tr key={index}>
              <td>{producto.nombre}</td>
              <td>{producto.medida}</td>
              <td>
                {producto.Proveedor_data ? producto.Proveedor_data.nombre : " "}
              </td>
              <td>{producto.stock_actual}</td>
              <td>{producto.stock_critico}</td>
              <td>${producto.valor}</td>

              <Actions
                producto={producto}
                updateProducto={updateProducto}
                onDeleteProducto={onDeleteProducto}
              />
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
