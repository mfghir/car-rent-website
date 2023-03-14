import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../context/ProductsProvider";

import {
  CloseCircle,
  Heart,
  Notification,
  SearchNormal1,
  Setting2,
  Setting4,
} from "iconsax-react";

const Navbar = () => {
  const [state, dispatch] = useContext(ProductsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [favShow, setFavShow] = useState(false);

  // const [isListEmpty, setIsListEmpty] = useState(true);

  // // Update isListEmpty state whenever favList changes
  // useEffect(() => {
  //   setIsListEmpty(state.favList.length === 0);
  // }, [state.favList]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", payload: searchTerm });
  };

  return (
    <div className="flex justify-between items-center flex-wrap pt-8 px-6 md:flex-nowrap lg:py-10 border-b border-[#C3D4E966]">
      <section className="flex justify-between items-center">
        <NavLink to="/">
          <h1 className="text-[#3563E9] text-2xl lg:text-[32px]">MORENT</h1>
        </NavLink>

        <form
          className="lg:w-96 md:w-80 h-12 lg:ml-16 md:ml-8 md:block hidden"
          onSubmit={submitHandler}
        >
          <div className="relative flex justify-between">
            <button
              type="submit"
              className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"
            >
              <SearchNormal1 color="#596780" />
            </button>

            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              type="search"
              placeholder="Search something here"
              className="block w-full p-4 pl-10 text-sm text-[#596780] border border-[#C3D4E966] rounded-[70px]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />

            <div className="absolute inset-y-0 right-0 flex items-center mr-3 ">
              <NavLink to="/category">
                <Setting4 color="#596780" />
              </NavLink>
            </div>
          </div>
        </form>
      </section>

      <div className="md:flex items-center hidden">
        <div className="flex">
          <span
            className=" inline-block relative"
            onClick={() => setFavShow(!favShow)}
          >
            <Heart
              color="#596780"
              variant="Bold"
              className="md:mr-5 cursor-pointer "
            />


          {state.favList && state.favList.length !== 0 ? (
    <span className="absolute w-[11px] h-[11px] bg-[#FF4423] rounded-xl -top-3 left-5"></span>):""}

            {favShow && state.favList.length !== 0 && (
              <div className="w-max p-3 bg-blue-gray-100 rounded absolute top-6 right-8">
                {Object.values(state.favList).map((favItem) => (
                  <p
                    className="my-2 flex items-center justify-between"
                    key={favItem.id}
                  >
                    {favItem.fav && (
                      <>
                        <span className="mr-2 text-sm">{favItem.name}</span>

                        <span
                          className="cursor-pointer"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FAVORITE",
                              payload: favItem,
                            })
                          }
                        >
                          <CloseCircle size="16" color="#FF4423" />
                        </span>
                      </>
                    )}
                  </p>
                ))}
              </div>
            ) }
          </span>
        </div>

        <div className="relative">
          <span className="absolute w-[11px] h-[11px] bg-[#FF4423] rounded-xl bottom-6 left-5"></span>
          <Notification color="#596780" variant="Bold" className="md:mr-5 " />
        </div>

        <NavLink to="/panel">
          <Setting2 color="#596780" variant="Bold" className="md:mr-5" />
        </NavLink>

        <img
          className="md:w-11 md:h-11"
          src="https://i.postimg.cc/Y2VT4G1c/Imageprofile.png"
          alt="Imageprofile"
        />
      </div>

      <img
        className="w-7 h-7 md:hidden"
        src="https://i.postimg.cc/Y2VT4G1c/Imageprofile.png"
        alt="Imageprofile"
      />

      <form className="mt-8 h-12 md:hidden " onSubmit={submitHandler}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <button
              type="submit"
              className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"
            >
              <SearchNormal1 color="#3e7deb" />
            </button>
          </div>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="search"
            id="default-search"
            placeholder="Search something here"
            className="block w-full p-4 pl-10 text-sm text-[#596780] border border-[#C3D4E966] rounded-[10px]  focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </form>

      <NavLink to="/category" className="md:hidden">
        <div className="w-12 h-12 mt-8 border border-[#C3D4E966] rounded-[10px] flex justify-center items-center">
          <Setting4 color="#596780" />
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
