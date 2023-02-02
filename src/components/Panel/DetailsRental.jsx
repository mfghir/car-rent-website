import React from "react";
import { Option, Select } from "@material-tailwind/react";
import DatePicker from "../DatePicker";

const DetailsRental = () => {
  return (
    <div className="p-4 bg-white rounded-[10px] lg:w-[48%]">
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

      <section className="mt-6 lg:hidden">
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
        <form className="mt-6 lg:flex lg:justify-between lg:items-start">
          <div className="mt-5">
            <label className="text-[#1A202C] font-semibold text-sm lg:text-base">
              Locations
            </label>
            <Select
              label="Kota Semarang"
              className="border-hidden block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
            >
              <Option>Tehran</Option>
              <Option>Kerman</Option>
              <Option>Mashhad</Option>
              <Option>Ilam</Option>
              <Option>Fars</Option>
            </Select>
          </div>

          <div className="mt-5">
            <label className="text-[#1A202C] font-semibold text-sm lg:text-base">
              Time
            </label>
            <Select
              label="07:00"
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

          <div className="mt-5">
            <label className="text-[#1A202C] font-semibold text-sm lg:text-base">
              Date
            </label>
            <Select
              label="20 July 2022"
              className="min-w-0 lg:1/3 border-hidden block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
            >
              <Option>20 July 2022</Option>
              <Option>21 July 2022</Option>
              <Option>22 July 2022</Option>
              <Option>23 July 2022</Option>
              <Option>24 July 2022</Option>
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
          <div className="mt-5">
            <label className="text-[#1A202C] font-semibold text-sm lg:text-base">
              Locations
            </label>
            <Select
              label="Kota Semarang "
              className="border-hidden block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
            >
              <Option>Tehran</Option>
              <Option>Kerman</Option>
              <Option>Mashhad</Option>
              <Option>Ilam</Option>
              <Option>Fars</Option>
            </Select>
          </div>

          <div className="mt-5">
            <label className="text-[#1A202C] font-semibold text-sm lg:text-base">
              Time
            </label>
            <Select
              label="01:00"
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

          <div className="mt-5">
            <label className="text-[#1A202C] font-semibold text-sm lg:text-base">
              Date
            </label>
            <Select
              label="21 July 2022"
              className="border-hidden block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
            >
              <Option>20 July 2022</Option>
              <Option>21 July 2022</Option>
              <Option>22 July 2022</Option>
              <Option>23 July 2022</Option>
              <Option>24 July 2022</Option>
            </Select>
          </div>
        </form>
      </section>

      <section className="mt-8 hidden lg:flex lg:justify-between lg:items-center lg:flex-wrap">
        {/* ------------------------------------- Pick-Up */}
        <section className="w-full">
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
        {/* ------------------------------------- Drop-Off */}
        <section className="mt-7 w-full">
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
                <option defaultValue value="21">
                  21 July 2022
                </option>
                <option value="20">20 July 2022</option>
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
