'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import {SiPhpmyadmin} from 'react-icons/si';
import {LuGlassWater} from 'react-icons/lu';
import {PiGarageBold} from 'react-icons/pi';
import {BiTransferAlt} from 'react-icons/bi';

export default function LogoBranding() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <div
        href="#"
        className='flex flex-row items-center  '
      >
        <SiPhpmyadmin className='h-16 w-16 text-slate-800' />
        <p className='text-slate-800 text-xl font-semibold'>
          Administacion
        </p>
      </div>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
            icon={HiChartPie}
          >
            <p>
              Dashboard
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={PiGarageBold}
          >
            <p>
              Bodegas
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={BiTransferAlt}
          >
            <p>
                Transferencias
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiUser}
          >
            <p>
              Users
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={LuGlassWater}
          >
            <p>
              Bebidas
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


