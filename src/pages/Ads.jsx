import React from "react";

const Ads = () => {
  return (
    <>
      <div className="px-6 mt-8 flex justify-center items-center lg:hidden">
        <img className="cursor-pointer" src="https://i.postimg.cc/MGWLky8B/Adsads.png" alt="AdsMobile" />
      </div>

      <div className="hidden px-16 mt-8 lg:flex lg:justify-between lg:items-center">
        <img
          className="w-[48%] cursor-pointer"
          src="https://i.postimg.cc/XqZhH46D/Ads-1.png"
          alt="adsOne"
        />
        <img
          className="w-[48%] cursor-pointer"
          src="https://i.postimg.cc/fRQFKG2B/Ads-2.png"
          alt="adsTwo"
        />
      </div>
    </>
  );
};

export default Ads;
