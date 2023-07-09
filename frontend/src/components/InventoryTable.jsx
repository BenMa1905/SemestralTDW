// "use client";

import { Table } from "flowbite-react";

function InventoryTable({ warehouseId }) {
  const dummyInventory = [
    {
      id: 1,
      bebidas: [
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
          totalProducts: 20,
        },
        {
          id: 3,
          name: "Fanta",
          flavor: "Cola",
          totalProducts: 30,
        },
      ],
    },
    {
      id: 2,
      bebidas: [
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
      ],
    },
    {
      id: 3,
      bebidas: [
        {
          id: 1,
          name: "Coca Cola",
          flavor: "Cola",
          totalProducts: 10,
        },
      ],
    },
  ];

  const rowGenerator = () => {
    // todo: replace with real data
    // const data = fetch(`http://localhost:3000/api/v1/inventory/${warehouseId}`);

    return dummyInventory.map((warehouse) => {
      if (warehouse.id == warehouseId) {
        return warehouse.bebidas.map((bebida) => {
          return (
            <Table.Row key={bebida.id}>
              <Table.Cell>{bebida.name}</Table.Cell>
              <Table.Cell>{bebida.flavor}</Table.Cell>
              <Table.Cell>{bebida.totalProducts}</Table.Cell>
            </Table.Row>
          );
        });
      }
    });
  };

  return (
    <Table striped>
      <Table.Head>
        <Table.HeadCell>Nombre</Table.HeadCell>
        <Table.HeadCell>Sabor</Table.HeadCell>
        <Table.HeadCell>Cantidad</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">{rowGenerator()}</Table.Body>
    </Table>
  );
}

function InventoryTable2({ inventory }) {

    const rowGenerator = () => {

      if(inventory){
        console.log("Inventory", inventory)
        return inventory.map((bebida) => {
          return (
            <Table.Row key={bebida.id}>
              <Table.Cell>{bebida.nombre}</Table.Cell>
              <Table.Cell>{bebida.sabor}</Table.Cell>
              <Table.Cell>{bebida.presentacion}</Table.Cell>
              <Table.Cell>{bebida.cantidad}</Table.Cell>
            </Table.Row>
          );
        });
      }


  
      return null;
    };

  return (
    <Table striped>
      <Table.Head>
        <Table.HeadCell>Nombre</Table.HeadCell>
        <Table.HeadCell>Sabor</Table.HeadCell>
        <Table.HeadCell>Presentacion</Table.HeadCell>
        <Table.HeadCell>Cantidad</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">{rowGenerator()}</Table.Body>
    </Table>
  );
}

module.exports = {
  InventoryTable,
  InventoryTable2,
};
