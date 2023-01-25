import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import PaymentNavbar from "./PaymentNavbar";

const Payment = () => {
  const [state, dispatch] = useContext(ProductsContext);

  // console.log(state.selectedItems.name)

  return (
    <div>
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
                  <div className="text-[#1A202C] font-semibold text-xs lg:text-base  absolute  inset-y-0 right-5 flex items-center  cursor-pointer">
                    Apply now
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default Payment;
