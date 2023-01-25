import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Category from "./components/Category";
import Footer from "./pages/Footer";
import DetailCar from "./components/DetailCar/DetailCar";

import Payment from "./components/Payment/Payment";

const App = () => {
  return (
    <div className="bg-[#F6F7F9]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/detailCar" element={<DetailCar />} />
        <Route path="/detailCar/:id" element={<DetailCar />} />

        <Route path="/payment/" element={<Payment />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
