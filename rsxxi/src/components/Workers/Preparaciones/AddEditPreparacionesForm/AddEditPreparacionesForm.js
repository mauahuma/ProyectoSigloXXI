import React from "react";
import { Form, Button } from "semantic-ui-react";
import "./AddEditPreparacionesForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePreparaciones } from "../../../../hooks";

export function AddEditPreparacionesForm(props) {
  const { onClose, onRefetch, preparacion } = props;
  const { addPreparacion, updatePreparacion } = usePreparaciones();

  const formik = useFormik({
    initialValues: initialValues(preparacion),
    validationSchema: Yup.object(preparacion ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (preparacion) await updatePreparacion(preparacion.id, formValue);
        else await addPreparacion(formValue);

        onRefetch();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form
      className="add-edit-preparaciones-form"
      onSubmit={formik.handleSubmit}
    >
      <Form.Input
        name="id_preparacion"
        placeholder="ID Preparacion"
        value={formik.values.id_preparacion}
        onChange={formik.handleChange}
        error={formik.errors.id_preparacion}
      ></Form.Input>
      <Form.Input
        name="nombre"
        placeholder="Nombre Preparación"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        error={formik.errors.nombre}
      ></Form.Input>
      <Form.Input
        name="id_ingrediente"
        placeholder="Ingredientes"
        value={formik.values.id_ingrediente}
        onChange={formik.handleChange}
        error={formik.errors.id_ingrediente}
      ></Form.Input>
      <Form.Input
        name="cantidad"
        placeholder="Cantidad"
        value={formik.values.cantidad}
        onChange={formik.handleChange}
        error={formik.errors.cantidad}
      ></Form.Input>
      <Form.Input
        name="procedimiento"
        placeholder="Procedimiento"
        value={formik.values.procedimiento}
        onChange={formik.handleChange}
        error={formik.errors.procedimiento}
      ></Form.Input>
      <Form.Input
        name="tiempo"
        placeholder="Tiempo Preparacion"
        value={formik.values.tiempo}
        onChange={formik.handleChange}
        error={formik.errors.tiempo}
      ></Form.Input>

      <Button
        type="submit"
        primary
        fluid
        content={preparacion ? "Actualizar" : "Crear"}
      />
    </Form>
  );
}

function initialValues(data) {
  return {
    id_preparacion: data?.id_preparacion || "",
    nombre: data?.nombre || "",
    id_ingrediente: data?.id_ingrediente || "",
    cantidad: data?.cantidad || "",
    procedimiento: data?.procedimiento || "",
    tiempo: data?.tiempo || "",
  };
}

function newSchema() {
  return {
    id_preparacion: Yup.number().required(true),
    nombre: Yup.string().required(true),
    id_ingrediente: Yup.number().required(true),
    cantidad: Yup.number().required(true),
    procedimiento: Yup.string().required(true),
    tiempo: Yup.number().required(true),
  };
}
function updateSchema() {
  return {
    id_preparacion: Yup.number().required(true),
    nombre: Yup.string().required(true),
    id_ingrediente: Yup.number().required(true),
    cantidad: Yup.number().required(true),
    procedimiento: Yup.string().required(true),
    tiempo: Yup.number().required(true),
  };
}
