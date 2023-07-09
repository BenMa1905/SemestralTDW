import Image from "next/image";
import { Inter } from "next/font/google";
import SidebarLogo from "@/components/Sidebar";
import {
  CarouselCard,
  TimelineCard,
  TitleCard,
  TablesCard,
} from "@/components/Card";
import { useState, useEffect } from "react";
import { Button, Card, Alert } from "flowbite-react";
import { InventoryTable2 } from "@/components/InventoryTable";
import { data } from "autoprefixer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [warehouses, setWarehouses] = useState([
    {
      id: 1,
      name: "Bodega 1",
      location: "San Jose",
      totalProducts: 10,
    },
    {
      id: 2,
      name: "Bodega 2",
      location: "San Jose",
      totalProducts: 20,
    },
  ]);

  const fetchWarehouses = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/bodega");
    const data = await res.json();
    console.log(data);
    setWarehouses(data);
  };

  useEffect(() => {
    fetchWarehouses();
  }, []);

  // ! Define as null to avoid errors
  const [firstWarehouse, setFirstWarehouse] = useState(warehouses[0]);
  const [secondWarehouse, setSecondWarehouse] = useState(warehouses[1]);

  const [firstInventory, setFirstInventory] = useState([
    {
      id: 1,
      name: "Coca Cola",
      flavor: "Cola",
      totalProducts: 10,
    },
    {
      id: 2,
      name: "A mi me gusta la Pepsi",
      flavor: "Cola",
      totalProducts: 10,
    },
  ]);

  const [secondInventory, setSecondInventory] = useState([
    {
      id: 1,
      name: "Coca Cola",
      flavor: "Cola",
      totalProducts: 10,
    },
    {
      id: 2,
      name: "A mi me gusta la Pepsi",
      flavor: "Cola",
      totalProducts: 10,
    },
    {
      id: 3,
      name: "A mi me gusta la Pepsi",
      flavor: "Cola",
      totalProducts: 10,
    },
  ]);

  const handleSelectFirstWarehouse = (firstWarehouse) => {
    const warehouse = warehouses.find(
      (warehouse) => warehouse.id === parseInt(firstWarehouse)
    );
    setFirstWarehouse(warehouse);
  };

  const handleSelectSecondWarehouse = (secondWarehouse) => {
    const warehouse = warehouses.find(
      (warehouse) => warehouse.id === parseInt(secondWarehouse)
    );
    setSecondWarehouse(warehouse);
  };

  const fetchFirstInventory = async () => {
    // TODO: Fetch inventory from first warehouse
    const res = await fetch(
      `http://127.0.0.1:8000/api/function/bebidas-almacen/${firstWarehouse.id}`
    );
    const data = await res.json();
    console.log("firstInventory",data);
    setFirstInventory(data);
  };

  const fetchSecondInventory = async () => {
    // TODO: Fetch inventory from second warehouse
    const res = await fetch(
      `http://127.0.0.1:8000/api/function/bebidas-almacen/${secondWarehouse.id}`
    );
    const data = await res.json();
    console.log("secondInventory",data);
    setSecondInventory(data);
  };

  useEffect(() => {
    fetchFirstInventory();
    fetchSecondInventory();
  }, [firstWarehouse, secondWarehouse]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Coca Cola",
      flavor: "Cola",
      totalProducts: 10,
    },
    {
      id: 2,
      name: "A mi me gusta la Pepsi",
      flavor: "Cola",
      totalProducts: 10,
    },
  ]);

  const fetchProducts = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/bebidas");
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [firstWarehouseTransfer, setFirstWarehouseTransfer] = useState(
    firstInventory || null
  );
  const [secondWarehouseTransfer, setSecondWarehouseTransfer] = useState(
    secondInventory || null
  );
  const [productTransfer, setProductTransfer] = useState(null);
  const [quantityTransfer, setQuantityTransfer] = useState(0);

  const handleSelectFirstWarehouseTransfer = (firstWarehouseTransfer) => {
    const warehouse = warehouses.find(
      (warehouse) => warehouse.id === parseInt(firstWarehouseTransfer)
    );
    setFirstWarehouseTransfer(warehouse);
  };

  const handleSelectSecondWarehouseTransfer = (secondWarehouseTransfer) => {
    const warehouse = warehouses.find(
      (warehouse) => warehouse.id === parseInt(secondWarehouseTransfer)
    );
    setSecondWarehouseTransfer(warehouse);
  };

  const handleSelectProductTransfer = (productTransfer) => {
    const product = products.find(
      (product) => product.id === parseInt(productTransfer)
    );
    setProductTransfer(product);
  };

  const handleQuantityTransfer = (quantityTransfer) => {
    setQuantityTransfer(quantityTransfer);
  };

  const handleTransfer = async (e) => {
    e.preventDefault();
    if (firstWarehouseTransfer === secondWarehouseTransfer) {
      alert("No se puede transferir a la misma bodega");
      return (
        <Alert color="failure" className="w-1/2">
          <p className="font-bold">Error</p>
          <p className="text-sm">No se puede transferir a la misma bodega</p>
        </Alert>
      );
    }
    const response = await fetch("http://127.0.0.1:8000/api/registros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bodega_envia_id: firstWarehouseTransfer.id,
        bodega_recibe_id: secondWarehouseTransfer.id,
        cantidad: quantityTransfer,
        bebida_id: productTransfer.id,
      }),
    });

    console.log("response", response);
    // console.log("transferencia",data);
    if (response.status === 201) {
      alert("Transferencia exitosa");
    } else {
      alert("Error en la transferencia");
    }


  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="bg-slate-800 flex flex-row max-h-screen h-screen w-full">
        {/* <div className=" bg-green-200 col-span-3 row-span-1">
          header
        </div> */}
        <SidebarLogo />

        {/* div del content */}
        <div className="bg-slate-800 flex-row w-full flex-grow justify-evenly  m-2 p-2  gap-2 flex ">
          <div className="flex   h-full  w-1/3 gap-2 overflow-scroll justify-evenly items-center">
            <div className="flex w-full h-full flex-col justify-center items-center">
              <Card className="w-full  flex " href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <div>Inventario</div>
                </h5>
                <form className="flex flex-col gap-2 ">
                  <div className="mb-2 block">
                    <label htmlFor="base" className="text-slate-800">
                      Almacen 1:
                    </label>
                  </div>
                  <select
                    id="products"
                    class="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Escoje un almacen</option>
                    {warehouses.map((warehouse) => (
                      <option
                        key={warehouse.id}
                        value={warehouse.id}
                        onClick={() => handleSelectFirstWarehouse(warehouse.id)}
                      >
                        {warehouse.nombre}
                      </option>
                    ))}
                  </select>
                  <div className="flex  overflow-scroll ">
                    <InventoryTable2 inventory={firstInventory} />
                  </div>

                  <div className="mb-2 block">
                    <label htmlFor="base" className="text-slate-800">
                      Almacen 2:
                    </label>
                  </div>
                  <select
                    id="products"
                    class="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Escoje un almacen</option>
                    {warehouses.map((warehouse) => (
                      <option
                        key={warehouse.id}
                        value={warehouse.id}
                        onClick={() =>
                          handleSelectSecondWarehouse(warehouse.id)
                        }
                      >
                        {warehouse.nombre}
                      </option>
                    ))}
                  </select>
                  <div className="flex  overflow-scroll ">
                    <InventoryTable2 inventory={secondInventory} />
                  </div>
                </form>
              </Card>
            </div>
          </div>
          <div className="flex w-1/3 h-full justify-center items-center">
            <Card className="w-full  flex " href="#">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <div>Transferir</div>
              </h5>
              <form
                onSubmit={(e) => handleTransfer(e)}
                className="flex flex-col gap-2 "
              >
                <div className="mb-2 block">
                  <label htmlFor="base" className="text-slate-800">
                    Producto:
                  </label>

                  <select
                    required
                    id="products"
                    class="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Escoje un producto</option>
                    {products.map((product) => (
                      <option
                        key={product.id}
                        value={product.id}
                        onClick={() => handleSelectProductTransfer(product.id)}
                      >
                        {product.nombre} - {product.presentacion}
                      </option>
                    ))}
                  </select>

                  <div className="mb-2 block">
                    <label htmlFor="base" className="text-slate-800">
                      Cantidad:
                    </label>
                    <input
                      required
                      value={quantityTransfer}
                      onChange={(e) => handleQuantityTransfer(e.target.value)}
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="100"
                      className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />

                    <div className="mb-2 block">
                      <label htmlFor="base" className="text-slate-800">
                        Desde Almacen:
                      </label>

                      <select
                        id="products"
                        class="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Escoje un almacen</option>
                        {warehouses.map((warehouse) => (
                          <option
                            key={warehouse.id}
                            value={warehouse.id}
                            onClick={() =>
                              handleSelectFirstWarehouseTransfer(warehouse.id)
                            }
                          >
                            {warehouse.nombre}
                          </option>
                        ))}
                      </select>

                      <div className="mb-2 block">
                        <label htmlFor="base" className="text-slate-800">
                          Hacia Almacen:
                        </label>

                        <select
                          id="products"
                          class="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Escoje un almacen</option>
                          {warehouses.map((warehouse) => (
                            <option
                              key={warehouse.id}
                              value={warehouse.id}
                              onClick={() =>
                                handleSelectSecondWarehouseTransfer(
                                  warehouse.id
                                )
                              }
                            >
                              {warehouse.nombre}
                            </option>
                          ))}
                        </select>

                        <div className="flex justify-center">
                          <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Transferir
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
