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
              typeCar,
              capacity,
              fuel,
              price,
              reviews,
            } = item;
            return (
              <div key={id} className="w-full">
                <section className="flex flex-wrap">
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

                <section className="mt-8 bg-white p-4 rounded-[10px]">
                  <h1 className="text-[#1A202C] font-bold text-xl">{name}</h1>
                  <div className="flex justify-between items-center w-[64%]  mt-[6px]">
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

                  <ul className="flex justify-between items-center flex-wrap text-xs mt-4">
                    <li className="w-[45%] flex justify-between items-center ">
                      <span className="text-[#90A3BF] font-medium block">
                        Type Car
                      </span>
                      <span className="text-[#1A202C] font-semibold block">
                        {typeCar}
                      </span>
                    </li>
                    <li className="w-[45%] flex justify-between items-center ">
                      <span className="text-[#90A3BF] font-medium">
                        Capacity
                      </span>
                      <span className="text-[#1A202C] font-semibold">
                        {capacity}Person
                      </span>
                    </li>
                    <li className="w-[45%] flex justify-between items-center mt-4">
                      <span className="text-[#90A3BF] font-medium">
                        Steering
                      </span>
                      <span className="text-[#1A202C] font-semibold">
                        Manual
                      </span>
                    </li>
                    <li className="w-[45%] flex justify-between items-center mt-4">
                      <span className="text-[#90A3BF] font-medium">
                        Gasoline
                      </span>
                      <span className="text-[#1A202C] font-semibold">
                        {fuel}
                      </span>
                    </li>
                  </ul>

                  <div className="flex justify-between items-center mt-8 ">
                    <div>
                      <section className="flex justify-between items-end font-bold">
                        <div className="text-[#1A202C] text-xl ">
                          ${`${Math.floor(price - price * 0.2)}`}.00/
                        </div>
                        <span className="text-[#90A3BF] text-xs">days</span>
                      </section>

                      <p className="text-xs mt-1 line-through">${price}.00</p>
                    </div>

                    <button className="bg-[#3563E9] rounded-[4px] text-white text-xs lg:text-base font-semibold px-4 py-[10px] lg:px-5">
                      Rental Now
                    </button>
                  </div>
                </section>

                <section className="mt-8 bg-white p-4 rounded-[10px]">
                  <div className="w-[136px] flex justify-between items-center ">
                    <p className="text-[#1A202C] font-semibold text-xl">
                      Reviews
                    </p>
                    <span className="bg-[#3563E9] rounded-[4px] text-white text-sm font-bold px-4 py-[3px]">
                      {Object.values(reviews).length}
                    </span>
                  </div>

                  {Object.values(reviews).map((item) => (
                    <div className="flex justify-between flex-wrap mb-5">
                      <img
                        className="w-[44px] lg:w-[56px]"
                        src={item.userpic}
                        alt="uerpic"
                      />
                      <section className="">
                        <p className="text-[#1A202C] text-base font-semibold leading-6">
                          {item.username}
                        </p>
                        <span className="text-[#90A3BF] text-xs font-medium">
                          {item.userjob}
                        </span>
                      </section>

                      <section className="">
                        <p className="text-[#90A3BF] text-xs font-medium leading-4">
                          {item.date}
                        </p>
                        <div className="flex justify-between items-center">

{/* {
item.userstar * (<span className="text-[#fbad39]">&#9733;</span> )


} */}

                          {/* {[...Array(5)].map((star, index) => {
                            return (
                              <>
                          
                                {/* <span className="text-[#fbad39]" value={item.userstar} >&#9733;</span> */}
                                {/* { +item.userstar - 5 ? (
                                  // <span className={`${5 - item.userstar} : text-[#fbad39] : "" `}>
                                  <span className="text-[#fbad39]">
                                    &#9733;
                                  </span>
                             ) : (
                                   <span className="">&#9733;</span>
                               )}  */}
                              {/* </>
                            );
                          })} */} 
                        </div>
                      </section>
                    </div>
                  ))}
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
