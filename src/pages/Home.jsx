import React from "react";
import DatePicker from "../components/DatePicker";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Ads from "../components/Ads";

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
