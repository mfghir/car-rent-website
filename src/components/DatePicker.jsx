import { ArrangeVertical, ArrowDown2 } from "iconsax-react";
import React, { useState } from "react";
// import { Option, Select } from "@material-tailwind/react";
// import Select from "react-select";

// const locationOptions = [
//   { value: "Tehran", label: "Tehran" },
//   { value: "Kerman", label: "Kerman" },
//   { value: "Mashhad", label: "Mashhad" },
//   { value: "Ilam", label: "Ilam" },
//   { value: "Fars", label: "Fars" },
// ];
// const dateOptions = [
//   { value: "1401/10/15", label: "1401/10/15" },
//   { value: "1401/11/15", label: "1401/11/15" },
//   { value: "1401/12/15", label: "1401/12/15" },
//   { value: "1402/01/15", label: "1402/01/15" },
//   { value: "1402/02/15", label: "1402/02/15" },
// ];
// const timeOptions = [
//   { value: "10:00", label: "10:00" },
//   { value: "11:00", label: "11:00" },
//   { value: "12:00", label: "12:00" },
//   { value: "13:00", label: "13:00" },
//   { value: "14:00", label: "14:00" },
// ];

const DatePicker = () => {
  // const [location, setLocation] = useState("Tehran");
  // const [date, setDate] = useState("1401/10/15");
  // const [time, setTime] = useState("Tehran");

  // const handleChange = (selectedOption) => {
  //   setLocation(selectedOption);
  // };
  // const dateHandleChange = (selectedOption) => {
  //   setDate(selectedOption);
  // };
  // const timeHandleChange = (selectedOption) => {
  //   setTime(selectedOption);
  // };

  return (
    <div className="mt-8 mx-6 lg:mx-0 lg:px-16 lg:flex lg:justify-between lg:items-center">
      {/* ------------------------------------- Pick-Up */}
      <section className="bg-white rounded-[10px] p-4 lg:p-6 lg:w-2/5">
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
            <span className="text-[#1A202C] font-bold text-base">
              Locations
            </span>

            <select className=" w-full py-2 focus:outline-none  text-[#90A3BF] font-normal text-xs bg-white">
              <option defaultValue>Semarang</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="Ge">Germany</option>
            </select>
          </div>

          <div className="w-[30%] border-r-[1px] border-[#C3D4E966]">
            <span className="text-[#1A202C] font-bold text-base block">
              Date
            </span>
            <select className="w-full py-2 focus:outline-none border-[#C3D4E966] text-[#90A3BF] text-xs bg-white">
              <option defaultValue>20 July 2022</option>
              <option value="7">20 July 2022</option>
              <option value="8">21 July 2022</option>
              <option value="9">22 July 2022</option>
              <option value="10">23 July 2022</option>
            </select>
          </div>

          <div className="w-[30%]">
            <span className="text-[#1A202C] font-bold text-base">Time</span>

            <select className="w-full py-2 focus:outline-none border-[#C3D4E966] text-[#90A3BF] text-xs bg-white">
              <option defaultValue value="7">
                07:00
              </option>
              <option value="1">01:00</option>
              <option value="2">02:00</option>
              <option value="3">03:00</option>
              <option value="4">04:00</option>
              <option value="5">05:00</option>
              <option value="6">06:00</option>
              <option value="8">08:00</option>
              <option value="9">09:00</option>
              <option value="10">10:00</option>
              <option value="11">10:00</option>
              <option value="12">12:00</option>
            </select>
          </div>
        </div>
      </section>

      {/* ------------------------------------- Switch-btn */}
      <div className=" lg:mx-[44px] w-[60px] h-[60px] mx-auto z-10 bg-[#3563E9] rounded-[10px] flex justify-center items-center cursor-pointer shadow-[#10329347] shadow-xl ">
        <ArrangeVertical color="#ffffff" />
      </div>

      {/* ------------------------------------- Drop-Off */}
      <section className="bg-white rounded-[10px] p-4 lg:p-6 lg:w-2/5">
        <div className="flex items-center mb-4">
          <input
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-radio-2"
            className="ml-2 text-base font-semibold text-[#1A202C]"
          >
            Drop-Off
          </label>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-[30%] border-r-[1px] border-[#C3D4E966]">
            <span className="text-[#1A202C] font-bold text-base">
              Locations
            </span>

            <select className=" w-full py-2 focus:outline-none  text-[#90A3BF] font-normal text-xs bg-white">
              <option defaultValue>Semarang</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="Ge">Germany</option>
            </select>
          </div>

          <div className="w-[30%] border-r-[1px] border-[#C3D4E966]">
            <span className="text-[#1A202C] font-bold text-base block">
              Date
            </span>
            <select className="w-full py-2 focus:outline-none border-[#C3D4E966] text-[#90A3BF] text-xs bg-white">
              <option defaultValue value="21">21 July 2022</option>
              <option value='20'>20 July 2022</option>
              <option value="22">22 July 2022</option>
              <option value="23">23 July 2022</option>
              <option value="24">24 July 2022</option>
            </select>
          </div>

          <div className="w-[30%]">
            <span className="text-[#1A202C] font-bold text-base">Time</span>

            <select className="w-full py-2 focus:outline-none border-[#C3D4E966] text-[#90A3BF] text-xs bg-white">
              <option defaultValue value="1">
                01:00
              </option>
              <option value="2">02:00</option>
              <option value="3">03:00</option>
              <option value="4">04:00</option>
              <option value="5">05:00</option>
              <option value="6">06:00</option>
              <option value="7">07:00</option>
              <option value="8">08:00</option>
              <option value="9">09:00</option>
              <option value="10">10:00</option>
              <option value="11">10:00</option>
              <option value="12">12:00</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatePicker;
