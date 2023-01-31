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
      <div className="flex justify-between items-center mb-5 lg:mb-[30px]">
        <p className="text-[#90A3BF] text-sm font-semibold">
          Recomendation Car
        </p>
        <Link>
          <p className="text-[#3563E9] text-xs font-semibold">View All</p>
        </Link>
      </div>
      <Slider data={recommandCarList} />
    </div>
  );
};

export default DetailCarProductList;
