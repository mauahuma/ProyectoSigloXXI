import React, { useEffect, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { BASE_API } from "../../../../utils/constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useIngredientes } from "../../../../hooks";

export function IngredienteForm(props) {
  const { preparacion, producto, onClose, onRefetch } = props;

  const { addIngrediente, updateIngrediente } = useIngredientes();
  const [bodegaOptions, setBodegaOptions] = useState([]);
  useEffect(() => {
    async function getOptions() {
      const response = await fetch(`${BASE_API}/api/productos`);
      const body = await response.json();
      setBodegaOptions(
        body.map(({ id, nombre }) => ({
          value: id,
          text: nombre,
        }))
      );
    }
    getOptions();
  }, []);

  const formik = useFormik({
    initialValues: initialValues(producto, preparacion),
    validationSchema: Yup.object(producto ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (producto) await updateIngrediente(producto.id, formValue);
        else await addIngrediente(formValue);

        onRefetch();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        disabled
        name="Preparacion"
        value={formik.values.Preparacion}
        onChange={formik.handleChange}
        error={formik.errors.first_name}
      ></Form.Input>
      <Form.Select
        selection
        placeholder="Seleccione Ingrediente"
        options={bodegaOptions}
        value={formik.values.ingrediente}
        error={formik.errors.ingrediente}
        onChange={(_, data) => formik.setFieldValue("ingrediente", data.value)}
      ></Form.Select>
      <Form.Input
        name="cantidad_ingrediente"
        value={formik.values.cantidad_ingrediente}
        onChange={formik.handleChange}
        error={formik.errors.cantidad_ingrediente}
        placeholder="Cantidad"
      ></Form.Input>
      <Button
        type="submit"
        primary
        fluid
        content={producto ? "Actualizar" : "Agregar"}
      />
    </Form>
  );
}
function initialValues(data, preparacion) {
  return {
    Preparacion: preparacion?.id,
    ingrediente: data?.ingrediente || "",
    cantidad_ingrediente: data?.cantidad_ingrediente || "",
  };
}
function newSchema() {
  return {
    Preparacion: Yup.string().required(true),
    ingrediente: Yup.string().required(true),
    cantidad_ingrediente: Yup.number(),
  };
}
function updateSchema() {
  return {
    Preparacion: Yup.string().required(true),
    ingrediente: Yup.string().required(true),
    cantidad_ingrediente: Yup.number(),
  };
}
