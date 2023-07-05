import Image from 'next/image'
import { Inter } from 'next/font/google'
// import Sidebar from '@/components/sidebar'
import LogoBranding from '@/components/Sidebar'
import  Sidebar  from '@/components/Sidebar2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="bg-slate-700 flex flex-row max-h-screen h-screen w-full">
        {/* <div className=" bg-green-200 col-span-3 row-span-1">
          header
        </div> */}
        {/* <div className="bg-black col-span-2 row-span-6"> */}
          <LogoBranding />
          {/* <Sidebar /> */}
        {/* </div> */}
        <div className=" ">
          content
        </div>

      </div>
    </main>
  )
}
