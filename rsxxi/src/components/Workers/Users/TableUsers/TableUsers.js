import React from "react";
import { Table, Button, Icon, Tab } from "semantic-ui-react";
import { map } from "lodash";
import "./TableUsers.scss";

export function TableUsers(props) {
  const { users } = props;
  return (
    <div>
      <Table className="table-users-workers ">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>email</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Apellido</Table.HeaderCell>
            <Table.HeaderCell>Activo</Table.HeaderCell>
            <Table.HeaderCell>Cargo</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(users, (user, index) => (
            <Table.Row key={index}>
              <Table.Cell>{user.username}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.first_name}</Table.Cell>
              <Table.Cell>{user.last_name}</Table.Cell>
              <Table.Cell className="status">
                {user.is_active ? <Icon name="check" /> : <Icon name="close" />}
              </Table.Cell>
              <Table.Cell>{user.cargo}</Table.Cell>
              <Actions user={user} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

function Actions(props) {
  const { user } = props;
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => console.log(`Editar usuario ${user.email}`)}>
        <Icon name="pencil" />
      </Button>
      <Button
        icon
        negative
        onClick={() => console.log(`Eliminar usuario ${user.email}`)}
      >
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
}