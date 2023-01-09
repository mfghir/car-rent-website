import React from "react";
import img from "../assets/img";

const Ads = () => {
  return (
    <>
      <div className="px-6 mt-8 flex justify-center items-center lg:hidden">
        <img className="cursor-pointer" src={img.AdsMobile} alt="AdsMobile" />
      </div>

      <div className="hidden px-16 mt-8 lg:flex lg:justify-between lg:items-center">
        <img
          className="w-[48%] cursor-pointer"
          src={img.adsOne}
          alt=".adsOne"
        />
        <img
          className="w-[48%] cursor-pointer"
          src={img.adsTwo}
          alt=".adsTwo"
        />
      </div>
    </>
  );
};

export default Ads;
