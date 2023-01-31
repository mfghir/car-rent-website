import React, { useContext } from "react";
import SortCategory from "../common/SortCategory";
import { ProductsContext } from "../context/ProductsProvider";

import DatePicker from "../components/DatePicker";
import NavbarIcon from "../components/NavbarIcon";
import ProductList from "../components/ProductList";
import Footer from "./Footer";

const Category = () => {
  const [state, dispatch] = useContext(ProductsContext);

  return (
    <>
      <NavbarIcon />
      <div className="md:flex md:flex-wrap ">
        <SortCategory />
        <div className="md:w-3/4">
          <DatePicker />
          <ProductList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
