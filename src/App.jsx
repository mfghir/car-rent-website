import React from "react";
import { Route, Routes } from "react-router-dom";
import Ads from "./components/Ads";
import DatePicker from "./components/DatePicker";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="bg-[#F6F7F9]">
      <Navbar />
      <Ads />
      <DatePicker />

      <ProductList />

      <Routes>
        {/* <Route path="/view"  element={} /> */}
      </Routes>
    </div>
  );
};

export default App;
