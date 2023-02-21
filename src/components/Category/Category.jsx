import React, { useContext } from "react";
import SortCategory from "../../common/SortCategory";
import { ProductsContext } from "../../context/ProductsProvider";

import DatePicker from "../DatePicker";
import NavbarIcon from "../NavbarIcon";
import ProductList from "../ProductList";

import Footer from "../../pages/Footer";
import CartCategory from "./CartCategory";

const Category = () => {
  const [state, dispatch] = useContext(ProductsContext);

  return (
    <>
      <NavbarIcon />
      <div className="md:flex md:flex-wrap md:justify-between ">
        <SortCategory />
        <div className="md:w-3/4">
          <DatePicker />

          {state.sortedCars.length === 0 ? (
            <ProductList />
          ) : (
            <section className="mx-8 grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-8 ">
              {state.sortedCars?.map((item, index) => (
                <CartCategory item={item} key={index} />
              ))}
            </section>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
