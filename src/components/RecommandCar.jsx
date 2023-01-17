import { GasStation, Heart, Profile2User, Story } from "iconsax-react";
import React from "react";
import { NavLink } from "react-router-dom";

const RecommandCar = ({ item }) => {
  return (
    <NavLink to={`/detailCar/${item.id}`}  >
    <div className="rounded-[10px] bg-white p-4 mt-5 ">
      <div className="flex justify-between items-center ">
        <p className="flex flex-col">
          <span className="font-semibold text-base text-[#1A202C] lg:text-xl lg:font-bold">
            {item.name}
          </span>
          <span className="font-medium text-xs text-[#90A3BF] lg:text-sm lg:font-bold">
            {item.kind}
          </span>
        </p>

        {item.fav ? (
          <Heart color="#ed3f3f" variant="Bold" />
        ) : (
          <Heart color="#90a3bf" />
        )}
      </div>

      <section className=" flex justify-between items-center lg:hidden">
        <div className="relative flex justify-center items-center">
          <img className="my-8 " src={item.img} alt={item.name} />
          <div className="bg-gradient-to-t from-white to-white[/50%]  absolute w-full bottom-6 h-11 "></div>
        </div>

        <ul className="flex items-start flex-col ml-5">
          <li className="flex items-center">
            <GasStation className="w-[14px] h-[14px] lg:w-6 md:h-6" color="#90a3bf" variant="Bold" />
            <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
              {item.fuel}
            </span>
          </li>

          <li className="flex items-center my-4">
            <Story className="w-[14px] h-[14px] lg:w-6 md:h-6" color="#90a3bf" variant="Bold" />
            <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
              Manual
            </span>
          </li>

          <li className="flex items-center">
            <Profile2User className="w-[14px] h-[14px] lg:w-6 md:h-6" color="#90a3bf" variant="Bold" />
            <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
              {item.people}People
            </span>
          </li>
        </ul>
      </section>

      {/* ------------------------------------------------   for mobile to tablet */}
      <div className="relative justify-center items-center hidden lg:flex">
        <img className="my-8 " src={item.img} alt={item.name} />
        <div className="bg-gradient-to-t from-white to-white[/50%]  absolute w-full bottom-6 h-11 "></div>
      </div>

      <ul className="justify-center items-center hidden lg:flex">
        <li className="flex items-center">
          <GasStation className="w-[14px] h-[14px] lg:w-6 md:h-6" color="#90a3bf" variant="Bold" />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            {item.fuel}
          </span>
        </li>

        <li className="flex items-center mx-4">
          <Story className="w-[14px] h-[14px] lg:w-6 md:h-6" color="#90a3bf" variant="Bold" />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            Manual
          </span>
        </li>

        <li className="flex items-center">
          <Profile2User className="w-[14px] h-[14px] lg:w-6 md:h-6" color="#90a3bf" variant="Bold" />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            {item.people}People
          </span>
        </li>
      </ul>
      {/* ----------------------------------------------------------------- */}

      <div className="flex justify-between items-center mt-7">
        <p className="text-[#1A202C] font-bold ">
          ${item.price}.00/
          <span className="text-[#90A3BF] text-xs pl-1">day</span>
        </p>
        
        <button className="bg-[#3563E9] rounded-[4px] text-white text-xs lg:text-base font-semibold px-4 py-[10px] lg:px-5">
          Rental Now
        </button>
      </div>

    </div>
    </NavLink>
  );
};

export default RecommandCar;
