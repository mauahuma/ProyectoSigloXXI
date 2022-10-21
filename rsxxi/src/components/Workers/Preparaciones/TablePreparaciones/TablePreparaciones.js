import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TablePreparaciones.scss";

export function TablePreparaciones(props) {
  const {
    preparaciones,
    updatePreparacion,
    onDeletePreparaciones,
    addIngredient,
  } = props;
  return (
    <div>
      <Table className="table-preparaciones-workers ">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Tiempo de Preparación</Table.HeaderCell>
            <Table.HeaderCell>Receta</Table.HeaderCell>
            <Table.HeaderCell>Stock</Table.HeaderCell>
            <Table.HeaderCell>Valor</Table.HeaderCell>

            <Table.HeaderCell>Ingredientes </Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(preparaciones, (preparacion, index) => (
            <Table.Row key={index}>
              <Table.Cell>{preparacion.nombre}</Table.Cell>
              <Table.Cell>{preparacion.tiempo_preparacion} Minutos</Table.Cell>
              <Table.Cell>{preparacion.receta}</Table.Cell>
              <Table.Cell>{preparacion.stock}</Table.Cell>
              <Table.Cell>{preparacion.Valor}</Table.Cell>
              <Table.Cell>
                <Button icon onClick={() => addIngredient(preparacion)}>
                  <Icon name="plus square outline" />
                </Button>
              </Table.Cell>
              <Actions
                preparacion={preparacion}
                updatePreparacion={updatePreparacion}
                onDeletePreparaciones={onDeletePreparaciones}
              />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

function Actions(props) {
  const { preparacion, updatePreparacion, onDeletePreparaciones } = props;
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updatePreparacion(preparacion)}>
        <Icon name="pencil" />
      </Button>

      <Button icon negative onClick={() => onDeletePreparaciones(preparacion)}>
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
}
