import { ArrangeVertical, ArrowDown2 } from "iconsax-react";
import React, { useState } from "react";
// import { Option, Select } from "@material-tailwind/react";
import Select from "react-select";

const locationOptions = [
  { value: "Tehran", label: "Tehran" },
  { value: "Kerman", label: "Kerman" },
  { value: "Mashhad", label: "Mashhad" },
  { value: "Ilam", label: "Ilam" },
  { value: "Fars", label: "Fars" },
];
const dateOptions = [
  { value: "1401/10/15", label: "1401/10/15" },
  { value: "1401/11/15", label: "1401/11/15" },
  { value: "1401/12/15", label: "1401/12/15" },
  { value: "1402/01/15", label: "1402/01/15" },
  { value: "1402/02/15", label: "1402/02/15" },
];
const timeOptions = [
  { value: "10:00", label: "10:00" },
  { value: "11:00", label: "11:00" },
  { value: "12:00", label: "12:00" },
  { value: "13:00", label: "13:00" },
  { value: "14:00", label: "14:00" },
];

const DatePicker = () => {
  const [location, setLocation] = useState("Tehran");
  const [date, setDate] = useState("1401/10/15");
  const [time, setTime] = useState("Tehran");

  const handleChange = (selectedOption) => {
    setLocation(selectedOption);
  };
  const dateHandleChange = (selectedOption) => {
    setDate(selectedOption);
  };
  const timeHandleChange = (selectedOption) => {
    setTime(selectedOption);
  };

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
          {/* <div className="grid grid-cols-3 gap-2"> */}
          <Select
            styles={{
              control: (base) => ({
                ...base,
                border: 0,
                // borderRight : "2px solid red",
              }),
            }}
            className="py-2  text-[#90A3BF] font-normal text-xs  w-1/3"
            value={location}
            onChange={handleChange}
            options={locationOptions}
          />
          <Select
            styles={{
              control: (base) => ({
                ...base,
                border: 0,
                // borderRight : "2px solid red",
              }),
            }}
            className="py-2  text-[#90A3BF] font-normal text-xs w-1/3"
            value={date}
            onChange={dateHandleChange}
            options={dateOptions}
          />
          <Select
            className="py-2  text-[#90A3BF] font-normal text-xs w-1/3"
            styles={{
              control: (base) => ({
                ...base,
                border: 0,
                // borderRight : "2px solid red",
              }),
            }}
            value={time}
            onChange={timeHandleChange}
            options={timeOptions}
          />

          {/* <div className="w-[30%] border-r-[1px] border-[#C3D4E966]">
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
          </div> */}

          {/* <div className="">
            <label className="mt-3 lg:mt-4 px-5 py-[18px] text-[#1A202C] font-semibold text-sm lg:text-base">
              Locations
            </label>
            <Select
              label="Select your city"
              className="border-none w-[126px]  block py-2 outline-none focus:outline-none  text-[#90A3BF] font-normal text-xs"
            >
              <Option>Tehran</Option>
              <Option>Kerman</Option>
              <Option>Mashhad</Option>
              <Option>Ilam</Option>
              <Option>Fars</Option>
            </Select>
          </div> */}

          {/* <div className="w-[30%]">
            <span className="text-[#1A202C] font-bold text-base block">
              Date
            </span>
            <input
              type="date"
              className="w-full  block focus:outline-none py-2  border-[#C3D4E966] text-[#90A3BF] text-xs"
              placeholder="21 July 2022"
            />
          </div> */}

          {/* <div className="">
            <label className="text-[#1A202C] font-semibold text-sm lg:text-base">
              Time
            </label>
            <Select
              label="Select your time"
              className="border-hidden w-[126px] block mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
            >
              <Option>10:00</Option>
              <Option>11:00</Option>
              <Option>12:00</Option>
              <Option>13:00</Option>
              <Option>14:00</Option>
              <Option>15:00</Option>
            </Select>
          </div> */}

          {/* <div className="w-[30%] border-l-[1px] border-[#C3D4E966]">
            <span className="text-[#1A202C] font-bold text-base">Time</span>

            <select className="w-full py-2 focus:outline-none border-[#C3D4E966] text-[#90A3BF] text-xs">
              <option defaultValue>6:00</option>
              <option value="7">7:00</option>
              <option value="8">8:00</option>
              <option value="9">9:00</option>
              <option value="10">10:00</option>
            </select>
          </div> */}

          {/* <div className="">
            <label className="text-[#1A202C] font-semibold text-sm lg:text-base">
              Date
            </label>
            <Select
              label="Select your date"
              className="border-hidden bg-none w-[126px] block t-3 lg:mt-4 px-5 py-[18px] font-medium text-xs lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
            >
              <Option>1401/10/22</Option>
              <Option>1402/05/15</Option>
              <Option>1401/02/02</Option>
              <Option>1401/03/07</Option>
              <Option>1401/06/14</Option>
            </Select>
          </div> */}
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
