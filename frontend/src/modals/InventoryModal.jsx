"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import InventoryTable from "../components/InventoryTable";

const dummyInventory=[
    {
        id: 1,
        name: "Bodega 1",
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
            {
                id: 3,
                name: "Fanta",
                flavor: "Cola",
                totalProducts: 10,
            },
        ],
    },
    {
        id: 2,
        name: "Bodega 2",
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
            {
                id: 3,
                name: "Fanta",
                flavor: "Cola",
                totalProducts: 10,
            },
        ],
    },
    {
        id: 3,
        name: "Bodega 3",
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
            {
                id: 3,
                name: "Fanta",
                flavor: "Cola",
                totalProducts: 10,
            },
        ],
    },
]

//   const props = {};
  function InventoryModal  (props)  {
  return (
    <>
      <Button onClick={() => props.setOpenModal(false)}>
        Toggle modal
      </Button>
      <Modal
        show={props.openModal}
        onClose={() => props.setOpenModal(false)}
      >
        <Modal.Header>Inventario</Modal.Header>
        <Modal.Body>
            {InventoryTable({werehouseId: props.werehouseId})}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(false)}>
            I accept
          </Button>
          <Button color="gray" onClick={() => props.setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default  InventoryModal;