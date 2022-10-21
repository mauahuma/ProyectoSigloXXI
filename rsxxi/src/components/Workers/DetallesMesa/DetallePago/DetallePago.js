import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { usePagos, usePedidos } from "../../../../hooks";
import "./DetallePago.scss";

export function DetallePago(props) {
  const { pago, pedidos, openCloseModal, onReloadPedidos } = props;
  const { cerrarPagos } = usePagos();
  const { cerrarPedido } = usePedidos();

  const getIconPayment = (key) => {
    if (key === "TARJETA") return "credit card outline";
    if (key === "EFECTIVO") return "money bill alternate outline";
    return null;
  };

  const onCloseTable = async () => {
    const result = window.confirm("¿Cerrar mesa para nuevos clientes?");
    if (result) {
      await cerrarPagos(pago.id);

      for await (const pedido of pedidos) {
        await cerrarPedido(pedido.id);
      }

      onReloadPedidos();
      openCloseModal();
    }
  };

  return (
    <div className="payment-detail">
      <Table striped>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Mesa:</Table.Cell>
            <Table.Cell>{pago.mesa_data.numero_mesa}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Total:</Table.Cell>
            <Table.Cell>${pago.total_Pago}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Forma de pago:</Table.Cell>
            <Table.Cell>
              <Icon name={getIconPayment(pago.tipoPago)} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Button primary fluid onClick={onCloseTable}>
        Marcar como pagado y cerrar mesa
      </Button>
    </div>
  );
}
