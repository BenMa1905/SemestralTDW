// "use client";

import { Button, Label, TextInput, Card } from "flowbite-react";
import { useState } from "react";

function InForm({ products, warehouses }) {
  const [warehouse, setWarehouse] = useState();


  const productOptions = products.map((bebida) => (
    <option key={bebida.id} value={bebida.id}>{bebida.nombre}</option>
  ));

  const warehouseOptions = warehouses.map((warehouse) => (
    <option key={warehouse.id} value={warehouse.id}>{warehouse.nombre}</option>
  ));

  const [selectedProduct, setSelectedProduct] = useState(0);
  const handleSelect = (e) => {
    setSelectedProduct(e.target.value);
  };

  const [quantity, setQuantity] = useState(0);
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleWarehouse = (e) => {
    setWarehouse(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Selected", selectedProduct);
    console.log("Quantity", quantity);
    console.log("Warehouse", warehouse);
    const response =await fetch("http://127.0.0.1:8000/api/inventarios",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "cantidad": quantity,
        "bebida_id": selectedProduct,
        "bodega_id": warehouse
    })
    })

    console.log(response);

    if(response.status === 201){
      alert("Inventario creado correctamente")
    }else{
      alert("Ocurrio un error")
    }
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
            onChange={handleWarehouse}
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/bodega",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: name,
        ubicacion: address
      })
    })
    // console.log("response", response);
    if(response.status === 201){
      alert("Bodega creada exitosamente");
    }else{
      alert("Hubo un error al crear la bodega");
    }
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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

  const [warehouse, setWarehouse] = useState(0);

  const warehouseOptions = warehouses.map((warehouse) => (
    <option key={warehouse.id} value={warehouse.id}>{warehouse.nombre}</option>
  ));

  const handleSelect = (e) => {
    setWarehouse(e.target.value);
  };
  

  const handleSubmit = async(e) => {
    // TODO: agregar el delete de la bodega
    e.preventDefault();
    const response = await fetch(`http://127.0.0.1:8000/api/bodega/${warehouse}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    // console.log("response", response);
    if(response.status === 204){
      alert("Bodega eliminada exitosamente");
    }else{
      alert("Hubo un error al eliminar la bodega");
    }
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
    <option key={warehouse.id} value={warehouse.id}>{warehouse.nombre}</option>
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://127.0.0.1:8000/api/bodega/${warehouse}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: name,
        ubicacion: address,
      })
    })
    // console.log("response", response);
    if(response.status === 200){
      alert("Bodega editada exitosamente");
    }else{
      alert("Hubo un error al editar la bodega");
    }
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/bebidas",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: name,
        sabor: flavor,
        presentacion: size,
      })
    })
    // console.log("response", response);
    if(response.status === 201){
      alert("Bebida creada exitosamente");
    }else{
      alert("Hubo un error al crear la bebida");
    }
    window.location.reload();


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
    <option key={size} value={size}>{size}</option>
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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

function DeleteDrink({drinks}) {
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

  const [drink, setdrink] = useState(dummyDrinks);
  const [selectedDrink, setSelectedDrink] = useState(0);

  const handleSubmit =async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/bebidas/" + selectedDrink, {
      method: "DELETE",
    });
    console.log(response);
    if(response.status === 204){
      alert("Bebida eliminada exitosamente");
    }else{
      alert("Hubo un error al eliminar la bebida");
    }
    window.location.reload();
  };

  const drinkOptions = drinks.map((drink) => (
    <option key={drink.id} value={drink.id}>{drink.nombre} - {drink.presentacion}</option>
  ));

  const handleSelect = (e) => {
    // console.log(e.target.value);
    setSelectedDrink(e.target.value);
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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

function EditDrink({drinks}) {
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

  const [drink, setDrink] = useState(dummyDrinks);
  const [selectedDrink, setSelectedDrink] = useState(0);
  const [name, setName] = useState("");
  const [flavor, setflavor] = useState("");
  const [size, setSize] = useState("");

  const sizes = [
    "1.5L" ,
    "1L",
    "750ml",
    "500ml",
    "250ml"
  ];

  const sizeOptions = sizes.map((size) => (
    <option key={size} value={size}>{size}</option>
  ));

  const handleSubmit =async (e) => {
    e.preventDefault();
    const response = await fetch(`http://127.0.0.1:8000/api/bebidas/${selectedDrink}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: name,
          sabor: flavor,
          }),
    });
    console.log(response);
    if(response.status === 200){
      alert("Bebida editada exitosamente");
    }else{
      alert("Hubo un error al editar la bebida");
    }
    window.location.reload();
  };

  const drinkOptions = drinks.map((drink) => (
    <option key={drink.id} value={drink.id}>{drink.nombre}</option>
  ));

  const handleSelect = (e) => {
    // console.log(e.target.value);
    setSelectedDrink(e.target.value);
    setName(drinks[e.target.value - 1].nombre);
    setflavor(drinks[e.target.value - 1].sabor);
    setSize(drinks[e.target.value - 1].presentacion);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleflavor = (e) => {
    setflavor(e.target.value);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
          <div>
            <Label htmlFor="base" value="Presentacion" />
          </div>
          <select
            id="products"
            onChange={handleSize}
            value={size}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Escoje una presentacion</option>
            {sizeOptions}
          </select>
        </div>
        <Button type="submit">Editar</Button>
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
