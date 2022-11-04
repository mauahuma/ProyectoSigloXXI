import React from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import "./AddEditUserForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "../../../../hooks";

const cargos = [
  { key: "c", text: "Cliente", value: "Cliente" },
  { key: "a", text: "Administrador", value: "Administrador" },
  { key: "b", text: "Bodega", value: "Bodega" },
  { key: "r", text: "Recepcion", value: "Recepcion" },
  { key: "k", text: "Cocina", value: "Cocina" },
  { key: "g", text: "Garzon", value: "Garzon" },
  { key: "f", text: "Finanzas", value: "Finanzas" },
];
export function AddEditUserForm(props) {
  const { onClose, onRefetch, user } = props;
  const { addUser, updateUser } = useUser();

  const formik = useFormik({
    initialValues: initialValues(user),
    validationSchema: Yup.object(user ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (user) await updateUser(user.id, formValue);
        else await addUser(formValue);

        onRefetch();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form className="add-edit-user-form" onSubmit={formik.handleSubmit}>
      <label>Usuario:</label>
      <Form.Input
        name="username"
        placeholder="Nombre del Usuario"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.errors.username}
      ></Form.Input>
      <label>Correo electrónico:</label>
      <Form.Input
        name="email"
        placeholder="Correo electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      ></Form.Input>
      <label>Nombre:</label>
      <Form.Input
        name="first_name"
        placeholder="Nombre"
        value={formik.values.first_name}
        onChange={formik.handleChange}
        error={formik.errors.first_name}
      ></Form.Input>
      <label>Apellidos:</label>
      <Form.Input
        name="last_name"
        placeholder="Apellidos"
        value={formik.values.last_name}
        onChange={formik.handleChange}
        error={formik.errors.last_name}
      ></Form.Input>
      <label>Contraseña:</label>
      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      ></Form.Input>
      <label>Cargo:</label>
      <Form.Select
        selection
        placeholder="Cargo"
        options={cargos}
        value={formik.values.cargo}
        error={formik.errors.cargo}
        onChange={(_, data) => formik.setFieldValue("cargo", data.value)}
      ></Form.Select>

      <div className="add-edit-user-form__active">
        <Checkbox
          toggle
          checked={formik.values.is_active}
          onChange={(_, data) =>
            formik.setFieldValue("is_active", data.checked)
          }
        />
        Usuario activo
      </div>

      <Button
        type="submit"
        primary
        fluid
        content={user ? "Actualizar" : "Crear"}
      />
    </Form>
  );
}

function initialValues(data) {
  return {
    username: data?.username || "",
    email: data?.email || "",
    first_name: data?.first_name || "",
    last_name: data?.last_name || "",
    is_active: data?.is_active ? true : false,
    cargo: data?.cargo || "",
    password: "",
  };
}

function newSchema() {
  return {
    username: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    first_name: Yup.string(),
    last_name: Yup.string(),
    is_active: Yup.bool().required(true),
    cargo: Yup.string().required(true),
    password: Yup.string().required(true),
  };
}
function updateSchema() {
  return {
    username: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    first_name: Yup.string(),
    last_name: Yup.string(),
    is_active: Yup.bool().required(true),
    cargo: Yup.string().required(true),
    password: Yup.string(),
  };
}
