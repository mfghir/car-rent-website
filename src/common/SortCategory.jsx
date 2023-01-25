import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";

const SortCategory = () => {
  const [state, dispatch] = useContext(ProductsContext);
  const isOpentHandler = () => {
    dispatch({ type: "IS_OPEN" });
    !state.isOpen == state.isOpen;
  };

  return (
    <div
      className={`w-2/3 h-full overflow-y-scroll fixed z-10 top-0 bg-white  transition-transform  md:translate-x-0 md:w-1/4 md:top-32 md:static md:h-full p-8
      ${
        state.isOpen
          ? " translate-x-0  transition-transform"
          : "-translate-x-full  transition-transform"
      }`}
    >
      <section>
        <span className="font-semibold text-xs text-[#90A3BF] tracking-[1px]">
          TYPE
        </span>

        {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((item) => (
          <div
            className="flex items-center mb-4 font-semibold mt-7 text-base"
            key={item}
          >
            <input
              checked
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-[#90A3BF] rounded-lg"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm text-[#596780]"
            >
              {item}
            </label>
            <span className="text-[#90A3BF] pl-1">(10)</span>
          </div>
        ))}
      </section>

      <section className="mt-14">
        <span className="font-semibold text-xs text-[#90A3BF] tracking-[1px]">
          CAPACITY
        </span>

        {["2 Person", "4 Person", "6 Person", "8 Person"].map((item) => (
          <div
            className="flex items-center mb-4 font-semibold mt-7 text-base"
            key={item}
          >
            <input
              checked
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 focus:accent-[#3563E9] focus:border-transparent border-[#90A3BF] rounded-lg"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm text-[#596780]"
            >
              {item}
            </label>
            <span className="text-[#90A3BF] pl-1">(10)</span>
          </div>
        ))}
      </section>

      <section>
        <span className="font-semibold text-xs text-[#90A3BF] tracking-[1px]">
          PRICE
        </span>

        <div className="mt-8">
          <input
            id="default-range"
            type="range"
            step="10"
            min="1"
            max="200"
            value="100"
            className="w-full h-2 bg-[#90A3BF] appearance-none rounded  cursor-pointer  focus:outline-none focus:ring-0 focus:shadow-none"
          />
        </div>
      </section>
    </div>
  );
};

export default SortCategory;
