import { GasStation, Heart, Profile2User, Story } from "iconsax-react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsProvider";

import { useContext } from "react";

const RecommandCar = ({ item }) => {
  const { name, kind, fav, img, fuel, capacity, price, offPrice, id } = item;
  const [state, dispatch] = useContext(ProductsContext);

  const favListIcon = state.favList.filter((it) => it.id === id);
  const favHandler = () => {
    dispatch({ type: "TOGGLE_ADD_FAVORITE", payload: item });
    console.log("object",state.favList);
    // dispatch({
    //   type: "REMOVE_FAVORITE",
    //   payload: favItem,
    // })
  };

  return (
    <>
      <div className="rounded-[10px] bg-white p-2 mt-5 ">
        <div className="flex justify-between items-center ">
          <p className="flex flex-col">
            <Link to={`/detailCar/${item.id}`}>
              <span className="font-semibold text-base text-[#1A202C] lg:text-xl lg:font-bold">
                {name}
              </span>
            </Link>

            <span className="font-medium text-xs text-[#90A3BF] lg:text-sm lg:font-bold">
              {kind}
            </span>
          </p>

          <span onClick={() => favHandler()}>
            {fav  || (favListIcon.length > 0 && favListIcon[0].fav) ? (
              <Heart color="#ed3f3f" variant="Bold" />
            ) : (
              <Heart color="#90a3bf" />
            )}
          </span>
        </div>

        <section className=" flex justify-between items-center lg:hidden">
          <div className="relative flex justify-center items-center">
            <img className="my-8 " src={img} alt={name} />
            <div className="bg-gradient-to-t from-white to-white[/50%]  absolute w-full bottom-6 h-11 "></div>
          </div>

          <ul className="flex items-start flex-col ml-5">
            <li className="flex items-center">
              <GasStation
                className="w-[14px] h-[14px] lg:w-6 md:h-6"
                color="#90a3bf"
                variant="Bold"
              />
              <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
                {fuel}
              </span>
            </li>

            <li className="flex items-center my-4">
              <Story
                className="w-[14px] h-[14px] lg:w-6 md:h-6"
                color="#90a3bf"
                variant="Bold"
              />
              <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
                Manual
              </span>
            </li>

            <li className="flex items-center">
              <Profile2User
                className="w-[14px] h-[14px] lg:w-6 md:h-6"
                color="#90a3bf"
                variant="Bold"
              />
              <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
                {capacity}People
              </span>
            </li>
          </ul>
        </section>

        {/* ------------------------------------------------   for mobile to tablet */}
        <div className="relative justify-center items-center hidden lg:flex">
          <img className="my-8 " src={img} alt={name} />
          <div className="bg-gradient-to-t from-white to-white[/50%]  absolute w-full bottom-6 h-11 "></div>
        </div>

        <ul className="justify-center items-center hidden lg:flex">
          <li className="flex items-center">
            <GasStation
              className="w-[14px] h-[14px] lg:w-6 md:h-6"
              color="#90a3bf"
              variant="Bold"
            />
            <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
              {fuel}
            </span>
          </li>

          <li className="flex items-center mx-4">
            <Story
              className="w-[14px] h-[14px] lg:w-6 md:h-6"
              color="#90a3bf"
              variant="Bold"
            />
            <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
              Manual
            </span>
          </li>

          <li className="flex items-center">
            <Profile2User
              className="w-[14px] h-[14px] lg:w-6 md:h-6"
              color="#90a3bf"
              variant="Bold"
            />
            <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
              {capacity}People
            </span>
          </li>
        </ul>
        {/* ----------------------------------------------------------------- */}

        <div className="flex justify-between items-center mt-7">
          <div>
            <section className="flex justify-between items-end font-bold">
              <div className="text-[#1A202C] text-base lg:text-xl">
                ${offPrice === 0 ? price : offPrice}.00/
              </div>
              <span className="text-[#90A3BF] text-xs lg:text-sm">days</span>
            </section>

            <p className="text-[#90A3BF] font-medium text-xs mt-1 line-through  lg:text-sm lg:font-bold">
              {offPrice === 0 ? "" : `$${price}.00`}
            </p>
          </div>

          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}
            className="bg-[#3563E9] rounded-[4px] text-white text-xs lg:text-base font-semibold px-4 py-[10px] lg:px-5"
          >
            Rental Now
          </button>
        </div>
      </div>
    </>
  );
};

export default RecommandCar;
