import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../common/Slider";
import { popularCarData } from "../data/popularCarData";
import { recommandCarData } from "../data/recommandCarData";
import CarCart from "./PopularCar";
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
      <section className="flex justify-between items-center flex-wrap  ">
        {recCardata.map((item) => (
          <RecommandCar item={item} key={item.id} />
        ))}
      </section>
    </div>
  );
};

export default ProductList;
