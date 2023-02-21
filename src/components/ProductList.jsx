import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../context/ProductsProvider";

import RecommandCar from "./RecommandCar";
import Slider from "../common/Slider";
import CartCategory from "./Category/CartCategory";

const ProductList = () => {
  const [state, dispatch] = useContext(ProductsContext);
  const popularCarList = state.carList.filter(
    (car) => car.sort === "popularCar"
  );
  const recommandCarList = state.carList.filter(
    (car) => car.sort === "recommandCar"
  );

  return (
    <div className="mt-8 px-6 lg:px-16 ">
      {state.filteredCars.length ===0  ? "" :(
        <div className="bg-gray-300  w-full rounded-xl my-7">
          <section className="mx-8 grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-8  pb-4">
            {state.filteredCars.map((item) => (
              <CartCategory key={item.id} item={item} />
            ))}
            
          </section>
        </div>
        
      )}

      {/* ------------------------------- Popular Car */}
      <div className="flex justify-between items-center mb-5 lg:mb-[30px]">
        <p className="text-[#90A3BF] text-sm font-semibold">Popular Car</p>
        <NavLink>
          <p className="text-[#3563E9] text-xs font-semibold">View All</p>
        </NavLink>
      </div>

      <Slider data={popularCarList} />

      {/* --------------------------- Recomendation Car */}

      <p className="text-[#90A3BF] text-sm font-semibold mt-8">
        Recomendation Car
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-8  ">
        {recommandCarList.map((item) => (
          <RecommandCar item={item} key={item.id} />
        ))}
      </section>

      <div className="flex items-center mt-12 lg:mt-16">
        <button className=" bg-[#3563E9] rounded-[4px] text-white text-xs lg:text-base font-semibold px-4 py-[10px] mx-auto">
          Show More Car
        </button>
        <span className="text-sm font-bold lg:font-medium text-[#90A3BF]">
          120 Car
        </span>
      </div>
    </div>
  );
};

export default ProductList;
