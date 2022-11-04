import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "./LoginForm.scss";
import { loginApi } from "../../../api/user";
import { useAuth } from "../../../hooks";

export function LoginForm() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue);
        const { access } = response;
        login(access);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
        toast.error(error.message);
      }
    },
  });
  return (
    <Form className="login-form-worker" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="email"
        placeholder="correo electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Button type="submit" content="Iniciar Sesion" primary fluid />
    </Form>
    // <Form>
    //   <Form.Group className="mb-3">
    //     <Form.Label>Correo Electronico</Form.Label>
    //     <Form.Control
    //       type="email"
    //       placeholder="Ingresar Correo electronico"
    //       value={formik.values.email}
    //       required
    //     />
    //   </Form.Group>

    //   <Form.Group className="mb-3">
    //     <Form.Label>Contraseña</Form.Label>
    //     <Form.Control
    //       type="password"
    //       placeholder="Contraseña"
    //       value={formik.values.password}
    //       required
    //     />
    //   </Form.Group>

    //   <Button variant="primary" type="submit">
    //     Iniciar Sesion
    //   </Button>
    // </Form>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
