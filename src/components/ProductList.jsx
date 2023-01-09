import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PopularCarData } from "../data/popularCarData";
import CarCart from "./CarCart";

const ProductList = () => {
  const [data, setData] = useState(PopularCarData);

  return (
    <div className="mt-8 px-6 lg:px-16 lg:flex lg:items-center">
      <div className="flex justify-between items-center mb-5">
        <p className="text-[#90A3BF] text-sm font-semibold">Popular Car</p>
        <Link>
          <p className="text-[#3563E9] text-xs font-semibold">View All</p>
        </Link>
      </div>

      <section className="">
        {data.map((item) => (
          <CarCart item={item} key={item.id} />
        ))}
      </section>
    </div>
  );
};

export default ProductList;
