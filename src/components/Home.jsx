import React from "react";
import Ads from "./Ads";
import DatePicker from "./DatePicker";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <>
      <Navbar />
      <Ads />
      <DatePicker />
      <ProductList />
    </>
  );
};

export default Home;
