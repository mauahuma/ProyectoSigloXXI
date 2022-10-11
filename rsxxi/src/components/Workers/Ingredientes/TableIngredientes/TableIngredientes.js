import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableIngredientes.scss";

export function TableIngredientes(props) {
  const { ingredientes, updateIngrediente, onDeleteIngrediente } = props;
  return (
    <div>
      <Table className="table-ingredientes-workers ">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID Ingrediente</Table.HeaderCell>
            <Table.HeaderCell>Nombre Ingrediente</Table.HeaderCell>
            <Table.HeaderCell>Descripción Ingrediente</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(ingredientes, (ingrediente, index) => (
            <Table.Row key={index}>
              <Table.Cell>{ingredientes.id_ingrediente}</Table.Cell>
              <Table.Cell>{ingredientes.nombre}</Table.Cell>
              <Table.Cell>{ingredientes.descripcion}</Table.Cell>
              <Actions
                mesa={ingrediente}
                updateIngrediente={updateIngrediente}
                onDeleteIngrediente={onDeleteIngrediente}
              />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

function Actions(props) {
  const { ingrediente, updateIngrediente, onDeleteIngrediente } = props;
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updateIngrediente(ingrediente)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => onDeleteIngrediente(ingrediente)}>
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
}
