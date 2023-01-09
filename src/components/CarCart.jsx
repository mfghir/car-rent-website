import { GasStation, Heart, Profile2User, Story } from "iconsax-react";
import React from "react";
import img from "../assets/img";

const CarCart = () => {
  return (
    <div>
      <div>
        <span>name</span>
        <Heart color="#90a3bf" />
      </div>

      <img src={img.popularCar1} alt="popularCar1" />

      <ul>
        <li>
          <GasStation size="14" color="#90a3bf" variant="Bold" />
          <span>fuel</span>
        </li>
        <li>
          <Story size="14" color="#90a3bf" variant="Bold" />
          <span>Manual</span>
        </li>
        <li>
          <Profile2User size="14" color="#90a3bf" variant="Bold" />
          <span>people</span>
        </li>
      </ul>
    </div>
  );
};

export default CarCart;

{
  /* <Heart color="#ed3f3f" variant="Bold"/> */
}
