
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import {SiPhpmyadmin} from 'react-icons/si';
import {LuGlassWater} from 'react-icons/lu';
import {PiGarageBold} from 'react-icons/pi';
import {BiTransferAlt} from 'react-icons/bi';

export default function SidebarLogo() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <div
        href="#"
        className='flex flex-row items-center  '
      >
        <SiPhpmyadmin className='h-16 w-16 text-slate-800' />
        <div className='text-slate-800 text-xl font-semibold'>
          Administacion
        </div>
      </div>
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/"
            icon={HiChartPie}
          >
            <div>
              Dashboard
            </div>
          </Sidebar.Item>
          <Sidebar.Item
            href="bodegas"
            icon={PiGarageBold}
          >
            <div>
              Bodegas
            </div>
          </Sidebar.Item>
          <Sidebar.Item
            href="bebidas"
            icon={LuGlassWater}
          >
            <div>
              Bebidas
            </div>
          </Sidebar.Item>
          <Sidebar.Item
            href="transferencias"
            icon={BiTransferAlt}
          >
            <div>
                Transferencias
            </div>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


