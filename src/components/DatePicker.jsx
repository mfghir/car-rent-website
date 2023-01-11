import { ArrangeVertical, ArrowDown2 } from "iconsax-react";
import React from "react";
import SelectOpt from "../common/SelectOpt";

const DatePicker = () => {
  return (
    <div className="mt-8 mx-6 lg:mx-0 lg:px-16 lg:flex lg:justify-between lg:items-center">
      {/* ------------------------------------- Pick-Up */}
      <section className="bg-white rounded-[10px] p-4 lg:p-6">
        <div className="flex items-center mb-4">
          <input
            defaultChecked
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-base font-semibold text-[#1A202C]"
          >
            Pick-Up
          </label>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-[30%] border-r-[1px] border-[#C3D4E966]">
            <span className="text-[#1A202C] font-bold text-base  ">
              Locations
            </span>

            <select className=" w-full py-2 focus:outline-none  text-[#90A3BF] font-normal text-xs ">
              <option defaultValue>Semarang</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="Ge">Germany</option>
            </select>
          </div>

          <div className="w-[30%]">
            <span className="text-[#1A202C] font-bold text-base block">
              Date
            </span>
            <input
              type="date"
              className="w-full  block focus:outline-none py-2  border-[#C3D4E966] text-[#90A3BF] text-xs"
              placeholder="21 July 2022"
            />
          </div>

          <div className="w-[30%] border-l-[1px] border-[#C3D4E966]">
            <span className="text-[#1A202C] font-bold text-base">Time</span>

            <select className="w-full py-2 focus:outline-none border-[#C3D4E966] text-[#90A3BF] text-xs">
              <option defaultValue>6:00</option>
              <option value="7">7:00</option>
              <option value="8">8:00</option>
              <option value="9">9:00</option>
              <option value="10">10:00</option>
            </select>
          </div>
        </div>
      </section>

      {/* ------------------------------------- Switch-btn */}
      {/* https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after */}
      <div className="mx-auto lg:mx-[44px] w-[60px] h-[60px] bg-[#3563E9] rounded-[10px] flex justify-center items-center cursor-pointer">
        <ArrangeVertical color="#ffffff" />
      </div>

      {/* ------------------------------------- Drop-Off */}
      <section className="bg-white rounded-[10px] p-4 lg:p-6">
        <div className="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-base font-semibold text-[#1A202C]"
          >
            Drop-Off
          </label>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-[30%] border-r-[1px] border-[#C3D4E966]">
            <span className="text-[#1A202C] font-bold text-base  ">
              Locations
            </span>

            <select className=" w-full py-2 focus:outline-none  text-[#90A3BF] font-normal text-xs ">
              <option defaultValue>Semarang</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="Ge">Germany</option>
            </select>
          </div>

          <div className="w-[30%]">
            <span className="text-[#1A202C] font-bold text-base block">
              Date
            </span>
            <input
              type="date"
              className="w-full  block focus:outline-none py-2  border-[#C3D4E966] text-[#90A3BF] text-xs"
              placeholder="21 July 2022"
            />
          </div>

          <div className="w-[30%] border-l-[1px] border-[#C3D4E966]">
            <span className="text-[#1A202C] font-bold text-base">Time</span>

            <select className="w-full py-2 focus:outline-none border-[#C3D4E966] text-[#90A3BF] text-xs">
              <option defaultValue>6:00</option>
              <option value="7">7:00</option>
              <option value="8">8:00</option>
              <option value="9">9:00</option>
              <option value="10">10:00</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatePicker;
