import React, { useState, useEffect } from "react";
import { Table, Button } from "semantic-ui-react";
import { map } from "lodash";
import { useAuth, useBodega } from "../../../../hooks";
import { BASE_API } from "../../../../utils/constants";
import { ModalBasic } from "../../../Common";
import { IngredienteForm } from "./IngredienteForm";

export function AddIngredienteForm(props) {
  const { preparacion } = props;
  const { auth } = useAuth();
  const [ingredientes, setIngredientes] = useState({});
  const [producto, setProducto] = useState({});

  const [refetch, setRefetch] = useState(false);
  const onRefetch = () => setRefetch((prev) => !prev);
  const { getProducto } = useBodega();
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
  useEffect(() => {
    // async function getOptions() {
    //   const response = await fetch(`${BASE_API}/api/productos`);
    //   const body = await response.json();
    //   setBodegaOptions(
    //     body.map(({ id, nombre }) => ({ label: nombre, value: id }))
    //   );
    // }
    // getOptions();

    async function getIngredientes() {
      const params = {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      };
      const url = `${BASE_API}/api/ingredientespreparacion/?Preparacion=${preparacion.id}`;
      const response = await fetch(url, params);
      const result = await response.json();

      setIngredientes(result);
    }
    getIngredientes();

    async function getProductos() {
      const params = {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      };
      const url = `${BASE_API}/api/productos/`;
      const response = await fetch(url, params);
      const result = await response.json();

      setProducto(result);
    }
    getProductos();
  }, [refetch]);

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Cantidad</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(ingredientes, (ingrediente, index) => (
            <Table.Row key={index}>
              <Table.Cell hidden>{ingrediente.id}</Table.Cell>
              <Table.Cell>{ingrediente.product_data.nombre}</Table.Cell>
              <Table.Cell>{ingrediente.cantidad_ingrediente}</Table.Cell>
              <Table.Cell></Table.Cell>
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
