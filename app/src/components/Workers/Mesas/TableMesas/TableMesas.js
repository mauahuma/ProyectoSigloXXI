import React, { useState } from "react";
import { Table, Button, Icon, Label } from "semantic-ui-react";
import { map } from "lodash";
import "./TableMesas.scss";
import QRCode from "qrcode.react";

import { ModalBasic } from "../../../Common";
export function TableMesas(props) {
  const { mesas, updateMesa, onDeleteMesa } = props;
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const openCloseModal = () => setShowModal((prev) => !prev);

  const showQr = (mesa) => {
    setContentModal(
      <div>
        <div style={{ textAlign: "center" }}>
          <QRCode
            value={`${window.location.origin}/client/${mesa.numero_mesa}/`}
          />
        </div>
      </div>
    );
    openCloseModal();
  };
  return (
    <div>
      <Table className="table-mesas-workers ">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Número de mesa</Table.HeaderCell>
            <Table.HeaderCell>Estado de mesa</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(mesas, (mesa, index) => (
            <Table.Row key={index}>
              <Table.Cell>{mesa.numero_mesa}</Table.Cell>
              <Table.Cell>{mesa.estado}</Table.Cell>
              <Actions
                mesa={mesa}
                updateMesa={updateMesa}
                onDeleteMesa={onDeleteMesa}
                showQr={showQr}
              />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title="Codigo QR"
        size="mini"
        children={contentModal}
      />
    </div>
  );
}

function Actions(props) {
  const { mesa, updateMesa, onDeleteMesa, showQr } = props;
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => showQr(mesa)}>
        <Icon name="qrcode" />
      </Button>
      <Button icon onClick={() => updateMesa(mesa)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => onDeleteMesa(mesa)}>
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
}
