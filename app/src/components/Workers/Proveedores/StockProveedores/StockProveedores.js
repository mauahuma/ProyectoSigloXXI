import React, { useEffect, useState } from "react";
import { Table, Button, Icon, Loader, Form } from "semantic-ui-react";
import { map, filter } from "lodash";
import { useBodega, usePedidoProveedor } from "../../../../hooks";
import { size } from "lodash";
import { ModalBasic } from "../../../Common";
import { FormPedido } from "./";
export function StockProveedores(props) {
  const { proveedor, onRefetch, refetch, loading, onClose } = props;
  const { productos, getProductosByProveedor } = useBodega();
  const { pedidos, getPedidosPorProveedor, addPedidoProveedor } =
    usePedidoProveedor();
  const [showModal2, setShowModal2] = useState(false);
  const [titleModal2, setTitleModal2] = useState(null);
  const [contentModal2, setContentModal2] = useState(null);
  const [refetch2, setRefetch2] = useState(false);
  const onRefetch2 = () => setRefetch2((prev) => !prev);

  const openCloseModal2 = () => setShowModal2((prev) => !prev);
  useEffect(() => getProductosByProveedor(proveedor.id), [refetch2]);
  useEffect(() => getPedidosPorProveedor(proveedor.id), [refetch2]);
  const addPedido = () => {
    console.log(productos);
    for (const producto in productos) {
      addPedidoProveedor(
        productos[producto].id,
        proveedor.id,
        productos[producto].stock_critico,
        productos[producto].valor
      );
    }
    onRefetch();
    onClose();
  };
  const validarPedido = (pedido) => {
    setTitleModal2("Confirmar pedido");
    setContentModal2(
      <FormPedido
        pedido={pedido}
        onRefetch={onRefetch2}
        onClose={openCloseModal2}
      />
    );
    openCloseModal2();
  };
  return (
    <>
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <div>
          {size(pedidos) > 0 ? (
            <>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Producto</Table.HeaderCell>
                    <Table.HeaderCell>Cantidad Solicitada</Table.HeaderCell>
                    <Table.HeaderCell>Cantidad Recibida</Table.HeaderCell>
                    <Table.HeaderCell>Valor Solicitado</Table.HeaderCell>
                    <Table.HeaderCell>Valor Real</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {map(pedidos, (pedido, index) => (
                    <Table.Row key={index}>
                      <Table.Cell>{pedido.producto_Data.nombre}</Table.Cell>
                      <Table.Cell>{pedido.cantidadSolicitada}</Table.Cell>
                      <Table.Cell>{pedido.cantidadRecibida}</Table.Cell>
                      <Table.Cell>{pedido.valorSolicitado}</Table.Cell>
                      <Table.Cell>{pedido.valorRecibido}</Table.Cell>
                      <Table.Cell>
                        <Button icon onClick={() => validarPedido(pedido)}>
                          <Icon name="pencil" />
                        </Button>
                      </Table.Cell>
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
                    <Table.HeaderCell>Stock Crítico</Table.HeaderCell>

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
      )}
      <ModalBasic
        show={showModal2}
        onClose={openCloseModal2}
        title={titleModal2}
        children={contentModal2}
      />
    </>
  );
}
