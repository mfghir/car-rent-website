import {
  Heart,
  Notification,
  SearchNormal1,
  Setting2,
  Setting4,
} from "iconsax-react";
import React, { useContext, useRef, useState } from "react";
import { ProductsContext } from "../context/ProductsProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [state, dispatch] = useContext(ProductsContext);
  const [searchTerm, setSearchTerm] = useState("");
  // const nameRef = useRef();

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchTerm(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({ type: "SEARCH", payload: searchTerm });
  };

  const filterCoins = (e) => {
    // const result = state.filteredCars.filter((coin) =>
    //     coin.name.toLowerCase().includes(search.toLowerCase())
    // );
    // dispatch({
    //   type: "SEARCH",
    //   payload: e.target.value,
    // });
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
              // ref={nameRef}
              onChange={(e) => setSearchTerm(e.target.value)}
              // value={searchTerm}
              type="search"
              className="block w-full p-4 pl-10 text-sm text-[#596780] border border-[#C3D4E966] rounded-[70px]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search something here"
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
        <Heart color="#596780" variant="Bold" className="md:mr-5" />

        <div className="relative">
          <span className="absolute w-[11px] h-[11px] bg-[#FF4423] rounded-xl bottom-6 left-5"></span>
          <Notification color="#596780" variant="Bold" className="md:mr-5 " />
        </div>
        <Link to="/panel">
          <Setting2 color="#596780" variant="Bold" className="md:mr-5" />
        </Link>

        <img
          className="md:w-11 md:h-11"
          src="https://upcdn.io/kW15b2b/raw/Imageprofile-46DF.png"
          alt="Imageprofile"
        />
      </div>

      <img
        className="w-7 h-7 md:hidden"
        src="https://upcdn.io/kW15b2b/raw/Imageprofile-46DF.png"
        alt="Imageprofile"
      />

      {/* <> */}
      <form className="mt-8 h-12 md:hidden">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchNormal1 color="#596780" className="" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-[#596780] border border-[#C3D4E966] rounded-[10px]  focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search something here"
            required
          />
        </div>
      </form>

      <NavLink to="/category" className="md:hidden">
        <div className="bg-blue-300 w-12 h-12 mt-8 border border-[#C3D4E966] rounded-[10px] flex justify-center items-center">
          <Setting4 color="#596780" />
        </div>
      </NavLink>
      {/* </> */}
    </div>
  );
};

export default Navbar;
