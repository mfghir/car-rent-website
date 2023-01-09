import React from "react";
import Ads from "./components/Ads";
import DatePicker from "./components/DatePicker";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Ads />
      <DatePicker />

      <ProductList />
    </div>
  );
};

export default App;
