import React, { useState, useEffect } from "react";
import { Form, Button, Dropdown, Label } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useFinanzas } from "../../../../hooks";
import { map } from "lodash";

export function AddEditFinanzasForm(props) {
  const { onClose, onRefetch, finanza } = props;
  const { addFinanzas } = useFinanzas();
  const estados = [
    { key: "i", text: "Ingreso", value: "INGRESO" },
    { key: "e", text: "Egreso", value: "EGRESO" },
  ];
  const formik = useFormik({
    initialValues: initialValues(finanza),
    validationSchema: Yup.object(finanza ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await addFinanzas(formValue);

        onRefetch();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form className="add-edit-bodega-form" onSubmit={formik.handleSubmit}>
      <label>ingreso/egreso</label>

      <Dropdown
        placeholder="ingreso/egreso"
        fluid
        selection
        search
        options={estados}
        value={formik.values.tipo}
        error={formik.errors.tipo}
        onChange={(_, data) => formik.setFieldValue("tipo", data.value)}
      />
      <label>Monto:</label>
      <Form.Input
        name="monto"
        placeholder="Monto ingreso/egreso"
        value={formik.values.monto}
        onChange={formik.handleChange}
        error={formik.errors.monto}
      ></Form.Input>
      <label>Detalle:</label>

      <Form.Input
        name="detalle"
        placeholder="Detalle ingreso/egreso"
        value={formik.values.detalle}
        onChange={formik.handleChange}
        error={formik.errors.detalle}
      ></Form.Input>
      <Button
        type="submit"
        primary
        fluid
        content={finanza ? "Actualizar" : "Crear"}
      />
    </Form>
  );
}

function initialValues(data) {
  return {
    tipo: data?.tipo || "",
    monto: data?.monto || "",
    detalle: data?.detalle || "",
  };
}

function newSchema() {
  return {
    tipo: Yup.string().required(true),
    monto: Yup.number().required(true),
    detalle: Yup.string().required(true),
  };
}
function updateSchema() {
  return {
    tipo: Yup.string().required(true),
    monto: Yup.number().required(true),
    detalle: Yup.string().required(true),
  };
}
