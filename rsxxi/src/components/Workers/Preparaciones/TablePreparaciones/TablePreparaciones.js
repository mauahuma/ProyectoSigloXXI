import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TablePreparaciones.scss";

export function TablePreparaciones(props) {
  const { preparaciones, updatePreparacion, onDeletePreparacion } = props;
  return (
    <div>
      <Table className="table-preparaciones-workers ">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID Preparacion</Table.HeaderCell>
            <Table.HeaderCell>Tiempo de Preparación</Table.HeaderCell>
            <Table.HeaderCell>Receta</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(preparaciones, (preparacion, index) => (
            <Table.Row key={index}>
              <Table.Cell>{preparacion.id_preparacion}</Table.Cell>
              <Table.Cell>{preparacion.tiempo}</Table.Cell>
              <Table.Cell>{preparacion.receta}</Table.Cell>
              <Actions
                preparacion={preparacion}
                updatePreparacion={updatePreparacion}
                onDeletePreparacion={onDeletePreparacion}
              />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

function Actions(props) {
  const { preparacion, updatePreparacion, onDeletePreparacion } = props;
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updatePreparacion(preparacion)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => onDeletePreparacion(preparacion)}>
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
}
