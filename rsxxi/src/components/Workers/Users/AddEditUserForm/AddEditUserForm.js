import React from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import "./AddEditUserForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "../../../../hooks";

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
      <Form.Input
        name="username"
        placeholder="Nombre del Usuario"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.errors.username}
      ></Form.Input>
      <Form.Input
        name="email"
        placeholder="Correo electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      ></Form.Input>
      <Form.Input
        name="first_name"
        placeholder="Nombre"
        value={formik.values.first_name}
        onChange={formik.handleChange}
        error={formik.errors.first_name}
      ></Form.Input>
      <Form.Input
        name="last_name"
        placeholder="Apellidos"
        value={formik.values.last_name}
        onChange={formik.handleChange}
        error={formik.errors.last_name}
      ></Form.Input>
      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      ></Form.Input>
      <Form.Input
        name="cargo"
        placeholder="Cargo"
        value={formik.values.cargo}
        onChange={formik.handleChange}
        error={formik.errors.cargo}
      ></Form.Input>

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
