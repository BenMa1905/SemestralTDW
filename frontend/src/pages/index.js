import Image from "next/image";
import { Inter } from "next/font/google";
import SidebarLogo from "@/components/Sidebar";
import WarehouseTable from "@/components/WarehouseTable";
import DrinkTable from "@/components/DrinkTable";
import DefaultCarousel from "@/components/Carousel";
import {
  CarouselCard,
  TimelineCard,
  TitleCard,
  TablesCard,
} from "@/components/Card";

import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      nombre: "Coca Cola",
      presentacion: "1.5L",
      sabor: "Cola",
    },
    {
      id: 2,
      nombre: "Coca Cola",
      presentacion: "1.5L",
      sabor: "Cola",
    },
  ]);
  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
    fetchWarehouse().then((data) => {
      setWarehouses(data);
      setLoading(false);
    });
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/bebidas");
    const data = await response.json();
    console.log("Bebidas ", data);
    return data;
  };

  const fetchWarehouse = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/bodega");
    const data = await response.json();
    console.log("Bodega ", data);
    return data;
  };

  const isProducts = () => {
    if (products) {
      return <DrinkTable products={products} />;
    } else {
      return <h1>No hay productos</h1>;
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
        <div className="bg-slate-800 w-full flex-grow  m-2 p-2  gap-2 flex flex-col">
          <div className="flex   justify-evenly   gap-2">
            <TablesCard bebidas={products} almacenes={warehouses} />
          </div>
          <div className="flex h-full  justify-center gap-2 flex-row m-2 ">
            <CarouselCard />
            <div className="flex flex-col  gap-10 ">
              {/* <TitleCard
                title="Transacciones"
                description="Aqui se muestran las transacciones mas recientes"
              /> */}

              {/* <TimelineCard /> */}
              <TimelineCard />
            </div>
            {/* <StepperTimeline/> */}
          </div>
        </div>
      </div>
    </main>
  );
}
