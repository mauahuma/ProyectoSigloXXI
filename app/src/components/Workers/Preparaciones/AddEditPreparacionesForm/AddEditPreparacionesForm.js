import React, { useCallback, useState } from "react";
import { Form, Button, Checkbox, Image } from "semantic-ui-react";
import "./AddEditPreparacionesForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePreparaciones } from "../../../../hooks";
import { useDropzone } from "react-dropzone";

export function AddEditPreparacionesForm(props) {
  const { onClose, onRefetch, preparacion } = props;
  const { addPreparacion, updatePreparacion } = usePreparaciones();
  const [previewImage, setPreviewImage] = useState(
    preparacion ? preparacion?.Imagen : null
  );

  const estados = [
    { key: "E", text: "Entradas", value: "Entradas" },
    { key: "B", text: "Bebestibles", value: "Bebestibles" },
    { key: "A", text: "Acompañamientos", value: "Acompañamientos" },
    { key: "F", text: "Platos", value: "Platos" },
    { key: "P", text: "Postres", value: "Postres" },
  ];
  const formik = useFormik({
    initialValues: initialValues(preparacion),
    validationSchema: Yup.object(preparacion ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (preparacion) await updatePreparacion(preparacion.id, formValue);
        else await addPreparacion(formValue);

        onRefetch();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];
    await formik.setFieldValue("Imagen", file);
    setPreviewImage(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png, image/jpg",
    noKeyboard: true,
    multiple: false,
    onDrop,
  });
  return (
    <Form
      className="add-edit-preparaciones-form"
      onSubmit={formik.handleSubmit}
    >
      <label>Nombre de preparación:</label>
      <Form.Input
        name="nombre"
        placeholder="Nombre Preparacion"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        error={formik.errors.nombre}
      ></Form.Input>
      <label>Tiempo de preparación(minutos):</label>
      <Form.Input
        name="tiempo_preparacion"
        placeholder="Tiempo Preparacion"
        value={formik.values.tiempo_preparacion}
        onChange={formik.handleChange}
        error={formik.errors.tiempo_preparacion}
      ></Form.Input>
      <label>Receta de preparación:</label>
      <Form.Input
        name="receta"
        placeholder="Receta"
        value={formik.values.receta}
        onChange={formik.handleChange}
        error={formik.errors.receta}
      ></Form.Input>
      <label>Stock disponible preparación:</label>
      <Form.Input
        name="stock"
        placeholder="stock Preparacion"
        value={formik.values.stock}
        onChange={formik.handleChange}
        error={formik.errors.stock}
      ></Form.Input>
      <label>Valor de preparación:</label>
      <Form.Input
        name="Valor"
        placeholder="Valor de Preparacion"
        value={formik.values.Valor}
        onChange={formik.handleChange}
        error={formik.errors.Valor}
      ></Form.Input>
      <Form.Select
        selection
        placeholder="Categoría"
        options={estados}
        value={formik.values.categoria}
        error={formik.errors.categoria}
        onChange={(_, data) => formik.setFieldValue("categoria", data.value)}
      ></Form.Select>
      <div className="add-edit-preparaciones-form__active">
        <Checkbox
          toggle
          checked={formik.values.activo}
          onChange={(_, data) => formik.setFieldValue("activo", data.checked)}
        />
        Activo
      </div>

      <Button
        type="button"
        fluid
        {...getRootProps()}
        color={formik.errors.Imagen && "red"}
      >
        {previewImage ? "Cambiar imagen" : "Subir imagen"}
      </Button>
      <input {...getInputProps()} />
      <Image src={previewImage} />

      <Button
        type="submit"
        primary
        fluid
        content={preparacion ? "Actualizar" : "Crear"}
      />
    </Form>
  );
}

function initialValues(data) {
  return {
    nombre: data?.nombre || "",
    tiempo_preparacion: data?.tiempo_preparacion || "",
    stock: data?.stock || "",
    receta: data?.receta || "",
    activo: data?.activo ? true : true,
    Valor: data?.Valor || "",
    Imagen: "",
    categoria: data?.categoria || "",
  };
}

function newSchema() {
  return {
    nombre: Yup.string().required(true),
    tiempo_preparacion: Yup.number().required(false),
    stock: Yup.number()
      .positive("Stock debe de ser positivo")
      .integer("Stock debe de ser entero")
      .required(false),
    receta: Yup.string().required(true),
    activo: Yup.bool().required(true),
    Valor: Yup.number().required(true),
    Imagen: Yup.string(),
    categoria: Yup.string().required(true),
  };
}
function updateSchema() {
  return {
    nombre: Yup.string().required(true),
    tiempo_preparacion: Yup.number().required(false),
    stock: Yup.number()
      .positive("Stock debe de ser positivo")
      .integer("Stock debe de ser entero")
      .required(false),
    receta: Yup.string().required(true),
    activo: Yup.bool().required(true),
    Valor: Yup.number().required(true),
    Imagen: Yup.string(),
    categoria: Yup.string().required(true),
  };
}
