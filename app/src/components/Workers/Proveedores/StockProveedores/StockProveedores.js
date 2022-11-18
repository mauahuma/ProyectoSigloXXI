import React, { useEffect, useState } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map, filter } from "lodash";
import { useBodega } from "../../../../hooks";
export function StockProveedores(props) {
  const { proveedor, updateProveedores, onDeleteProveedores, checkStock } =
    props;
  const { productos, getProductosByProveedor } = useBodega();
  useEffect(() => getProductosByProveedor(proveedor.id), []);

  return (
    <div>
      <Table className="table-proveedores-workers ">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Medida</Table.HeaderCell>
            <Table.HeaderCell>Stock Actual</Table.HeaderCell>
            <Table.HeaderCell>Stock Critico</Table.HeaderCell>

            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(productos, (producto, index) => (
            <Table.Row key={index}>
              <Table.Cell>{producto.nombre}</Table.Cell>
              <Table.Cell>{producto.medida}</Table.Cell>
              <Table.Cell>{producto.stock_actual}</Table.Cell>
              <Table.Cell>{producto.stock_critico}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button>Solicitar stock</Button>
    </div>
  );
}
function Actions(props) {
  const { proveedores, updateProveedores, onDeleteProveedores } = props;
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updateProveedores(proveedores)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => onDeleteProveedores(proveedores)}>
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
}
