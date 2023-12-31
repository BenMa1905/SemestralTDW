import Image from "next/image";
import { Inter } from "next/font/google";
import SidebarLogo from "@/components/Sidebar";
import { HiChartPie } from "react-icons/hi";
import { WarehouseCard } from "@/components/Card";
import { Timeline, Card, Label, TextInput } from "flowbite-react";
import { InventoryTable2 } from "@/components/InventoryTable";
import {
  InForm,
  CreateWarehouse,
  DeleteWarehouse,
  EditWarehouse,
} from "@/components/Forms";
import { useState } from "react";
import { useEffect } from "react";

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
    {
      id: 3,
      name: "Bodega 3",
      location: "San Jose",
      totalProducts: 30,
    },
  ]);

  const fetchWarehouse = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/bodega");
    const data = await res.json();
    console.log(data);
    setWarehouses(data);
  };

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
    {
      id: 3,
      name: "Fanta",
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
    fetchWarehouse();
    fetchProducts();
  }, []);

  const listWarehouses = () => {
    return warehouses.map((warehouse) => (
      <option value={warehouse.id}>{warehouse.nombre}</option>
    ));
  };

  const [selected, setSelected] = useState("1");

  const handleSelect = (e) => {
    console.log(e.target.value);
    console.log("Selected antes", selected);
    setSelected(e.target.value);
    console.log("Selected", selected);
  };

  const [inventory, setInventory] = useState([
    {
      id: 1,
      nombre: "Coca Cola",
      sabor: "Cola",
      totalProductos: 10,
    },
    {
      id: 2,
      nombre: "A mi me gusta la Pepsi",
      sabor: "Cola",
      totalProductos: 10,
    },
  ]);

  const fetchInventory = async () => {
    const res = await fetch(
      `http://127.0.0.1:8000/api/function/bebidas-almacen/${selected}`
    );
    const data = await res.json();
    console.log(`productos de ${selected}`, data);
    setInventory(data);
  };

  useEffect(() => {
    fetchInventory();
  }, [selected]);

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
        <div className="bg-slate-800 w-full justify-evenly   m-2 p-2  gap-2 flex flex-col">
          <div className="flex h-1/2 gap-2 justify-evenly items-center">
            <WarehouseCard warehouses={warehouses} />
            <div className=" flex  w-1/2 gap-2 ">
              <CreateWarehouse />
              <DeleteWarehouse warehouses={warehouses} />
            </div>
          </div>
          <div className="flex h-1/2  gap-2 justify-evenly  items-center">
            <Card className="overflow-scroll" href="#">
              <div className="">
                <div>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <div>Almacenes</div>
                  </h5>
                  <div className="font-normal text-gray-700 dark:text-gray-400">
                    <div>Selecciona un almacen para ver su inventario</div>
                  </div>
                  <select
                    onChange={handleSelect}
                    id="countries"
                    className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona un almacen</option>
                    {listWarehouses()}
                  </select>
                </div>
              </div>
              <div className="flex flex-row w-full   justify-end">
                <InventoryTable2 inventory={inventory} />
              </div>
            </Card>
            <div className="flex w-1/2 gap-2">
              <InForm products={products} warehouses={warehouses} />
              <EditWarehouse warehouses={warehouses} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
