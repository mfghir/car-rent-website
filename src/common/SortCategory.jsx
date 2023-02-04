import { Checkbox } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsProvider";

const SortCategory = () => {
  const [state, dispatch] = useContext(ProductsContext);

  const sortName = state.carList
    ?.filter((item) => item.typeCar)
    .map((item) => item.typeCar);

  let counts = sortName.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const handleCheckboxChange = (car) => {
    // console.log("state.carList" ,state.carList.filter((item) => item.typeCar === car));
    dispatch({ type: "SELECT_PRODUCT", payload: car });
    // console.log(car);
  };
  return (
    <div
      className={`w-2/3 h-full overflow-y-scroll fixed z-10 top-0 bg-white  transition-transform  md:translate-x-0 md:w-1/4 md:top-32 md:static md:h-full p-8
      ${
        state.isOpen
          ? " translate-x-0  transition-transform"
          : "-translate-x-full  transition-transform"
      }`}
    >
      <section>
        <span className="font-semibold text-xs text-[#90A3BF] tracking-[1px]">
          TYPE
        </span>

        {Object.entries(counts).map((item) => (
          <div
            className="flex items-center mb-4 font-semibold mt-7 text-base"
            key={item}
            // value={item[0]}
            // onChange={sortHandler}
            // onChange={() => handleCheckboxChange(item[0])}
          >
            <Checkbox
              label={item[0]}
              containerProps={item[0]}
              onChange={() => handleCheckboxChange(item[0])}
            />
            <span className="text-[#90A3BF] pl-1">({item[1]})</span>
          </div>
        ))}
      </section>

      <section className="mt-14">
        <span className="font-semibold text-xs text-[#90A3BF] tracking-[1px]">
          CAPACITY
        </span>

        {["2 Person", "4 Person", "6 Person", "8 Person"].map((item) => (
          <div
            className="flex items-center mb-4 font-semibold mt-7 text-base"
            key={item}
          >
            <input
              // checked
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 focus:accent-[#3563E9] focus:border-transparent border-[#90A3BF] rounded-lg"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm text-[#596780]"
            >
              {item}
            </label>
            <span className="text-[#90A3BF] pl-1">(10)</span>
          </div>
        ))}
      </section>

      <section>
        <span className="font-semibold text-xs text-[#90A3BF] tracking-[1px]">
          PRICE
        </span>

        <div className="mt-8">
          <input
            id="default-range"
            type="range"
            step="10"
            min="1"
            max="200"
            value="100"
            className="w-full h-2 bg-[#90A3BF] appearance-none rounded  cursor-pointer  focus:outline-none focus:ring-0 focus:shadow-none"
          />
        </div>
      </section>
    </div>
  );
};

export default SortCategory;

//Functional Component

// const ProductList = () => {
//   const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch({
//   //     type: "SET_PRODUCTS",
//   //     payload: [
//   //       { id: 1, name: "Product 1" },
//   //       { id: 2, name: "Product 2" },
//   //       { id: 3, name: "Product 3" },
//   //     ],
//   //   });
//   // }, [dispatch]);

//   const products = useSelector((state) => state.products);
//   const handleCheckboxChange = (productId) =>
//     dispatch({ type: "SELECT_PRODUCT", payload: productId });

//   return (
//     <div>
//       <ul>
//         {products &&
//           products.map((product) => (
//             <li key={product.id}>
//               <input
//                 type="checkbox"
//                 onChange={() => handleCheckboxChange(product)}
//               />
//               <span>{product.name}</span>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };
