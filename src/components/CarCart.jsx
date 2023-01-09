import { GasStation, Heart, Profile2User, Story } from "iconsax-react";
import React from "react";
import img from "../assets/img";

const CarCart = ({ item }) => {
  return (
    <div className="rounded-[10px]  bg-white p-4 ">
      <div className="flex justify-between items-center ">
        <p className="flex flex-col">
          <span className="font-semibold text-base text-[#1A202C]">
            {item.name}
          </span>
          <span className="font-medium text-xs text-[#90A3BF]">
            {item.kind}
          </span>
        </p>

        {item.fav ? (
          <Heart color="#ed3f3f" variant="Bold" />
        ) : (
          <Heart color="#90a3bf" />
        )}
      </div>

      <img className="my-8 mx-auto" src={item.img} alt={item.name} />

      <ul className="flex justify-center items-center ">
        <li className="flex items-center">
          <GasStation size="14" color="#90a3bf" variant="Bold" />
          <span className="font-medium text-xs text-[#90A3BF] ml-1">
            {item.fuel}
          </span>
        </li>

        <li className="flex items-center mx-4">
          <Story size="14" color="#90a3bf" variant="Bold" />
          <span className="font-medium text-xs text-[#90A3BF] ml-1">
            Manual
          </span>
        </li>

        <li className="flex items-center">
          <Profile2User size="14" color="#90a3bf" variant="Bold" />
          <span className="font-medium text-xs text-[#90A3BF] ml-1">
            {item.people}
          </span>
        </li>
      </ul>

      <div>
        <p>${item.price}/<span>day</span> </p>
        <button>Rental Now</button>
      </div>
    </div>
  );
};

export default CarCart;
