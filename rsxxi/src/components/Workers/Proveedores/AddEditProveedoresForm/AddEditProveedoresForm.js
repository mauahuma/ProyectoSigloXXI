import React from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import "./AddEditProveedoresForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useProveedores } from "../../../../hooks";


export function AddEditProveedoresForm(props) {
  const { onClose, onRefetch, proveedores } = props;
  const { addProveedores, updateProveedores } = useProveedores();

  const formik = useFormik({
    initialValues: initialValues(proveedores),
    validationSchema: Yup.object(proveedores ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (proveedores) await updateProveedores(proveedores.id, formValue);
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
        name="empresa"
        placeholder="Empresa"
        value={formik.values.empresa}
        onChange={formik.handleChange}
        error={formik.errors.empresa}
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
        content={proveedores ? "Actualizar" : "Crear"}
      />
    </Form>
  );
}

function initialValues(data) {
  return {
    nombre: data?.nombre || "",
    numero_Contacto: data?.numero_Contacto || "",
    email: data?.email || "",
    empresa: data?.empresa || "",
    direccion: data?.direccion || "",
  };
}

function newSchema() {
  return {
    nombre: Yup.string().required(true),
    numero_Contacto: Yup.string().email(true).required(true),
    email: Yup.string(),
    empresa: Yup.string(),
    direccion: Yup.string().required(true),
  };
}
function updateSchema() {
  return {
    nombre: Yup.string().required(true),
    numero_Contacto: Yup.string().email(true).required(true),
    email: Yup.string(),
    empresa: Yup.string(),
    direccion: Yup.string(),
  };
}