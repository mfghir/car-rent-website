import React, { useContext } from "react";
import NavbarIcon from "./NavbarIcon";
import SortCategory from "../common/SortCategory";
import ProductList from "./ProductList";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsProvider";

const DetailCar = () => {
  const [state, dispatch] = useContext(ProductsContext);
  const { id } = useParams();

  const filteredPop = state.popularCar.filter(
    (car) => car.id.toString() === id
  );
  const  filterRec = state.recommandedCar.filter(
    (car) => car.id.toString() === id
  );

  return (
    <>
      <NavbarIcon />
      <div className="md:flex md:flex-wrap ">
        <SortCategory />

        <div className="md:w-3/4">
          {[filteredPop || filterRec].map((item) => (
            <div className=" bg-red-200 h-80">
              DetailCar
              <h1>{item.name}</h1>
            </div>
          ))}
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default DetailCar;
