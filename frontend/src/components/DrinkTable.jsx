// 'use client';

import { Table } from 'flowbite-react';

export default function DrinkTable() {

  const dummyData = [
    {
      id: 1,
      name: 'Coca Cola Espuma',
      flavor: 'Cola',
      totalProducts: 10
    },
    {
      id: 2,
      name: 'A mi me gusta la Pepsi',
      flavor: 'Cola',
      totalProducts: 10
    },
    {
      id: 3,
      name: 'Fanta',
      flavor: 'Cola',
      totalProducts: 10
    },
  ]

  const Bebidas =  () => {
    // todo: replace with real data
    // const response =  fetch('http://localhost:3000/api/warehouse');
    // const data =  response.json();
    // console.log(data);


  
    return dummyData.map((bebida) => (
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {bebida.name}
        </Table.Cell>
        <Table.Cell>
          {bebida.flavor}
        </Table.Cell>
        <Table.Cell>
          {bebida.totalProducts}
        </Table.Cell>
      </Table.Row>
    ));
  }


  return (
    <Table striped hoverable>
      <Table.Head>
        <Table.HeadCell>
          bebida
        </Table.HeadCell>
        <Table.HeadCell>
          Sabor
        </Table.HeadCell>
        <Table.HeadCell>
          Unidades
        </Table.HeadCell>
      </Table.Head>

      <Table.Body className="divide-y">
      {Bebidas()}
      </Table.Body>
    </Table>
  )
}


