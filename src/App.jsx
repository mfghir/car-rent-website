import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./components/Category";
import Footer from "./pages/Footer";

import ProductList from "./components/ProductList";
import DetailCar from "./components/DetailCar";

const App = () => {
  return (
    <div className="bg-[#F6F7F9]">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/detailCar" element={<DetailCar />} />
        <Route path="/detailCar/:id" element={<DetailCar />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
