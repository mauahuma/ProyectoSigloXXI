import React, { useState, useEffect } from "react";
import { useAuth, useIngredientes } from "../../hooks";
import { Loader } from "semantic-ui-react";
import {
  HeaderPage,
  TableIngredientes,
  AddEditIngredientesForm,
  ShowIngredientes,
} from "../../components/Workers";
import { ModalBasic } from "../../components/Common";

export function IngredientesWorker() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { loading, ingredientes, getIngredientes, deleteIngrediente } =
    useIngredientes();
  const { auth } = useAuth();
  useEffect(() => getIngredientes(), [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addIngrediente = () => {
    setTitleModal("Nuevo ingrediente");
    setContentModal(
      <AddEditIngredientesForm onClose={openCloseModal} onRefetch={onRefetch} />
    );
    openCloseModal();
  };

  const updateIngrediente = (data) => {
    setTitleModal("Actualizar ingrediente");
    setContentModal(
      <AddEditIngredientesForm
        onRefetch={onRefetch}
        onClose={openCloseModal}
        ingredientes={data}
      />
    );
    openCloseModal();
  };

  const onDeleteIngredientes = async (data) => {
    const result = window.confirm(
      `¿Eliminar ingrediente ${data.id_ingrediente}`
    );
    if (result) {
      try {
        await deleteIngrediente(data.id);
        onRefetch();
      } catch (error) {
        console.error(error);
      }
    }
  };

  switch (auth.me.cargo) {
    case "Administrador":
      return (
        <>
          <HeaderPage
            title="Ingredientes"
            btnTitle="Nuevo ingrediente"
            btnClick={addIngrediente}
          />
          {loading ? (
            <Loader active inline="centered">
              Cargando...
            </Loader>
          ) : (
            <TableIngredientes
              ingredientes={ingredientes}
              updateIngrediente={updateIngrediente}
              onDeleteIngredientes={onDeleteIngredientes}
            />
          )}

          <ModalBasic
            show={showModal}
            onClose={openCloseModal}
            title={titleModal}
            children={contentModal}
          />
        </>
      );

    default:
      return <ShowIngredientes ingredientes={ingredientes} />;
  }
}
