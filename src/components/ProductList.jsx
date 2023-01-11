import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../common/Slider";

import { popularCarData } from "../data/popularCarData";
import { recommandCarData } from "../data/recommandCarData";
import RecommandCar from "./RecommandCar";

const ProductList = () => {
  const [popCardata, setPopCarData] = useState(popularCarData);
  const [recCardata, setRecCarData] = useState(recommandCarData);

  return (
    <div className="mt-8 px-6 lg:px-16 ">
      {/* ------------------------------- Popular Car */}
      <div className="flex justify-between items-center mb-5 lg:mb-[30px]">
        <p className="text-[#90A3BF] text-sm font-semibold">Popular Car</p>
        <Link>
          <p className="text-[#3563E9] text-xs font-semibold">View All</p>
        </Link>
      </div>
      <Slider data={popCardata} />

      {/* --------------------------- Recomendation Car */}

      <p className="text-[#90A3BF] text-sm font-semibold mt-8">
        Recomendation Car
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 ">
        {recCardata.map((item) => (
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
