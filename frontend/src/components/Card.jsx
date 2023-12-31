// 'use client';

import { Card } from "flowbite-react";
import DefaultCarousel from "./Carousel";
import StepperTimeline from "./Timeline";
import WarehouseTable from "./WarehouseTable";
import DrinkTable from "./DrinkTable";
import { useState, useEffect } from "react";
import { InventoryTable } from "./InventoryTable";

function DefaultCard() {
  return (
    <Card className="max-w-sm" href="#">
      <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <div>Noteworthy technology acquisitions 2021</div>
      </div>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <div>
          Here are the biggest enterdivrise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </div>
      </div>
    </Card>
  );
}

function CarouselCard() {
  return (
    <Card className="w-1/3 h-3/4" href="#">
      <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <div>Bebidas mas vendidas</div>
      </div>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <div>Aqui se muestran las bebidas mas vendidas en el ultimo mes</div>
      </div>
      <DefaultCarousel />
    </Card>
  );
}

function TimelineCard() {
  return (
    <Card className=" max-w-2/3 h-3/4 overflow-scroll " href="#">
      <div className="flex flex-col justify-between">
        <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <div>Transacciones recientes</div>
        </div>
        <div className="font-normal text-gray-700  dark:text-gray-400">
          <div>Aqui se muestran las transacciones mas recientes</div>
        </div>
      </div>
      <StepperTimeline />
    </Card>
  );
}

function TitleCard({ title, description, children }) {
  return (
    <Card className=" max-w-2/3 h-1/5" href="#">
      <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <div>{title}</div>
      </div>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <div>{description}</div>
      </div>
    </Card>
  );
}

function TablesCard({ bebidas, almacenes }) {
  return (
    <Card className=" w-3/4 ">
      <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <div>Overview</div>
      </div>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <div>Vistas generales de las bebidas y almacenes</div>
      </div>

      <div className="flex flex-col 2xl:flex-row gap-4 justify-evenly overflow-scroll">
        <DrinkTable data={bebidas} />
        <WarehouseTable data={almacenes} />
      </div>
    </Card>
  );
}

function DrinkCard({ bebidas }) {
  return (
    <Card className="w-full h-3/4 " href="#">
      <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <div>Bebidas</div>
      </div>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <div>Aqui se muestran las bebidas</div>
      </div>
      <div className="overflow-scroll">
      <DrinkTable data={bebidas} />

      </div>
    </Card>
  );
}

function WarehouseCard({ warehouses }) {
  return (
    <Card className="min-w-1/3 h-3/4 " href="#">
      <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <div>Almacenes</div>
      </div>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <div>Aqui se muestran los almacenes</div>
      </div>
      <div className="overflow-scroll">
      <WarehouseTable data={warehouses} />

      </div>
    </Card>
  );
}

module.exports = {
  DefaultCard,
  CarouselCard,
  TimelineCard,
  TitleCard,
  TablesCard,
  WarehouseCard,
  DrinkCard,
};
