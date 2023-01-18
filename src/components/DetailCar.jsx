import React, { useContext } from "react";
import NavbarIcon from "./NavbarIcon";
import SortCategory from "../common/SortCategory";
import ProductList from "./ProductList";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsProvider";
import { Star1 } from "iconsax-react";

const DetailCar = () => {
  const [state, dispatch] = useContext(ProductsContext);
  const { id } = useParams();

  const filteredPop = state.popularCar.filter(
    (car) => car.id.toString() === id
  );
  const filterRec = state.recommandedCar.filter(
    (car) => car.id.toString() === id
  );

  const filterCarList = state.carList.filter((car) => car.id.toString() === id);

  // const testData = [state.popularCar ,state.recommandedCar ].filter(
  //   (car) => car.id.toString() === id
  // )

  return (
    <>
      <NavbarIcon />
      <div className="md:flex md:flex-wrap ">
        <SortCategory />

        <div className="md:w-3/4 px-6">
          {filterCarList.map((item) => {
            const {
              id,
              name,
              views,
              reviewer,
              caption,
              typecar,
              capacity,
              fuel,
            } = item;
            return (
              <div key={id} className="w-full bg-red-200">
                <section className="flex flex-wrap bg-red-900 ">
                  <img
                    className="rounded-lg"
                    src="https://upcdn.io/kW15b2b/raw/phone-categoryAds-ZkC2.png"
                    alt="categoryAds"
                  />
                  <div className="w-full flex justify-between items-center mt-6">
                    <img className="w-[30%]" src={views.view1} alt="view1" />
                    <img className="w-[30%]" src={views.view2} alt="view2" />
                    <img className="w-[30%]" src={views.view3} alt="view3" />
                  </div>
                </section>

                <section className="mt-8 bg-white p-4 ">
                  <h1 className="text-[#1A202C] font-bold text-xl">{name}</h1>
                  <div className="flex justify-between items-center w-[60%]  mt-[6px]">
                    <div className="flex justify-between items-center">
                      <Star1 size="12" color="#fbad39" variant="Bold" />
                      <Star1 size="12" color="#fbad39" variant="Bold" />
                      <Star1 size="12" color="#fbad39" variant="Bold" />
                      <Star1 size="12" color="#fbad39" variant="Bold" />
                      <Star1 size="12" color="#90A3BF" />
                    </div>

                    <p className="font-medium text-xs text-[#90A3BF]">
                      {reviewer}+ Reviewer
                    </p>
                  </div>

                  <p className="font-normal text-xs leading-6 mt-4">
                    {caption}
                  </p>

                  <ul className="flex justify-between items-center flex-wrap ">
                    <li>
                      <span>Type Car </span> {typecar}
                    </li>
                    <li>
                      <span>Capacity</span> {capacity}
                    </li>
                    <li>
                      <span>Steering</span> Manual
                    </li>
                    <li>
                      <span>Gasoline</span> {fuel}
                    </li>
                  </ul>
                </section>
              </div>
            );
          })}

          <ProductList />
        </div>
      </div>
    </>
  );
};

export default DetailCar;
