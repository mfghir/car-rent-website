import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsProvider";

import Slider from "../../common/Slider";

const DetailCarProductList = () => {
  const [state, dispatch] = useContext(ProductsContext);
  const popularCarList = state.carList.filter(
    (car) => car.sort === "popularCar"
  );
  const recommandCarList = state.carList.filter(
    (car) => car.sort === "recommandCar"
  );

  return (
    <div className="mt-8 px-6 lg:px-16 ">
      {/* ------------------------------- Popular Car */}
      <div className="flex justify-between items-center mb-5 lg:mb-[30px]">
        <p className="text-[#90A3BF] text-sm font-semibold">Popular Car</p>
        <Link>
          <p className="text-[#3563E9] text-xs font-semibold">View All</p>
        </Link>
      </div>
      <Slider data={popularCarList} />

      {/* --------------------------- Recomendation Car */}
      <p className="text-[#90A3BF] text-sm font-semibold mt-8">
        Recomendation Car
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-8  ">
        <Slider data={recommandCarList} />
      </section>
    </div>
  );
};

export default DetailCarProductList;
