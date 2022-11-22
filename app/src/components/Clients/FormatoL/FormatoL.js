import React from "react";
import { Header, Segment, Checkbox } from "semantic-ui-react";
import "./FormatoL.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "../../../hooks";
import { Form, Button, Card } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function FormatoL() {
  const navigate = useNavigate();

  const { addUser } = useUser();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await addUser(formValue);
        toast.success(`Cuenta creada exitosamente`);

        navigate(`/`);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="FormatoL">
      <Header textAlign="center">
        <h1>Registrarse</h1>
      </Header>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Control
            id="username"
            placeholder="Nombre de usuario"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.username}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            id="email"
            placeholder="Correo electronico"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            id="first_name"
            placeholder="Nombres"
            value={formik.values.first_name}
            onChange={formik.handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.first_name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            id="last_name"
            placeholder="Apellidos"
            value={formik.values.last_name}
            onChange={formik.handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.last_name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            id="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Checkbox label="Acepto ser cliente de SigloXXI" />
          <Form.Label>{JSON.stringify(formik.values)}</Form.Label>
        </Form.Group>
        <Button type="submit">Registrarse</Button>
        <Form.Label>{JSON.stringify(formik.errors)}</Form.Label>
      </Form>
    </div>
  );
}

function initialValues(data) {
  return {
    username: data?.username || "",
    email: data?.email || "",
    first_name: data?.first_name || "",
    last_name: data?.last_name || "",
    password: data?.password || "",
    is_active: true,
    cargo: "Cliente",
  };
}

function newSchema() {
  return {
    username: Yup.string().required(true),
    email: Yup.string().required(true),
    first_name: Yup.string().required(true),
    last_name: Yup.string().required(true),
    password: Yup.string().required(true),
  };
}
