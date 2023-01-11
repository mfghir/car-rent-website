import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Category from "./components/Category";
import Footer from "./components/Footer";

import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="bg-[#F6F7F9]">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
