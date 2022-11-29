import React from "react";
import { Form, Button } from "semantic-ui-react";
import "./AddEditMesasForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMesas } from "../../../../hooks";
import { toast } from "react-toastify";
const estados = [
  { key: "d", text: "Disponible", value: "Disponible" },
  { key: "r", text: "Reservado", value: "Reservado" },
  { key: "o", text: "Ocupado", value: "Ocupado" },
  { key: "n", text: "Deshabilitado", value: "Deshabilitado" },
];

export function AddEditMesasForm(props) {
  const { onClose, onRefetch, mesa, error } = props;
  const { addMesa, updateMesa } = useMesas();

  const formik = useFormik({
    initialValues: initialValues(mesa),
    validationSchema: Yup.object(mesa ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (mesa) {
          const response = await updateMesa(mesa.id, formValue);
          if (!response.id) {
            toast.error(response.numero_mesa);
          } else {
            onRefetch();
            onClose();
          }
        } else {
          const response = await addMesa(formValue);
          if (!response.id) {
            toast.error(response.numero_mesa);
          } else {
            onRefetch();
            onClose();
          }
        }
      } catch (e) {
        console.log(e);
      }
    },
  });
  return (
    <Form className="add-edit-mesas-form" onSubmit={formik.handleSubmit}>
      <label>Número de mesa:</label>
      <Form.Input
        name="numero_mesa"
        placeholder="Numero de Mesa"
        value={formik.values.numero_mesa}
        onChange={formik.handleChange}
        error={formik.errors.numero_mesa}
      ></Form.Input>
      <label>Estado de mesa:</label>
      <Form.Select
        selection
        placeholder="Estado"
        options={estados}
        value={formik.values.estado}
        error={formik.errors.estado}
        onChange={(_, data) => formik.setFieldValue("estado", data.value)}
      ></Form.Select>

      <Button
        type="submit"
        primary
        fluid
        content={mesa ? "Actualizar" : "Crear"}
      />
    </Form>
  );
}

function initialValues(data) {
  return {
    numero_mesa: data?.numero_mesa || "",
    estado: data?.estado || "",
  };
}

function newSchema() {
  return {
    numero_mesa: Yup.number()
      .positive("Numero debe de ser positivo")
      .integer("Numero debe de ser entero")
      .required(true),
    estado: Yup.string().required(true),
  };
}
function updateSchema() {
  return {
    numero_mesa: Yup.number().required(true),
    estado: Yup.string().required(true),
  };
}
