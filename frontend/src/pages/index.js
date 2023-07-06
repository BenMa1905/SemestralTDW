import Image from "next/image";
import { Inter } from "next/font/google";
import SidebarLogo from "@/components/Sidebar";
import WarehouseTable from "@/components/WarehouseTable";
import DrinkTable from "@/components/DrinkTable";
import DefaultCarousel from "@/components/Carousel";
import { CarouselCard, TimelineCard, TitleCard, TablesCard} from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 

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
            <TablesCard />
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
