"use client";

import { Button, Label, TextInput, Card } from "flowbite-react";
import { useState } from "react";

export default function InForm({ products,warehouses }) {
  const [product, setProduct] = useState("");
  const [warehouse, setWarehouse] = useState("");

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3000/api/products");
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  const productOptions = products.bebidas.map((bebida) => (
    <option value={bebida.id}>{bebida.name}</option>
  ));

  const warehouseOptions = warehouses.map((warehouse) => (
    <option value={warehouse.id}>{warehouse.name}</option>
    ));

    
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleSelect = (e) => {
        setSelectedProduct(e.target.value);
    };
    
    const [quantity, setQuantity] = useState(0);
    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(product);
    };
  return (
    <Card className="overflow-scroll w-1/2" href="#">
      <div className="">
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <div>Ingreso de productos</div>
          </h5>
        </div>
      </div>
        <form className="flex flex-col gap-2">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Producto" />
            </div>
            <select
              onChange={handleSelect}
              id="products"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Escoje un producto</option>
              {productOptions}
            </select>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Cantidad" />
            </div>
            <TextInput
                id="base"
                type="number"
                placeholder="Cantidad"
                onChange={handleQuantity}
                value={quantity}
            />
            <div className="mb-2 block">
              <Label htmlFor="base" value="Almacen" />
            </div>
            <select
                onChange={handleSelect}
                id="products"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option selected>Escoje un almacen</option>
                {warehouseOptions}
            </select>
          </div>
          <Button type="submit">Enviar</Button>
        </form>
    </Card>
  );
}

function CreateWarehouse(){

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }


    return (
        <Card className="overflow-scroll w-1/2" href="#">
          <div className="">
            <div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <div>Registrar bodega</div>
              </h5>
            </div>
          </div>
            <form className="flex flex-col gap-2">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="base" value="Nombre" />
                </div>
                <TextInput
                    id="base"
                    type="text"
                    placeholder="Nombre"
                    onChange={handleName}
                    value={name}
                />
                <div className="mb-2 block">
                  <Label htmlFor="base" value="Direccion" />
                </div>
                <TextInput
                    id="base"
                    type="text"
                    placeholder="Direccion"
                    onChange={handleAddress}
                    value={address}
                />
              </div>
              <Button type="submit">Enviar</Button>
            </form>
        </Card>
      );
}

module.exports = {
  InForm,
  CreateWarehouse,
};
