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
        name="tiempo"
        placeholder="Tiempo Preparacion"
        value={formik.values.tiempo}
        onChange={formik.handleChange}
        error={formik.errors.tiempo}
      ></Form.Input>
      <Form.Input
        name="receta"
        placeholder="Receta"
        value={formik.values.receta}
        onChange={formik.handleChange}
        error={formik.errors.receta}
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
    tiempo: data?.tiempo || "",
    receta: data?.receta || "",
  };
}

function newSchema() {
  return {
    id_preparacion: Yup.number().required(true),
    tiempo: Yup.number().required(true),
    receta: Yup.string().required(true),
  };
}
function updateSchema() {
  return {
    id_preparacion: Yup.number().required(true),
    tiempo: Yup.number().required(true),
    receta: Yup.string().required(true),
  };
}
