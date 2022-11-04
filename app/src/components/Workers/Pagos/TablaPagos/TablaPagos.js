import React, { useState } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import moment from "moment";
import { ModalBasic } from "../../../Common";
import { ListaProductosPago } from "../../../Workers";
import "./TablaPagos.scss";

export function TablaPagos(props) {
  const { pagos } = props;
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);

  const getIconPaymentName = (key) => {
    if (key === "TARJETA") return "credit card outline";
    if (key === "EFECTIVO") return "money bill alternate outline";
    return null;
  };

  const openCloseModal = () => setShowModal((prev) => !prev);

  const showDetails = (pagos) => {
    setTitleModal(`Pedidos de la mesa ${pagos.mesa_data.numero_mesa}`);
    setContentModal(<ListaProductosPago pagos={pagos} />);
    openCloseModal();
  };

  return (
    <>
      <Table celled className="table-payments-admin">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Mesa</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Tipo de pago</Table.HeaderCell>
            <Table.HeaderCell>Fecha</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {map(pagos, (pago, index) => (
            <Table.Row key={index}>
              <Table.Cell>{pago.id}</Table.Cell>
              <Table.Cell>{pago.mesa_data.numero_mesa}</Table.Cell>
              <Table.Cell>${pago.total_Pago}</Table.Cell>
              <Table.Cell>
                <Icon name={getIconPaymentName(pago.tipoPago)} />
              </Table.Cell>
              <Table.Cell>
                {moment(pago.created_at).format("DD/MM/YYYY - HH:MM")}
              </Table.Cell>
              <Table.Cell textAlign="right">
                <Button icon onClick={() => showDetails(pago)}>
                  <Icon name="eye" />
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
