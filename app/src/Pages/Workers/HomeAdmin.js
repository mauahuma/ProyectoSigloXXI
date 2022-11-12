import React, { useState, useEffect } from "react";
import {
  HeaderPage,
  TableMesas,
  AddEditMesasForm,
  ShowMesas,
} from "../../components/Workers";
import { useMesas } from "../../hooks";

export function HomeAdmin() {
  const { mesas, getMesasDisponibles } = useMesas();
  const [refetch, setRefetch] = useState(false);

  const onRefetch = () => setRefetch((prev) => !prev);
  useEffect(() => getMesasDisponibles(), [refetch]);
  return <ShowMesas mesas={mesas} onRefetch={onRefetch} />;
}
