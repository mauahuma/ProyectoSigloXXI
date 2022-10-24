import React from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import "./AddEditProveedoresForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useProveedores } from "../../../../hooks";

export function AddEditProveedoresForm(props) {
  const { onClose, onRefetch, proveedor } = props;
  const { addProveedores, updateProveedores } = useProveedores();

  const formik = useFormik({
    initialValues: initialValues(proveedor),
    validationSchema: Yup.object(proveedor ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (proveedor) await updateProveedores(proveedor.id, formValue);
        else await addProveedores(formValue);

        onRefetch();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form className="add-edit-proveedores-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="nombre"
        placeholder="Nombre del Proveedor"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        error={formik.errors.nombre}
      ></Form.Input>
      <Form.Input
        name="numero_Contacto"
        placeholder="Número de Contacto"
        value={formik.values.numero_Contacto}
        onChange={formik.handleChange}
        error={formik.errors.numero_Contacto}
      ></Form.Input>
      <Form.Input
        name="email"
        placeholder="Correo Electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      ></Form.Input>
      <Form.Input
        name="Empresa"
        placeholder="Empresa"
        value={formik.values.Empresa}
        onChange={formik.handleChange}
        error={formik.errors.Empresa}
      ></Form.Input>
      <Form.Input
        name="direccion"
        placeholder="Dirección"
        value={formik.values.direccion}
        onChange={formik.handleChange}
        error={formik.errors.direccion}
      ></Form.Input>

      <Button
        type="submit"
        primary
        fluid
        content={proveedor ? "Actualizar" : "Crear"}
      />
    </Form>
  );
}

function initialValues(data) {
  return {
    nombre: data?.nombre || "",
    numero_Contacto: data?.numero_Contacto || "",
    email: data?.email || "",
    Empresa: data?.Empresa || "",
    direccion: data?.direccion || "",
  };
}

function newSchema() {
  return {
    nombre: Yup.string().required(true),
    numero_Contacto: Yup.string(),
    email: Yup.string().email(true).required(true),
    Empresa: Yup.string(),
    direccion: Yup.string().required(true),
  };
}
function updateSchema() {
  return {
    nombre: Yup.string().required(true),
    numero_Contacto: Yup.string(),
    email: Yup.string().email(true).required(true),
    Empresa: Yup.string(),
    direccion: Yup.string(),
  };
}
