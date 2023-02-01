import React from "react";
import NavbarIcon from "../NavbarIcon";
import DetailsRental from "./DetailsRental";

import PanelMenu from "./PanelMenu";
import TopCarRental from "./TopCarRental";

const Panel = () => {
  return (
    <div className="bg-[#F6F7F9]">
      <NavbarIcon />
      <PanelMenu />

      <div className="lg:flex lg:justify-between">
        <DetailsRental />
        <TopCarRental />
      </div>
      </div>
    {/* </> */}
  );
};

export default Panel;
