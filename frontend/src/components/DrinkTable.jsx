// 'use client';

import { Table } from 'flowbite-react';

export default function DrinkTable({data}) {

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



    if(data){
    
      console.log("Datos en drinkTable", data)


      return data.map((bebida) => (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={bebida.id}>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {bebida.nombre}
          </Table.Cell>
          <Table.Cell>
            {bebida.sabor}
          </Table.Cell>
          <Table.Cell>
            {bebida.presentacion}
          </Table.Cell>
        </Table.Row>
      ));
    }
  
    return dummyData.map((bebida) => (
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={bebida.id}>
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
          Presentación
        </Table.HeadCell>
      </Table.Head>

      <Table.Body className="divide-y">
      {Bebidas()}
      </Table.Body>
    </Table>
  )
}


