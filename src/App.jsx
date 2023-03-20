import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Footer from "./pages/Footer";
import DetailCar from "./components/DetailCar/DetailCar";
import Category from "./components/Category/Category";

import Payment from "./components/Payment/Payment";
import Panel from "./components/Panel/Panel";
import SearchPage from "./components/SearchPage";
import FavoriteListPage from "./components/FavoriteListPage";

const App = () => {
  return (
    <div className="bg-[#F6F7F9]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/detailCar" element={<DetailCar />} />

        <Route path="/detailCar/:id" element={<DetailCar />} />
        <Route path="/favorite-list" element={<FavoriteListPage />} />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/panel" element={<Panel />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
