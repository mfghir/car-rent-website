import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GasStation, Heart, Profile2User, Story } from "iconsax-react";

import { ProductsContext } from "../context/ProductsProvider";

const PopularCar = ({ item }) => {
  const [state, dispatch] = useContext(ProductsContext);
  const { name, kind, fav, img, fuel, capacity, price, offPrice, id } = item;

  return (
    <div className="rounded-[10px] bg-white p-4  mr-5 w-60 lg:mr-8 lg:w-[304px] ">
      <div className="flex justify-between items-center ">
        <p className="flex flex-col">
          <Link to={`/detailCar/${id}`}>
            <span className="font-semibold text-base text-[#1A202C] lg:text-xl lg:font-bold">
              {name}
            </span>
          </Link>
          <span className="font-medium text-xs text-[#90A3BF] lg:text-sm lg:font-bold">
            {kind}
          </span>
        </p>

        {fav ? (
          <Heart color="#ed3f3f" variant="Bold" />
        ) : (
          <Heart color="#90a3bf" />
        )}
      </div>

      <div className="relative flex justify-center items-center">
        <img className="my-8 " src={img} alt={name} />
        <div className="bg-gradient-to-t from-white to-white[/50%]  absolute w-full bottom-6 h-11 "></div>
      </div>

      <ul className="flex justify-center items-center">
        <li className="flex items-center">
          <GasStation
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            {fuel}
          </span>
        </li>

        <li className="flex items-center mx-4">
          <Story
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            Manual
          </span>
        </li>

        <li className="flex items-center">
          <Profile2User
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            {capacity}Person
          </span>
        </li>
      </ul>

      <div className="flex justify-between items-center mt-7">
        <div>
          <section className="flex justify-between items-end font-bold">
            <div className="text-[#1A202C] text-base lg:text-xl">
              ${offPrice === 0 ? price : offPrice}.00/
            </div>
            <span className="text-[#90A3BF] text-xs lg:text-sm">days</span>
          </section>

          <p className="text-[#90A3BF] font-medium text-xs mt-1 line-through  lg:text-sm lg:font-bold">
            {offPrice === 0 ? "" : `$${price}.00`}
          </p>
        </div>

        <Link to="/payment">
          <button
            className="bg-[#3563E9] rounded-[4px] text-white text-xs lg:text-base font-semibold px-4 py-[10px] lg:px-5 "
            onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}
          >
            Rental Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularCar;
