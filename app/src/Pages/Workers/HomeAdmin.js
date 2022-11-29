import React, { useState, useEffect } from "react";
import {
  HeaderPage,
  TableMesas,
  AddEditMesasForm,
  ShowMesas,
} from "../../components/Workers";
import { map } from "lodash";
import { ModalBasic } from "../../components/Common";
import { useMesas, useReservas } from "../../hooks";
import { Table, Button } from "react-bootstrap";
export function HomeAdmin() {
  const { mesas, getMesasDisponibles } = useMesas();
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  var fecha = new Date().toISOString().split("T")[0];
  const { loading, getReservas, reservas, updateStatusReserva } = useReservas();

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);
  useEffect(() => getReservas(fecha, "ordering=+fecha,+hora"), [refetch]);

  const cerrarReserva = async (id) => {
    try {
      await updateStatusReserva(id);
      onRefetch();
    } catch (error) {
      console.log(error);
    }
  };
  const showReservas = () => {
    setTitleModal("Reservas del día");
    setContentModal(
      <Table>
        <thead>
          <tr>
            <th>Hora</th>
            <th>Nombre</th>
            <th>Comensales</th>
          </tr>
        </thead>
        <tbody>
          {map(reservas, (reserva, index) => (
            <tr key={index}>
              <td>{reserva.hora}</td>
              <td>{reserva.nombre}</td>
              <td>{reserva.comensales}</td>
              <td>
                <Button onClick={() => cerrarReserva(reserva.id)}>
                  Cerrar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
    openCloseModal();
  };
  useEffect(() => getMesasDisponibles(), [refetch]);

  return (
    <>
      <HeaderPage
        title="Disponibilidad de mesas"
        btnTitle="Reservas"
        btnClick={showReservas}
      />
      <ShowMesas mesas={mesas} onRefetch={onRefetch} />
      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
