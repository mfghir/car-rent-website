import React from "react";
import NavbarIcon from "../NavbarIcon";
import DetailsRental from "./DetailsRental";

import PanelMenu from "./PanelMenu";
import TopCarRental from "./TopCarRental";

const Panel = () => {
  return (
    <>
      <NavbarIcon />

      <section className="lg:flex lg:justify-between">
        <PanelMenu />

        <div className="lg:flex lg:justify-between p-6 lg:w-4/5">
          <DetailsRental />
          <TopCarRental />
        </div>
      </section>
    </>
  );
};

export default Panel;
