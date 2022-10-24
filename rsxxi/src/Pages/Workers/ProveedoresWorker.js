import React, { useState, useEffect } from "react";
import { useProveedores, useAuth } from "../../hooks";
import { Loader } from "semantic-ui-react";
import {
  HeaderPage,
  TableProveedores,
  AddEditProveedoresForm,
} from "../../components/Workers";
import { ModalBasic } from "../../components/Common";

export function ProveedoresWorker() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { loading, proveedores, getProveedores, deleteProveedores } =
    useProveedores();
  const { auth } = useAuth();

  useEffect(() => getProveedores(), [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addProveedores = () => {
    setTitleModal("Nuevo proveedor");
    setContentModal(
      <AddEditProveedoresForm onClose={openCloseModal} onRefetch={onRefetch} />
    );
    openCloseModal();
  };

  const updateProveedores = (data) => {
    setTitleModal("Actualizar proveedor");
    setContentModal(
      <AddEditProveedoresForm
        onRefetch={onRefetch}
        onClose={openCloseModal}
        proveedor={data}
      />
    );
    openCloseModal();
  };

  const onDeleteProveedores = async (data) => {
    const result = window.confirm(`¿Eliminar proveedor ${data.email}`);
    if (result) {
      try {
        await deleteProveedores(data.id);
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
            title="Proveedores"
            btnTitle="Nuevo proveedor"
            btnClick={addProveedores}
          />
          {loading ? (
            <Loader active inline="centered">
              Cargando...
            </Loader>
          ) : (
            <TableProveedores
              Proveedores={proveedores}
              updateProveedores={updateProveedores}
              onDeleteProveedores={onDeleteProveedores}
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
      return <h1>Error 404</h1>;
  }
}
