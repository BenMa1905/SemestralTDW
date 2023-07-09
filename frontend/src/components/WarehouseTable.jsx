// 'use client';

import { Table } from "flowbite-react";
import { useState } from "react";
import InventoryModal from "../modals/InventoryModal";

  // const props = ;
function WarehouseTable({ data}) {
  
  const dummyData = [
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
      totalProducts: 10,
    },
    {
      id: 3,
      name: "Bodega 3",
      location: "San Jose",
      totalProducts: 10,
    },
  ];

  const Bodegas = () => {
    
    if(data && data.length > 0 && data != undefined && data != null){
      return data.map((bodega) => (
        <Table.Row key={bodega.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {bodega.nombre}
          </Table.Cell>
          <Table.Cell>{bodega.ubicacion}</Table.Cell>
          {/* <Table.Cell>{bodega.totalProducts}</Table.Cell> */}
        </Table.Row>
      ));
    }

    

    return dummyData.map((bodega) => (
      <Table.Row key={bodega.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {bodega.name}
        </Table.Cell>
        <Table.Cell>{bodega.location}</Table.Cell>
        {/* <Table.Cell>{bodega.totalProducts}</Table.Cell> */}
      </Table.Row>
      
    ));
  };

  return (
    <>
    <Table striped hoverable>
      <Table.Head>
        <Table.HeadCell>Bodega</Table.HeadCell>
        <Table.HeadCell>Ubicacion</Table.HeadCell>

        {/* <Table.HeadCell>Unidades</Table.HeadCell> */}
      </Table.Head>

      <Table.Body className="divide-y">{Bodegas()}</Table.Body>
    </Table>
    </>
  );
}

export default WarehouseTable;
