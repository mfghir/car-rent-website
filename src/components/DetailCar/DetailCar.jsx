import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavbarIcon from "../NavbarIcon";

import { ArrowDown2, ArrowUp2, Heart } from "iconsax-react";
import { ProductsContext } from "../../context/ProductsProvider";
import DetailCarProductList from "./DetailCarProductList";

import SortCategory from "../../common/SortCategory";
import StarRating from "../../common/StarRating";
import Footer from "../../pages/Footer";

const DetailCar = () => {
  const [state, dispatch] = useContext(ProductsContext);
  const { id } = useParams();

  const [readMore, setReadMore] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const filterCarList = state.carList?.filter(
    (car) => car.id.toString() === id
  );

  console.log(filterCarList);
  const favListIcon = state.favList.filter((it) => it.id === filterCarList.id);
  const favHandler = (item) => {
    dispatch({ type: "TOGGLE_ADD_FAVORITE", payload: item });
  };

  return (
    <>
      <NavbarIcon />
      <div className="md:flex md:flex-wrap ">
        <SortCategory />

        <div className="md:w-3/4 px-6">
          {filterCarList?.map((item) => {
            const {
              id,
              name,
              fav,
              reviewer,
              caption,
              typeCar,
              capacity,
              fuel,
              price,
              offPrice,
              reviews,
            } = item;
            return (
              <div
                key={id}
                className="w-full lg:flex lg:flex-wrap lg:items-start"
              >
                <div className="w-full lg:flex lg:mt-8">
                  <section className="flex flex-wrap lg:w-[48%] lg:mr-8">
                    <img
                      className="rounded-lg lg:hidden"
                      src="https://i.postimg.cc/wMsf52DC/phone-category-Ads.png"
                      alt="phoneCategoryAds"
                    />
                    <img
                      className="rounded-[10px] hidden lg:block"
                      src="https://i.postimg.cc/43xTvCyj/desk-Category-Ads.png"
                      alt="deskCategoryAds"
                    />

                    
                    <div className="w-full flex justify-between items-center mt-6">
                      <img
                        className="w-[30%]"
                        src="https://i.postimg.cc/mk0nKJbZ/View-1.png"
                        alt="view1"
                      />
                      <img
                        className="w-[30%]"
                        src="https://i.postimg.cc/Hk0NP6FH/View-2.png"
                        alt="view2"
                      />
                      <img
                        className="w-[30%]"
                        src="https://i.postimg.cc/hPd6VDrX/View-3.png"
                        alt="view3"
                      />
                    </div>
                  </section>

                  <section className="mt-8 bg-white p-4 rounded-[10px] lg:w-[48%] lg:p-6 lg:mt-0">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[#1A202C] font-bold text-xl lg:text-[32px]">
                        {name}
                      </h1>
                      <span
                        className="hidden md:block"
                        onClick={() => favHandler(item)}
                      >
                        {fav? (
                          <Heart color="#ed3f3f" variant="Bold" />
                        ) : (
                          <Heart color="#90a3bf" />
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between items-center   mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[#fbad39]  mr-[2px] lg:scale-[1.7] lg:mr-[5px] ">
                          &#9733;
                        </span>
                        <span className="text-[#fbad39]  mr-[2px] lg:scale-[1.7] lg:mr-[5px] ">
                          &#9733;
                        </span>
                        <span className="text-[#fbad39]  mr-[2px] lg:scale-[1.7] lg:mr-[5px] ">
                          &#9733;
                        </span>
                        <span className="text-[#fbad39]  mr-[2px] lg:scale-[1.7] lg:mr-[5px] ">
                          &#9733;
                        </span>
                        <span className="text-[#90A3BF]  mr-[2px] lg:scale-[1.7] lg:mr-[5px] ">
                          &#9734;
                        </span>
                        <p className="font-medium text-xs text-[#90A3BF] lg:text-sm">
                          {reviewer}+ Reviewer
                        </p>
                      </div>
                    </div>

                    <p className="font-normal text-xs leading-6 mt-4 lg:text-xl lg:mt-8 lg:leading-10">
                      {caption}
                    </p>

                    <ul className="flex justify-between items-center flex-wrap text-xs mt-4 lg:text-xl lg:mt-8">
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

                    <div className="flex justify-between items-center mt-8 lg:mt-11">
                      <div>
                        <section className="flex justify-between items-end font-bold">
                          <div className="text-[#1A202C] text-xl  lg:text-[28px]">
                            ${offPrice === 0 ? price : offPrice}.00/
                          </div>
                          <span className="text-[#90A3BF] text-xs lg:text-base">
                            days
                          </span>
                        </section>

                        <p className="text-xs mt-1 line-through  lg:text-base">
                          {offPrice === 0 ? "" : `$${price}.00`}
                        </p>
                      </div>

                      <Link to="/payment">
                        <button className="bg-[#3563E9] rounded-[4px] text-white text-xs lg:text-base font-semibold px-4 py-[10px] lg:px-5">
                          Rental Now
                        </button>
                      </Link>
                    </div>
                  </section>
                </div>

                <section className="mt-8 bg-white py-4 px-2 lg:p-6 rounded-[10px] lg:w-full">
                  <div className="w-[136px] flex justify-between items-center ">
                    <p className="text-[#1A202C] font-semibold text-xl">
                      Reviews
                    </p>
                    <span className="bg-[#3563E9] rounded-[4px] text-white text-sm font-bold px-4 py-[3px]">
                      {Object.values(reviews).length}
                    </span>
                  </div>

                  {Object.values(reviews)
                    .slice(0, showAll ? Object.values(reviews).length : 2)
                    .map((item, index) => {
                      const {
                        userpic,
                        username,
                        userjob,
                        date,
                        userstar,
                        useropion,
                      } = item;
                      return (
                        <section className="flex  mb-5 mt-6" key={index}>
                          <img
                            className="w-[44px] h-[44px] lg:w-[56px] lg:h-[56px] mr-2 rounded-full"
                            src={userpic}
                            alt="uerpic"
                          />

                          <div className="flex justify-between flex-wrap">
                            <div className="flex justify-between items-start w-full">
                              <section>
                                <p className="text-[#1A202C] text-base font-semibold lg:text-xl lg:font-bold">
                                  {username}
                                </p>
                                <span className="text-[#90A3BF] text-xs font-medium lg:text-sm block w-full">
                                  {userjob}
                                </span>
                              </section>

                              <section className="flex flex-wrap justify-end flex-col ">
                                <p className="text-[#90A3BF] text-xs font-medium leading-6 lg:text-sm">
                                  {date}
                                </p>
                                <StarRating rating={userstar} />
                              </section>
                            </div>

                            <p
                              className={`text-[#90A3BF] font-normal text-xs leading-6  w-full lg:text-sm lg:leading-7 lg:mt-3
                               ${!readMore ? "line-clamp-2" : "line-clamp-0"}`}
                              onClick={() => setReadMore(!readMore)}
                            >
                              {useropion}
                            </p>
                          </div>
                        </section>
                      );
                    })}

                  <div
                    onClick={() => setShowAll(!showAll)}
                    className="flex justify-between items-center flex-row mx-auto mt-6 px-5 py-2 text-[#90A3BF] w-fit rounded hover:bg-[#90A3BF] hover:text-[#1A202C] transition cursor-pointer"
                  >
                    <span className="font-medium text-sm mr-2">
                      {showAll ? "Close All" : "Show All"}
                    </span>
                    {showAll ? (
                      <ArrowUp2 size="14" />
                    ) : (
                      <ArrowDown2 size="14" />
                    )}
                  </div>
                </section>
              </div>
            );
          })}

          {/* <ProductList /> */}
          <DetailCarProductList />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DetailCar;
