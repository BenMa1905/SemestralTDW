// "use client";

import { Button, Label, TextInput, Card } from "flowbite-react";
import { useState } from "react";

function InForm({ products, warehouses }) {
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
  };

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

function CreateWarehouse() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

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
            <Label htmlFor="base" value="Sabor" />
          </div>
          <TextInput
            id="base"
            type="text"
            placeholder="Sabor"
            onChange={handleAddress}
            value={address}
          />
        </div>
        <Button type="submit">Enviar</Button>
      </form>
    </Card>
  );
}

function DeleteWarehouse({ warehouses }) {

  const dummyWarehouse = [
    {
      id: 1,
      name: "Bodega 1",
      address: "Calle 1",
    },
    {
      id: 2,
      name: "Bodega 2",
      address: "Calle 2",
    },
    {
      id: 3,
      name: "Bodega 3",
      address: "Calle 3",
    },
  ]

  const [warehouse, setWarehouse] = useState(dummyWarehouse[0].id);

  const warehouseOptions = warehouses.map((warehouse) => (
    <option value={warehouse.id}>{warehouse.name}</option>
  ));

  const handleSelect = (e) => {
    setWarehouse(e.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };



  return (
    <Card className="overflow-scroll w-1/2" href="#">
      <div className="">
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <div>Eliminar bodega</div>
          </h5>
        </div>
      </div>
      <form className="flex flex-col gap-2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Bodega" />
          </div>
          <select
            onChange={handleSelect}
            id="products"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Escoje una bodega</option>
            {warehouseOptions}
          </select>
        </div>
        <Button type="submit">Enviar</Button>
      </form>
    </Card>
  );
}

function EditWarehouse({ warehouses }) {

  const dummyWarehouse = [
    {
      id: 1,
      name: "Bodega 1",
      address: "Calle 1",
    },
    {
      id: 2,
      name: "Bodega 2",
      address: "Calle 2",
    },
  ]

  const [warehouse, setWarehouse] = useState(dummyWarehouse[0].id);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const warehouseOptions = warehouses.map((warehouse) => (
    <option value={warehouse.id}>{warehouse.name}</option>
  ));

  const handleSelect = (e) => {
    setWarehouse(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <Card className="overflow-scroll w-1/2" href="#">
      <div className="">
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <div>Editar bodega</div>
          </h5>
        </div>
      </div>
      <form className="flex flex-col gap-2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Bodega" />
          </div>
          <select
            onChange={handleSelect}
            id="products"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Escoje una bodega</option>
            {warehouseOptions}
          </select>
        </div>
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
            <Label htmlFor="base" value="Dirección" />
          </div>
          <TextInput
            id="base"
            type="text"
            placeholder="Dirección"
            onChange={handleAddress}
            value={address}
          />
        </div>
        <Button type="submit">Enviar</Button>
      </form>
    </Card>
  );
}

function CreateDrink() {
  const [name, setName] = useState("");
  const [flavor, setflavor] = useState("");
  const [size, setSize] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleflavor = (e) => {
    setflavor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  const handleSelect = (e) => {
    setSize(e.target.value);
  };

  const sizes = [
    "1.5L" ,
    "1L",
    "750ml",
    "500ml",
    "250ml"
  ];

  const sizeOptions = sizes.map((size) => (
    <option value={size}>{size}</option>
  ));

  return (
    <Card className="overflow-scroll w-1/3 h-fit" href="#">
      <div className="">
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <div>Registrar Bebida</div>
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
            <Label htmlFor="base" value="Sabor" />
          </div>
          <TextInput
            id="base"
            type="text"
            placeholder="Direccion"
            onChange={handleflavor}
            value={flavor}
          />
          <div>
            <Label htmlFor="base" value="Tamaño" />
          </div>
          <select
            onChange={handleSelect}
            id="products"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Escoje un tamaño</option>
            {sizeOptions}
          </select>

        </div>
        <Button type="submit">Enviar</Button>
      </form>
    </Card>
  );
}

function DeleteDrink() {
  const dummyDrinks = [
    {
      id: 1,
      name: "Coca Cola",
      flavor: "Cola",
      size: "1.5L",
    },
    {
      id: 2,
      name: "Sprite",
      flavor: "Limon",
      size: "1.5L",
    },
    {
      id: 3,
      name: "Fanta",
      flavor: "Naranja",
      size: "1.5L",
    },
  ];

  const [drinks, setDrinks] = useState(dummyDrinks);
  const [selectedDrink, setSelectedDrink] = useState(0);

  const fetchDrinks = async () => {
    // const response = await fetch("http://localhost:8080/drinks");
    // const data = await response.json();
    // setDrinks(data);
    // console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedDrink);
    //todo: delete drink with id selectedDrink
  };

  const toString = (drink) => {
    return `${drink.name} - ${drink.size}`;
  };

  const drinkOptions = drinks.map((drink) => (
    <option value={drink.id}>{drink.name} - {drink.size}</option>
  ));

  const handleSelect = (e) => {
    console.log(e.target.value);
  };

  return (
    <Card className="overflow-scroll w-1/3 h-fit" href="#">
      <div className="">
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <div>Eliminar Bebida</div>
          </h5>
        </div>
      </div>
      <form className="flex flex-col gap-2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Bebida" />
          </div>
          <select
            onChange={handleSelect}
            id="products"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Escoje una bebida</option>
            {drinkOptions}
          </select>
        </div>
        <Button type="submit">Eliminar</Button>
      </form>
    </Card>
  );
}

function EditDrink() {
  const dummyDrinks = [
    {
      id: 1,
      name: "Coca Cola",
      flavor: "Cola",
    },
    {
      id: 2,
      name: "Sprite",
      flavor: "Limon",
    },
    {
      id: 3,
      name: "Fanta",
      flavor: "Naranja",
    },
  ];

  const [drinks, setDrinks] = useState(dummyDrinks);
  const [selectedDrink, setSelectedDrink] = useState(0);
  const [name, setName] = useState("");
  const [flavor, setflavor] = useState("");

  const fetchDrinks = async () => {
    // const response = await fetch("http://localhost:8080/drinks");
    // const data = await response.json();
    // setDrinks(data);
    // console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedDrink);
    //todo: delete drink with id selectedDrink
  };

  const drinkOptions = drinks.map((drink) => (
    <option value={drink.id}>{drink.name}</option>
  ));

  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelectedDrink(e.target.value);
    setName(drinks[e.target.value - 1].name);
    setflavor(drinks[e.target.value - 1].flavor);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleflavor = (e) => {
    setflavor(e.target.value);
  };

  return (
    <Card className="overflow-scroll w-1/3 h-fit" href="#">
      <div className="">
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <div>Editar Bebida</div>
          </h5>
        </div>
      </div>
      <form className="flex flex-col gap-2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Bebida" />
          </div>
          <select
            onChange={handleSelect}
            id="products"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Escoje una bebida</option>
            {drinkOptions}
          </select>
          <div>
            <Label htmlFor="base" value="Nombre" />
          </div>
          <TextInput
            id="base"
            type="text"
            placeholder="Nombre"
            onChange={handleName}
            value={name}
          />
          <div>
            <Label htmlFor="base" value="Sabor" />
          </div>
          <TextInput
            id="base"
            type="text"
            placeholder="Sabor"
            onChange={handleflavor}
            value={flavor}
          />
        </div>
        <Button type="submit">Eliminar</Button>
      </form>
    </Card>
  );
}

module.exports = {
  InForm,
  CreateWarehouse,
  DeleteWarehouse,
  EditWarehouse,
  CreateDrink,
  DeleteDrink,
  EditDrink,
};
