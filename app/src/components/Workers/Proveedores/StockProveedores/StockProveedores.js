import React, { useEffect, useState } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map, filter } from "lodash";
import { useBodega, usePedidoProveedor } from "../../../../hooks";
import { size } from "lodash";

export function StockProveedores(props) {
  const { proveedor, updateProveedores, onDeleteProveedores, checkStock } =
    props;
  const { productos, getProductosByProveedor } = useBodega();
  const { pedidos, getPedidosPorProveedor, addPedidoProveedor } =
    usePedidoProveedor();

  useEffect(() => getProductosByProveedor(proveedor.id), []);
  useEffect(() => getPedidosPorProveedor(proveedor.id), []);
  const addPedido = () => {
    console.log(productos);
    for (const producto in productos) {
      console.log(productos[producto].id);
    }
  };
  return (
    <div>
      {size(pedidos) > 0 ? (
        <>
          <Table>
            <Table.Header>
              <Table.Row>Producto</Table.Row>
              <Table.Row>Cantidad Solicitada</Table.Row>
              <Table.Row>Cantidad Recibida</Table.Row>
              <Table.Row>Valor Solicitado</Table.Row>
              <Table.Row>Valor Real</Table.Row>
            </Table.Header>
            <Table.Body>
              {map(pedidos, (pedido, index) => (
                <Table.Row>
                  <Table.Cell>{pedido.producto_Data.nombre}</Table.Cell>
                  <Table.Cell>{pedido.cantidadSolicitada}</Table.Cell>
                  <Table.Cell>{pedido.cantidadRecibida}</Table.Cell>
                  <Table.Cell>{pedido.valorSolicitado}</Table.Cell>
                  <Table.Cell>{pedido.valorRecibido}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </>
      ) : (
        <>
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
          <Button onClick={() => addPedido()}>Solicitar stock</Button>
        </>
      )}
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
