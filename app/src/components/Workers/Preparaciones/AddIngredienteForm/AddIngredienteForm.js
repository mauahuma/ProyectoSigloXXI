import React, { useState, useEffect } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import { useAuth, useIngredientes } from "../../../../hooks";
import { BASE_API } from "../../../../utils/constants";
import { ModalBasic } from "../../../Common";
import { IngredienteForm } from "./IngredienteForm";

export function AddIngredienteForm(props) {
  const { preparacion } = props;
  const { auth } = useAuth();
  const { getIngredientesByPreparacion, ingred, deleteIngrediente } =
    useIngredientes();

  const [refetch, setRefetch] = useState(false);
  const onRefetch = () => setRefetch((prev) => !prev);
  const [showModal2, setShowModal2] = useState(false);
  const [titleModal2, setTitleModal2] = useState(null);
  const [contentModal2, setContentModal2] = useState(null);
  const openCloseModal2 = () => setShowModal2((prev) => !prev);

  const addIngrediente = () => {
    setTitleModal2("Nueva Preparación");
    setContentModal2(
      <IngredienteForm
        preparacion={preparacion}
        onClose={openCloseModal2}
        onRefetch={onRefetch}
      />
    );
    openCloseModal2();
  };
  const updateIngrediente = (data, data2) => {
    setTitleModal2("Actualizar proveedor");
    setContentModal2(
      <IngredienteForm
        onRefetch={onRefetch}
        onClose={openCloseModal2}
        preparacion={data}
        producto={data2}
      />
    );
    openCloseModal2();
  };
  const onDeleteIngrediente = async (data) => {
    const result = window.confirm(`¿Eliminar proveedor ${data.nombre}`);
    if (result) {
      try {
        await deleteIngrediente(data.id);
        onRefetch();
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    // async function getOptions() {
    //   const response = await fetch(`${BASE_API}/api/productos`);
    //   const body = await response.json();
    //   setBodegaOptions(
    //     body.map(({ id, nombre }) => ({ label: nombre, value: id }))
    //   );
    // }
    // getOptions();

    getIngredientesByPreparacion(preparacion.id);
  }, [refetch]);

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Medida</Table.HeaderCell>
            <Table.HeaderCell>Cantidad</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(ingred, (ingrediente, index) => (
            <Table.Row key={index}>
              <Table.Cell hidden>{ingrediente.id}</Table.Cell>
              <Table.Cell>{ingrediente.product_data.nombre}</Table.Cell>
              <Table.Cell>{ingrediente.product_data.medida}</Table.Cell>
              <Table.Cell>{ingrediente.cantidad_ingrediente}</Table.Cell>
              <Actions
                preparacion={preparacion}
                ingrediente={ingrediente}
                updateIngrediente={updateIngrediente}
                onDeleteIngrediente={onDeleteIngrediente}
              />
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell>
              <Button positive onClick={addIngrediente}>
                Agregar
              </Button>
            </Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <ModalBasic
        show={showModal2}
        onClose={openCloseModal2}
        title={titleModal2}
        children={contentModal2}
      />
    </>
  );
}
function Actions(props) {
  const { preparacion, ingrediente, updateIngrediente, onDeleteIngrediente } =
    props;
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updateIngrediente(preparacion, ingrediente)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => onDeleteIngrediente(ingrediente)}>
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
}
