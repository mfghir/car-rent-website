import { GasStation, Heart, Profile2User, Story } from "iconsax-react";
import React from "react";

const RecommandCar = ({ item }) => {
  return (
    <div className="rounded-[10px] bg-white p-4 mt-5 w-[327px] lg:w-[304px] ">
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

      <section className=" flex justify-between items-center">
        <div className="relative flex justify-center items-center">
          <img className="my-8 " src={item.img} alt={item.name} />
          <div className="bg-gradient-to-t from-white to-white[/50%]  absolute w-full bottom-6 h-11 "></div>
        </div>

        <ul className="flex items-start flex-col ml-5">
          <li className="flex items-center">
            <GasStation size="14" color="#90a3bf" variant="Bold" />
            <span className="font-medium text-xs text-[#90A3BF] ml-1">
              {item.fuel}
            </span>
          </li>

          <li className="flex items-center my-4">
            <Story size="14" color="#90a3bf" variant="Bold" />
            <span className="font-medium text-xs text-[#90A3BF] ml-1">
              Manual
            </span>
          </li>

          <li className="flex items-center">
            <Profile2User size="14" color="#90a3bf" variant="Bold" />
            <span className="font-medium text-xs text-[#90A3BF] ml-1">
              {item.people}People
            </span>
          </li>
        </ul>
      </section>

      <div className="flex justify-between items-center mt-7">
        <p className="text-[#1A202C] font-bold ">
          ${item.price}.00/
          <span className="text-[#90A3BF] text-xs pl-1">day</span>
        </p>
        <button className="bg-[#3563E9]  rounded-[4px] text-white text-xs font-semibold px-4 py-[10px] ">
          Rental Now
        </button>
      </div>
    </div>
  );
};

export default RecommandCar;
