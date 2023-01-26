import { Option, Select } from "@material-tailwind/react";
import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import PaymentNavbar from "./PaymentNavbar";

const Payment = () => {
  const [state, dispatch] = useContext(ProductsContext);

  // console.log(state.selectedItems.name)

  return (
    <>
      <PaymentNavbar />

      <section className="p-6">
        <section className="p-4 bg-white rounded-[10px]">
          <div>
            <h1 className="text-[#1A202C] font-bold text-base lg:text-xl">
              Rental Summary
            </h1>
            <p className="text-[#90A3BF] font-medium text-xs leading-5 lg:text-sm">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>
          </div>

          {state.selectedItems.map((item) => {
            const { name, reviewer, price } = item;
            return (
              <div className="">
                <div className="flex justify-between border-b-[1px] border-[#C3D4E966] py-6">
                  <img
                    className="h-[80px] mr-4"
                    src="https://upcdn.io/kW15b2b/raw/View%201-6QAo.png"
                    alt="view"
                  />

                  <div className="flex flex-wrap ">
                    <p className="text-[#1A202C] font-bold text-xl lg:text-[32px]">
                      {name}
                    </p>

                    <div className="flex items-baseline flex-col">
                      <div>
                        <span className="text-[#fbad39]  mr-[2px] lg:scale-[1.7] lg:mr-[5px] ">
                          &#9733;
                        </span>
                        <span className="text-[#fbad39]  mr-[2px] lg:scale-[1.7] lg:mr-[5px] ">
                          &#9733;
                        </span>
                        <span className="text-[#fbad39]  mr-[2px] lg:scale-[1.7] lg:mr-[5px] ">
                          &#9733;
                        </span>
                        <span className="text-[#fbad39]  mr-[2px] lg:scale-[1.7] lg:mr-[5px] ">
                          &#9733;
                        </span>
                        <span className="text-[#90A3BF]  mr-[2px] lg:scale-[1.7] lg:mr-[5px] ">
                          &#9734;
                        </span>
                      </div>
                      <p className="text-[#90A3BF] font-medium text-xs lg:text-sm">
                        {reviewer}+ Reviewer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-4">
                  <ul>
                    <li className="flex justify-between items-center">
                      <span className="text-[#90A3BF] font-semibold text-xs lg:font-medium lg:text-base">
                        Subtotal
                      </span>
                      <span className="text-[#1A202C] font-semibold text-base">
                        ${price}.00
                      </span>
                    </li>
                    <li className="flex justify-between items-center mt-3">
                      <span className="text-[#90A3BF] font-semibold text-xs lg:font-medium lg:text-base">
                        Tax
                      </span>
                      <span className="text-[#1A202C] font-semibold text-base">
                        $0
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="relative ">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full py-[10px] pl-5 font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Apply promo code"
                    required
                  />
                  <span className="text-[#1A202C] font-semibold text-xs lg:text-base  absolute  inset-y-0 right-5 flex items-center  cursor-pointer">
                    Apply now
                  </span>
                </div>
              </div>
            );
          })}

          <ul className="flex justify-between mt-6">
            <li>
              <p className="text-[#1A202C] font-bold text-base lg:text-xl">
                Total Rental Price
              </p>
              <span className="text-[#90A3BF] font-normal text-xs lg:font-medium lg:text-sm">
                Overall price rental
              </span>
            </li>
            <li className="text-[#1A202C] font-bold text-base lg:text-[32px]">
              $80.00
            </li>
          </ul>
        </section>

        <section className="p-4 bg-white rounded-[10px] mt-8">
          <ul className="flex justify-between mt-6">
            <li>
              <p className="text-[#1A202C] font-bold text-base lg:text-xl">
                Billing Info
              </p>
              <span className="text-[#90A3BF] font-normal text-xs lg:font-medium lg:text-sm">
                Please enter your billing info
              </span>
            </li>
            <li className="text-[#90A3BF] font-normal text-xs lg:font-medium lg:text-sm">
              Step 1 of 4
            </li>
          </ul>

          <form className="mt-6">
            <div className=" ">
              <label
                htmlFor="name"
                className="text-[#1A202C] font-semibold text-sm lg:text-base"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name "
                required
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="address"
                className="text-[#1A202C] font-semibold text-sm lg:text-base"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Address "
                required
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="phoneNumber"
                className="text-[#1A202C] font-semibold text-sm lg:text-base"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="townOrCity"
                className="text-[#1A202C] font-semibold text-sm lg:text-base"
              >
                Town / City
              </label>
              <input
                type="text"
                id="townOrCity"
                className="block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Town or city"
                required
              />
            </div>
          </form>
        </section>

        <section className="p-4 bg-white rounded-[10px] mt-8">
          <ul className="flex justify-between mt-6">
            <li>
              <p className="text-[#1A202C] font-bold text-base lg:text-xl">
                Rental Info
              </p>
              <span className="text-[#90A3BF] font-normal text-xs lg:font-medium lg:text-sm">
                Please select your rental date
              </span>
            </li>
            <li className="text-[#90A3BF] font-normal text-xs lg:font-medium lg:text-sm">
              Step 2 of 4
            </li>
          </ul>

          <form className="mt-6">
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

            <div className="mt-5">
              <label
                htmlFor="locations"
                className="text-[#1A202C] font-semibold text-sm lg:text-base"
              >
                Locations
              </label>
              <Select label="Select your city" className="border-none block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500" >
                <Option>Tehran</Option>
                <Option>Kerman</Option>
                <Option>Mashhad</Option>
                <Option>Ilam</Option>
                <Option>Fars</Option>
              </Select>
            </div>
            {/* <div className="mt-5">
              <label
                htmlFor="locations"
                className="text-[#1A202C] font-semibold text-sm lg:text-base"
              >
                Locations
              </label>
              <input
                type="text"
                id="locations"
                className="block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Select your city"
                required
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="time"
                className="text-[#1A202C] font-semibold text-sm lg:text-base"
              >
                Time
              </label>
              <input
                type="text"
                id="time"
                className="block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Select your time"
                required
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="date"
                className="text-[#1A202C] font-semibold text-sm lg:text-base"
              >
                Date
              </label>
              <input
                type="text"
                id="date"
                className="block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Select your date"
                required
              />
            </div> */}
          </form>
        </section>
      </section>
    </>
  );
};

export default Payment;
