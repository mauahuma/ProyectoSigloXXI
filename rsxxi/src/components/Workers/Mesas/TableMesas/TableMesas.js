import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableMesas.scss";

export function TableMesas(props) {
  const { mesas, updateMesa, onDeleteMesa } = props;
  return (
    <div>
      <Table className="table-mesas-workers ">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Numero de Mesa</Table.HeaderCell>
            <Table.HeaderCell>Estado de Mesa</Table.HeaderCell>
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
              />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

function Actions(props) {
  const { mesa, updateMesa, onDeleteMesa } = props;
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updateMesa(mesa)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => onDeleteMesa(mesa)}>
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
}
