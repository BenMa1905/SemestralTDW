import { Inter } from "next/font/google";
import SidebarLogo from "@/components/Sidebar";
import { CarouselCard, DrinkCard } from "@/components/Card";
import { LuCupSoda } from "react-icons/lu";
import { useState, useEffect } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CreateDrink, DeleteDrink, EditDrink } from "@/components/Forms";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [previousTab, setPreviousTab] = useState(0);

  //   var activeTab = 0;
  //   const setActiveTab = (tabIndex) => {
  // activeTab = tabIndex;
  // };

  const activeButtonStyle =
    "flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none rounded-t-lg bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500";
  const inactiveButtonStyle =
    "flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none rounded-t-lg text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300";
  const activeStyles = activeButtonStyle.split(" ");
  const inactiveStyles = inactiveButtonStyle.split(" ");

  const handleTabChange = (tabIndex) => {
    var button = document.getElementById("b-" + activeTab);

    activeStyles.forEach((style) => {
      button.classList.remove(style);
    });

    inactiveStyles.forEach((style) => {
      button.classList.add(style);
    });

    // button.setAttribute("aria-selected", "false");

    var tab = document.getElementById(activeTab);
    tab.classList.remove("flex");
    tab.classList.add("hidden");

    setPreviousTab(activeTab);

    var button = document.getElementById("b-" + tabIndex);

    inactiveStyles.forEach((style) => {
      button.classList.remove(style);
    });

    activeStyles.forEach((style) => {
      button.classList.add(style);
    });

    // button.setAttribute("focus", "false");
    // button.setAttribute("aria-selected", "true");

    var tab = document.getElementById(tabIndex);

    tab.classList.remove("hidden");
    tab.classList.add("flex");
    setActiveTab(tabIndex);
  };

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
        <div className="bg-slate-800 w-full  m-2 p-2   gap-2 flex flex-col">
          <div class="flex flex-col gap-2 h-full w-full">
            <div
              aria-label="Default tabs"
              role="tablist"
              class="flex  text-center flex-wrap border-b border-gray-200 dark:border-gray-700"
            >
              <button
                type="button"
                aria-controls=":r21:-tabpanel-0"
                aria-selected="true"
                class="flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none rounded-t-lg bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500"
                id="b-0"
                role="tab"
                tabindex="-1"
                onClick={() => handleTabChange(0)}
              >
                <LuCupSoda className=" h-5 w-5" />
                Bebidas
              </button>
              <button
                type="button"
                aria-controls=":r21:-tabpanel-1"
                aria-selected="false"
                class="flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none rounded-t-lg text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                id="b-1"
                role="tab"
                tabindex="-1"
                onClick={() => handleTabChange(1)}
              >
                <IoIosAddCircleOutline className="h-5 w-5" />
                Agregar
              </button>
              <button
                type="button"
                aria-controls=":r21:-tabpanel-2"
                aria-selected="false"
                class="flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none rounded-t-lg text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                id="b-2"
                role="tab"
                tabindex="-1"
                onClick={() => handleTabChange(2)}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  class="mr-2 h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                </svg>
                Eliminar
              </button>
              <button
                type="button"
                aria-controls=":r21:-tabpanel-3"
                aria-selected="false"
                class="flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none rounded-t-lg text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                id="b-3"
                role="tab"
                tabindex="-1"
                onClick={() => handleTabChange(3)}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  class="mr-2 h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Modificar
              </button>
            </div>
            <div className="h-full  ">
              <div
                aria-labelledby=":r21:-tab-0"
                class="py-3 bg-slate- flex h-full justify-center align-middle items-center"
                id="0"
                role="tabpanel"
                tabindex="0"
              >
                <div className="flex justify-evenly  h-full w-full">
                  <CarouselCard />
                  <div className="flex w-1/2 ">
                    <DrinkCard className="flex w-full" />
                  </div>
                </div>
              </div>
              <div
                aria-labelledby=":r21:-tab-1"
                class="py-3 hidden h-full justify-center align-middle items-center"
                id="1"
                role="tabpanel"
                tabindex="0"
                hidden=""
              >
                <div className="flex justify-evenly   h-full w-full">
                  <CreateDrink />
                  <div className="flex w-1/2 ">
                    <DrinkCard className="flex w-full" />
                  </div>
                </div>
              </div>
              <div
                aria-labelledby=":r21:-tab-2"
                class="py-3 hidden h-full justify-center align-middle items-center"
                id="2"
                role="tabpanel"
                tabindex="0"
                hidden=""
              >
                <div className="flex justify-evenly   h-full w-full">
                  <DeleteDrink />
                  <div className="flex w-1/2 ">
                    <DrinkCard className="flex w-full" />
                  </div>
                </div>
              </div>
              <div
                aria-labelledby=":r21:-tab-3"
                class="py-3 hidden h-full justify-center align-middle items-center"
                id="3"
                role="tabpanel"
                tabindex="0"
                hidden=""
              >
                <div className="flex justify-evenly   h-full w-full">
                  <EditDrink />
                  <div className="flex w-1/2 ">
                    <DrinkCard className="flex w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
