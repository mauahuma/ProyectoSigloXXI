import React from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
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
        name="nombre"
        placeholder="Nombre Preparacion"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        error={formik.errors.nombre}
      ></Form.Input>
      <Form.Input
        name="tiempo_preparacion"
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
      <Form.Input
        name="stock"
        placeholder="stock Preparacion"
        value={formik.values.stock}
        onChange={formik.handleChange}
        error={formik.errors.stock}
      ></Form.Input>

      <div className="add-edit-preparaciones-form__active">
        <Checkbox
          toggle
          checked={formik.values.activo}
          onChange={(_, data) => formik.setFieldValue("activo", data.checked)}
        />
        Activo
      </div>

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
    nombre: data?.nombre || "",
    tiempo_preparacion: data?.tiempo_preparacion || "",
    stock: data?.stock || 0,
    receta: data?.receta || "",
    activo: data?.activo ? true : true,
  };
}

function newSchema() {
  return {
    nombre: Yup.string().required(true),
    tiempo_preparacion: Yup.number().required(false),
    stock: Yup.number().required(false),
    receta: Yup.string().required(true),
    activo: Yup.bool().required(true),
  };
}
function updateSchema() {
  return {
    nombre: Yup.string().required(true),
    tiempo_preparacion: Yup.number().required(false),
    stock: Yup.number().required(false),
    receta: Yup.string().required(true),
    activo: Yup.bool().required(true),
  };
}
