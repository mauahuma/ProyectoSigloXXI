import React from "react";
import { Form, Button } from "semantic-ui-react";
import "./AddEditIngredientesForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useIngredientes } from "../../../../hooks";

export function AddEditIngredientesForm(props) {
  const { onClose, onRefetch, ingrediente } = props;
  const { addIngrediente, updateIngrediente } = useIngredientes();

  const formik = useFormik({
    initialValues: initialValues(ingrediente),
    validationSchema: Yup.object(ingrediente ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (ingrediente) await updateIngrediente(ingrediente.id, formValue);
        else await addIngrediente(formValue);

        onRefetch();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form className="add-edit-ingredientes-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="id_ingrediente"
        placeholder="ID Ingrediente"
        value={formik.values.id_ingrediente}
        onChange={formik.handleChange}
        error={formik.errors.id_ingrediente}
      ></Form.Input>
      <Form.Input
        name="nombre"
        placeholder="Nombre Ingrediente"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        error={formik.errors.nombre}
      ></Form.Input>
      <Form.Input
        name="descripcion"
        placeholder="Descripción Ingrediente"
        value={formik.values.descripcion}
        onChange={formik.handleChange}
        error={formik.errors.descripcion}
      ></Form.Input>

      <Button
        type="submit"
        primary
        fluid
        content={ingrediente ? "Actualizar" : "Crear"}
      />
    </Form>
  );
}

function initialValues(data) {
  return {
    id_ingrediente: data?.id_ingrediente || "",
    nombre: data?.nombre || "",
    descripcion: data?.descripcion || "",
  };
}

function newSchema() {
  return {
    id_ingrediente: Yup.number().required(true),
    nombre: Yup.string().required(true),
    descripcion: Yup.string().required(true),
  };
}
function updateSchema() {
  return {
    id_ingrediente: Yup.number().required(true),
    nombre: Yup.string().required(true),
    descripcion: Yup.string().required(true),
  };
}
