import React from "react";
import { Header, Segment, Form, Button, Checkbox } from "semantic-ui-react";
import "./FormatoL.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { loginApi } from "../../../api/user";
import { useAuth } from "../../../hooks";
import { useNavigate } from "react-router-dom";

export function FormatoI() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue);
        const { access } = response;
        login(access);
        navigate(`/`);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
        toast.error(error.message);
      }
    },
  });
  return (
    <div className="FormatoL">
      <Header textAlign="center" stackable>
        <h1>Ingresar</h1>
      </Header>
      <Segment raised stackable>
        <Form onSubmit={formik.handleSubmit}>
          <label>Correo electrónico</label>
          <Form.Input
            name="email"
            placeholder="correo electronico"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
          />
          <label>Contraseña</label>
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
      </Segment>
    </div>
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
