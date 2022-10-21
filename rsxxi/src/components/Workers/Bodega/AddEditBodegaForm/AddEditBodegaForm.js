import React from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import "./AddEditBodegaForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useBodega } from "../../../../hooks";

export function AddEditBodegaForm(props) {
  const { onClose, onRefetch, producto } = props;
  const { addProducto, updateProducto } = useBodega();

  const formik = useFormik({
    initialValues: initialValues(producto),
    validationSchema: Yup.object(producto ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (producto) await updateProducto(producto.id, formValue);
        else await addProducto(formValue);

        onRefetch();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form className="add-edit-bodega-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="nombre"
        placeholder="Nombre Producto"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        error={formik.errors.nombre}
      ></Form.Input>
      <Form.Input
        name="stock_actual"
        placeholder="stock actual"
        value={formik.values.stock_actual}
        onChange={formik.handleChange}
        error={formik.errors.stock_actual}
      ></Form.Input>

      <Form.Input
        name="stock_critico"
        placeholder="stock critico"
        value={formik.values.stock_critico}
        onChange={formik.handleChange}
        error={formik.errors.stock_critico}
      ></Form.Input>

      <Button
        type="submit"
        primary
        fluid
        content={producto ? "Actualizar" : "Crear"}
      />
    </Form>
  );
}

function initialValues(data) {
  return {
    nombre: data?.nombre || "",
    stock_actual: data?.stock_actual || "",
    stock_critico: data?.stock_critico || "",
  };
}

function newSchema() {
  return {
    nombre: Yup.string().required(true),
    stock_actual: Yup.number().required(true),
    stock_critico: Yup.number().required(true),
  };
}
function updateSchema() {
  return {
    nombre: Yup.string().required(true),
    stock_actual: Yup.number().required(true),
    stock_critico: Yup.number().required(true),
  };
}
