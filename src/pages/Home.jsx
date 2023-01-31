import React from "react";
import DatePicker from "../components/DatePicker";
import Navbar from "../components/Navbar";

import ProductList from "../components/ProductList";
import Ads from "./Ads";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Ads />
      <DatePicker />
      <ProductList />
      <Footer />
    </>
  );
};

export default Home;
