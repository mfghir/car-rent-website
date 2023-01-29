import React from "react";

const Ads = () => {
  return (
    <>
      <div className="px-6 mt-8 flex justify-center items-center lg:hidden">
        <img className="cursor-pointer" src="https://upcdn.io/kW15b2b/raw/Adsads-2Xbx.png" alt="AdsMobile" />
      </div>

      <div className="hidden px-16 mt-8 lg:flex lg:justify-between lg:items-center">
        <img
          className="w-[48%] cursor-pointer"
          src="https://upcdn.io/kW15b2b/raw/Ads%201-48cm.png"
          alt="adsOne"
        />
        <img
          className="w-[48%] cursor-pointer"
          src="https://upcdn.io/kW15b2b/raw/Ads%202-6fkp.png"
          alt="adsTwo"
        />
      </div>
    </>
  );
};

export default Ads;
