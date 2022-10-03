import React from "react";
import { Form, Button } from "semantic-ui-react";
import "./AddEditMesasForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMesas } from "../../../../hooks";

export function AddEditMesasForm(props) {
  const { onClose, onRefetch, mesa } = props;
  const { addMesa, updateMesa } = useMesas();

  const formik = useFormik({
    initialValues: initialValues(mesa),
    validationSchema: Yup.object(mesa ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (mesa) await updateMesa(mesa.id, formValue);
        else await addMesa(formValue);

        onRefetch();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form className="add-edit-mesas-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="numero_mesa"
        placeholder="Numero de Mesa"
        value={formik.values.numero_mesa}
        onChange={formik.handleChange}
        error={formik.errors.numero_mesa}
      ></Form.Input>
      <Form.Input
        name="estado"
        placeholder="Estado"
        value={formik.values.estado}
        onChange={formik.handleChange}
        error={formik.errors.estado}
      ></Form.Input>

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
    email: data?.estado || "",
  };
}

function newSchema() {
  return {
    numero_mesa: Yup.number().required(true),
    estado: Yup.string().required(true),
  };
}
function updateSchema() {
  return {
    numero_mesa: Yup.number().required(true),
    estado: Yup.string().required(true),
  };
}
