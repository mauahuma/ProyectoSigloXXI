import React, { useEffect } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";

export function TableFinanzas(props) {
  const { finanzas } = props;

  return (
    <div>
      <Table className="table-bodega-workers ">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Medida</Table.HeaderCell>
            <Table.HeaderCell>Proveedor</Table.HeaderCell>

            <Table.HeaderCell>Stock actual</Table.HeaderCell>
            <Table.HeaderCell>Stock crítico</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(finanzas, (registro, index) => (
            <Table.Row key={index}>
              <Table.Cell>{registro.tipo}</Table.Cell>
              <Table.Cell>{registro.fecha}</Table.Cell>
              <Table.Cell>{registro.monto ? registro.monto : " "}</Table.Cell>
              <Table.Cell>{registro.monto}</Table.Cell>
              <Table.Cell>{registro.monto}</Table.Cell>

              {/* <Actions
                producto={producto}
                updateProducto={updateProducto}
                onDeleteProducto={onDeleteProducto}
              /> */}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
// function Actions(props) {
//   const { producto, updateProducto, onDeleteProducto } = props;
//   return (
//     <Table.Cell textAlign="right">
//       <Button icon onClick={() => updateProducto(producto)}>
//         <Icon name="pencil" />
//       </Button>
//       <Button icon negative onClick={() => onDeleteProducto(producto)}>
//         <Icon name="close" />
//       </Button>
//     </Table.Cell>
//   );
// }
