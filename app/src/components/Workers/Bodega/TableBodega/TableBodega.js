import React, { useEffect } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";

import "./TableBodega.scss";

export function TableBodega(props) {
  const { productos, updateProducto, onDeleteProducto } = props;

  return (
    <div>
      <Table className="table-bodega-workers ">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Medida</Table.HeaderCell>
            <Table.HeaderCell>Proveedor</Table.HeaderCell>

            <Table.HeaderCell>Stock actual</Table.HeaderCell>
            <Table.HeaderCell>Stock crítico</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(productos, (producto, index) => (
            <Table.Row key={index}>
              <Table.Cell>{producto.nombre}</Table.Cell>
              <Table.Cell>{producto.medida}</Table.Cell>
              <Table.Cell>
                {producto.Proveedor_data ? producto.Proveedor_data.nombre : " "}
              </Table.Cell>
              <Table.Cell>{producto.stock_actual}</Table.Cell>
              <Table.Cell>{producto.stock_critico}</Table.Cell>

              <Actions
                producto={producto}
                updateProducto={updateProducto}
                onDeleteProducto={onDeleteProducto}
              />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
function Actions(props) {
  const { producto, updateProducto, onDeleteProducto } = props;
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updateProducto(producto)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => onDeleteProducto(producto)}>
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
}
