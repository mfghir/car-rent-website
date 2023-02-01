import { Option, Select } from "@material-tailwind/react";
import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import PaymentNavbar from "./PaymentNavbar";

const Payment = () => {
  const [state, dispatch] = useContext(ProductsContext);

  return (
    <>
      <PaymentNavbar />

      <section className="p-6 lg:p-8 lg:flex lg:flex-wrap lg:flex-row-reverse lg:items-start lg:justify-between">
        <section className="lg:w-[38%] p-4 bg-white rounded-[10px]">
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
              ${state.total}.00
            </li>
          </ul>
        </section>

        <div className="lg:w-3/5">
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
              <li className="text-[#90A3BF] font-medium text-xs lg:font-medium lg:text-sm">
                Step 1 of 4
              </li>
            </ul>

            <form className="mt-6 lg:flex lg:justify-between lg:flex-wrap lg:items-start">
              <div className="lg:w-[48%] ">
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

              <div className="mt-5 lg:mt-0 lg:w-[48%]">
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

              <div className="mt-5 lg:mt-6 lg:w-[48%] ">
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

              <div className="mt-5 lg:mt-6 lg:w-[48%]">
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
              <li className="text-[#90A3BF] font-medium text-xs lg:font-medium lg:text-sm">
                Step 2 of 4
              </li>
            </ul>

            <div className="flex items-center mt-4 lg:mt-8">
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
                Drop - Off
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

          <section className="p-4 bg-white rounded-[10px] mt-8">
            <ul className="flex justify-between mt-6">
              <li>
                <p className="text-[#1A202C] font-bold text-base lg:text-xl">
                  Payment Method
                </p>
                <span className="text-[#90A3BF] font-normal text-xs lg:font-medium lg:text-sm">
                  Please enter your payment method
                </span>
              </li>
              <li className="text-[#90A3BF] font-medium text-xs lg:font-medium lg:text-sm">
                Step 3 of 4
              </li>
            </ul>

            <div className="p-4 bg-[#F6F7F9] mt-6 rounded-[10px]">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    defaultChecked
                    id="creditCard"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="creditCard"
                    className="ml-2 text-base font-semibold text-[#1A202C]"
                  >
                    Credit Card
                  </label>
                </div>

                <img src="https://i.postimg.cc/63bgfTgv/Visa.png" alt="Visa" />
              </div>

              <form className="lg:flex lg:justify-between lg:flex-wrap lg:items-start">
                <div className="mt-5 lg:mt-6 lg:w-[48%]">
                  <label
                    htmlFor="cardNumber"
                    className="text-[#1A202C] font-semibold text-sm lg:text-base"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-white rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Card number"
                    required
                  />
                </div>

                <div className="mt-5 lg:mt-6 lg:w-[48%]">
                  <label
                    htmlFor="cardHolder"
                    className="text-[#1A202C] font-semibold text-sm lg:text-base"
                  >
                    Card Holder
                  </label>
                  <input
                    type="text"
                    id="cardHolder"
                    className="block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-white rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Card holder"
                    required
                  />
                </div>

                <div className="mt-5 lg:mt-6 lg:w-[48%]">
                  <label
                    htmlFor="exprationDate"
                    className="text-[#1A202C] font-semibold text-sm lg:text-base"
                  >
                    Expration Date
                  </label>
                  <input
                    type="text"
                    id="exprationDate"
                    className="block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-white rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
                    placeholder="DD / MM YY"
                    required
                  />
                </div>

                <div className="mt-5 lg:mt-6 lg:w-[48%]">
                  <label
                    htmlFor="CVC"
                    className="text-[#1A202C] font-semibold text-sm lg:text-base"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    id="CVC"
                    className="block w-full mt-3 lg:mt-4 px-5 py-[18px] font-medium  text-xs  lg:text-sm text-[#90A3BF] bg-white rounded-[10px] outline-blue-500  focus:ring-blue-500 focus:border-blue-500"
                    placeholder="CVC"
                    required
                  />
                </div>
              </form>
            </div>

            <div className="flex justify-between items-center rounded-[10px] p-4 bg-[#F6F7F9] mt-5 ">
              <div className="flex items-center">
                <input
                  id="PayPal"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="PayPal"
                  className="ml-2 text-base font-semibold text-[#1A202C]"
                >
                  PayPal
                </label>
              </div>

              <img
                src="https://i.postimg.cc/C1x98bP0/PayPal.png"
                alt="PayPal"
              />
            </div>

            <div className="flex justify-between items-center rounded-[10px] p-4 bg-[#F6F7F9] mt-5">
              <div className="flex items-center">
                <input
                  id="Bitcoin"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="Bitcoin"
                  className="ml-2 text-base font-semibold text-[#1A202C]"
                >
                  Bitcoin
                </label>
              </div>

              <img
                src="https://i.postimg.cc/bvTKdmRL/Bitcoin.png"
                alt="Bitcoin"
              />
            </div>
          </section>

          <section className="p-4 bg-white rounded-[10px] mt-8">
            <ul className="flex justify-between mt-6">
              <li className="pr-9">
                <p className="text-[#1A202C] font-bold text-base lg:text-xl">
                  Confirmation
                </p>
                <span className="text-[#90A3BF] font-normal text-xs lg:font-medium lg:text-sm">
                  We are getting to the end. Just few clicks and your rental is
                  ready!
                </span>
              </li>
              <li className="text-[#90A3BF] font-medium text-xs lg:font-medium lg:text-sm w-2/5">
                Step 4 of 4
              </li>
            </ul>

            <div className="flex justify-between items-center rounded-[10px] py-[10px] px-4 bg-[#F6F7F9] mt-6">
              <input
                id="Bitcoin"
                type="checkbox"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="Bitcoin"
                className="text-[#1A202C] ml-4 font-medium text-xs  lg:font-semibold lg:text-base"
              >
                I agree with sending an Marketing and newsletter emails. No
                spam, promissed!
              </label>
            </div>

            <div className="flex justify-between items-center rounded-[10px] py-[10px] px-4 bg-[#F6F7F9] mt-6">
              <input
                id="Bitcoin"
                type="checkbox"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="Bitcoin"
                className="text-[#1A202C] ml-4 font-medium text-xs  lg:font-semibold lg:text-base"
              >
                I agree with our terms and conditions and privacy policy!
              </label>
            </div>

            <button className="mt-6 bg-[#3563E9] rounded-[4px] text-white text-xs lg:text-base font-semibold px-4 py-[10px]">
              Rental Now
            </button>

            <div className="mt-8">
              <img
                className="mb-4"
                src="https://i.postimg.cc/x80KJNYN/ic-security-safety.png"
                alt="ic-security-safety"
              />
              <p className="text-[#1A202C] font-bold text-base lg:text-xl">
                Confirmation
              </p>
              <span className="text-[#90A3BF] font-normal text-xs lg:font-medium lg:text-sm">
                We are getting to the end. Just few clicks and your rental is
                ready!
              </span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Payment;
