import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableProveedores.scss";

export function TableProveedores(props) {
  const { Proveedores, updateProveedores, onDeleteProveedores, checkStock } =
    props;
  return (
    <div>
      <Table className="table-proveedores-workers ">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Número de contacto</Table.HeaderCell>
            <Table.HeaderCell>Correo electrónico</Table.HeaderCell>
            <Table.HeaderCell>Empresa</Table.HeaderCell>
            <Table.HeaderCell>Dirección</Table.HeaderCell>
            <Table.HeaderCell>Stock</Table.HeaderCell>

            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(Proveedores, (proveedores, index) => (
            <Table.Row key={index}>
              <Table.Cell>{proveedores.nombre}</Table.Cell>
              <Table.Cell>{proveedores.numero_Contacto}</Table.Cell>
              <Table.Cell>{proveedores.email}</Table.Cell>
              <Table.Cell>{proveedores.Empresa}</Table.Cell>
              <Table.Cell>{proveedores.direccion}</Table.Cell>
              <Table.Cell>
                <Button icon onClick={() => checkStock(proveedores)}>
                  <Icon name="pencil" />
                </Button>
              </Table.Cell>

              <Actions
                proveedores={proveedores}
                updateProveedores={updateProveedores}
                onDeleteProveedores={onDeleteProveedores}
              />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
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
