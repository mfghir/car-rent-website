import React from "react";
import { Option, Select } from "@material-tailwind/react";

const DetailsRental = () => {
  return (
    <div className="m-6 p-4 bg-white rounded-[10px] ">
      <section className="">
        <p className="text-[#1A202C] font-bold text-base lg:text-xl mb-6">
          Details Rental
        </p>

        <img
          className="md:hidden rounded-[10px]"
          src="https://i.postimg.cc/vH3CF3hw/Maps-Phone.png"
          alt="map"
        />
        <img
          className="hidden md:block rounded-[10px]"
          src="https://i.postimg.cc/x8qsRRSK/Maps.png"
          alt="map"
        />

        <div className="flex justify-between items-baseline mt-6 lg:items-start">
          <div className="flex">
            <img
              className="h-[64px] w-[116px] mr-3 object-cover rounded-lg lg:h-[72px] lg:w-[132px] lg:mr-4 "
              src="https://upcdn.io/kW15b2b/raw/View%201-6QAo.png"
              alt="view"
            />

            <div>
              <p className="text-[#1A202C] font-bold text-xl lg:text-2xl">
                Nissan GT - R
              </p>
              <span className="text-[#3D5278] block font-medium text-xs lg:text-sm mt-2">
                Sport Car
              </span>
            </div>
          </div>
          <span className="text-[#90A3BF] block font-medium text-xs lg:text-sm ">
            #9761
          </span>
        </div>
      </section>

      <section className="mt-6 ">
        {/* ------- ----------------------------------------------Pick-Up*/}
        <div className="flex items-center">
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
        <form className="mt-6 lg:flex lg:justify-between lg:flex-wrap lg:items-start">
          <div className="mt-5 lg:mt-6 lg:w-[48%]">
            <label className="text-[#1A202C] font-semibold text-sm lg:text-base">
              Locations
            </label>
            <Select
              label="Select your city"
              className="border-hidden block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
            >
              <Option>Tehran</Option>
              <Option>Kerman</Option>
              <Option>Mashhad</Option>
              <Option>Ilam</Option>
              <Option>Fars</Option>
            </Select>
          </div>

          <div className="mt-5 lg:mt-6 lg:w-[48%]">
            <label className="text-[#1A202C] font-semibold text-sm lg:text-base">
              Time
            </label>
            <Select
              label="Select your time"
              className="border-hidden  block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
            >
              <Option>10:00</Option>
              <Option>11:00</Option>
              <Option>12:00</Option>
              <Option>13:00</Option>
              <Option>14:00</Option>
              <Option>15:00</Option>
            </Select>
          </div>

          <div className="mt-5 lg:mt-6 lg:w-[48%]">
            <label className="text-[#1A202C] font-semibold text-sm lg:text-base">
              Date
            </label>
            <Select
              label="Select your date"
              className="border-hidden block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
            >
              <Option>1401/10/22</Option>
              <Option>1402/05/15</Option>
              <Option>1401/02/02</Option>
              <Option>1401/03/07</Option>
              <Option>1401/06/14</Option>
            </Select>
          </div>
        </form>
        {/* ------- ----------------------------------------------Drop-Off */}
        <div className="flex items-center mt-4 lg:mt-8">
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
        <form className="mt-6 lg:flex lg:justify-between lg:flex-wrap lg:items-start">
          <div className="mt-5 lg:mt-6 lg:w-[48%]">
            <label className="text-[#1A202C] font-semibold text-sm lg:text-base">
              Locations
            </label>
            <Select
              label="Select your city"
              className="border-hidden block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
            >
              <Option>Tehran</Option>
              <Option>Kerman</Option>
              <Option>Mashhad</Option>
              <Option>Ilam</Option>
              <Option>Fars</Option>
            </Select>
          </div>

          <div className="mt-5 lg:mt-6 lg:w-[48%]">
            <label className="text-[#1A202C] font-semibold text-sm lg:text-base">
              Time
            </label>
            <Select
              label="Select your time"
              className="border-hidden  block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
            >
              <Option>10:00</Option>
              <Option>11:00</Option>
              <Option>12:00</Option>
              <Option>13:00</Option>
              <Option>14:00</Option>
              <Option>15:00</Option>
            </Select>
          </div>

          <div className="mt-5 lg:mt-6 lg:w-[48%]">
            <label className="text-[#1A202C] font-semibold text-sm lg:text-base">
              Date
            </label>
            <Select
              label="Select your date"
              className="border-hidden block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
            >
              <Option>1401/10/22</Option>
              <Option>1402/05/15</Option>
              <Option>1401/02/02</Option>
              <Option>1401/03/07</Option>
              <Option>1401/06/14</Option>
            </Select>
          </div>
        </form>
      </section>

      <ul className=" pt-6 flex justify-between mt-6 border-t-[1px] border-[#C3D4E966]">
        <li>
          <p className="text-[#1A202C] font-bold text-base lg:text-xl">
            Total Rental Price
          </p>
          <span className="text-[#90A3BF] font-normal text-xs lg:font-medium lg:text-sm">
            Overall price rental
          </span>
        </li>
        <li className="text-[#1A202C] font-bold text-xl lg:text-[32px]">
          $80.00
        </li>
      </ul>
    </div>
  );
};

export default DetailsRental;
