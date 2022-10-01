import React, { useState, useEffect } from "react";
import { useUser } from "../../hooks";
import { Loader } from "semantic-ui-react";
import {
  HeaderPage,
  TableUsers,
  AddEditUserForm,
} from "../../components/Workers";
import { ModalBasic } from "../../components/Common";
export function UsersWorker() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const { loading, users, getUsers } = useUser();
  const [refetch, setRefetch] = useState(false);

  useEffect(() => getUsers(), []);

  const openCloseModal = () => setShowModal((prev) => !prev);

  const addUser = () => {
    setTitleModal("Nuevo Usuario");
    setContentModal(<AddEditUserForm />);
    openCloseModal();
  };
  return (
    <>
      <HeaderPage
        title="Usuarios"
        btnTitle="Nuevo Usuario"
        btnClick={addUser}
      />
      {loading ? (
        <Loader active inline="centered">
          cargando
        </Loader>
      ) : (
        <TableUsers users={users} />
      )}

      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
