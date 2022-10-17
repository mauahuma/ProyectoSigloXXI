import React, { useState, useEffect } from "react";
import { useIngredientes } from "../../../../hooks";
import { Table, Dropdown, Input, Icon, Button } from "semantic-ui-react";
import { BASE_API } from "../../../../utils/constants";
import {
  addingrPrep,
  getIngrPrep,
  remnoveIngrPrep,
  cleanIngrPrep,
} from "../../../../api/ingredPrep";
import { useBodega } from "../../../../hooks";
import { map } from "lodash";

export function AddIngredienteForm(props) {
  const { onClose, preparacion } = props;
  const { getProducto } = useBodega();
  const { addIngrediente } = useIngredientes();
  const [products, setProducts] = useState(null);

  const [refetch, setRefetch] = useState(false);
  const onRefetch = () => setRefetch((prev) => !prev);
  const [bodegaOptions, setBodegaOptions] = useState([]);
  useEffect(() => {
    async function getOptions() {
      const response = await fetch(`${BASE_API}/api/productos`);
      const body = await response.json();
      setBodegaOptions(
        body.map(({ id, nombre }) => ({ label: nombre, value: id }))
      );
    }
    getOptions();

    (async () => {
      const idProductosPrep = getIngrPrep();
      const ProductosArray = [];
      for await (const idProducto of idProductosPrep) {
        const response = await getProducto(idProducto);
        ProductosArray.push(response);
      }
      setProducts(ProductosArray);
      console.log(products);
    })();
  }, [refetch]);

  const handleOnChange = (e, data) => {
    addingrPrep(data.value);
    onRefetch();
  };

  const removeItem = (index) => {
    remnoveIngrPrep(index);
    onRefetch();
  };

  const handleChange = (e, data) => {
    console.log(data.value);
  };
  return (
    <div>
      <Dropdown
        selection
        fluid
        options={bodegaOptions}
        onChange={handleOnChange}
      ></Dropdown>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Cantidad</Table.HeaderCell>
            <Table.HeaderCell>Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(products, (product, index) => (
            <Tableitem
              index={index}
              product={product}
              removeItem={removeItem}
            />
          ))}
        </Table.Body>
      </Table>
      <Button positive icon>
        <Icon name="check" />
      </Button>
    </div>
  );
}

function Tableitem(props) {
  const { index, product, removeItem } = props;
  return (
    <Table.Row key={index}>
      <Table.Cell hidden>{product.id}</Table.Cell>
      <Table.Cell>{product.nombre}</Table.Cell>
      <Table.Cell>
        <Input name="input"></Input>
      </Table.Cell>
      <Table.Cell>
        <Button icon negative onClick={() => removeItem(index)}>
          <Icon name="trash" />
        </Button>
        <Button icon onClick={() => console.log("#input")}>
          <Icon name="trash" />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
