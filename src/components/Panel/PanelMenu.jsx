import { Home } from "iconsax-react";
import React from "react";

const PanelMenu = () => {
  return (
    <div className="w-2/12 p-4 bg-blue-100 ">
      <section>
        <p className="text-[#94A7CB66] text-xs font-semibold p-4 tracking-[3px]">
          MAINMENU
        </p>
        <ul className=" flex flex-wrap h-full">
          <li className="flex justify-between items-center bg-red-300 p-4 text-[#90a3bf] rounded-[10px] w-full">
            <Home />
            <span className="ml-3 font-medium text-base">Dashboard</span>
          </li>

           <li className="mt-4 flex justify-between items-center bg-red-300 p-4 text-[#90a3bf] rounded-[10px] w-full">
            <Home />
            <span className="ml-3 font-medium text-base">Dashboard</span>
          </li>
        </ul>
      </section>


    </div>
  );
};

export default PanelMenu;
