import React, { useContext, useState } from "react";
import { Checkbox } from "@material-tailwind/react";
import { ProductsContext } from "../context/ProductsProvider";

const SortCategory = () => {
  const [state, dispatch] = useContext(ProductsContext);
  const [rangeInp, setRangeInp] = useState(100);

  const sortName = state.carList
    ?.filter((item) => item.typeCar)
    .map((item) => item.typeCar);

  const carsKind = sortName.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const sortCapacity = state.carList
    ?.filter((item) => item.capacity)
    .map((item) => item.capacity);

  const capacity = sortCapacity.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const sortHandler = (e) => {
    if (e.target.checked === false) {
      e.target.value === "";
      dispatch({ type: "SORT_CATEGOTY_CAR", payload: e.target });
    } else {
      dispatch({ type: "SORT_CATEGOTY_CAR", payload: e.target });
    }
  };

  const capacityHandler = (e) => {
    if (e.target.checked === false) {
      e.target.value === "";
      dispatch({ type: "SORT_CAPCITY_CAR", payload: e.target });
    } else {
      dispatch({ type: "SORT_CAPCITY_CAR", payload: e.target });
    }
  };

  const priceHandler = (e) => {
    setRangeInp(e.target.value);
    dispatch({ type: "SORT_PRICE_CAR", payload: rangeInp });
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

        {Object.entries(carsKind).map((item) => (
          <div
            className="flex items-center mb-4 font-semibold mt-7 text-base"
            key={item}
          >
            {/* <Checkbox
              label={item[0]}
              containerProps={item[0]}
              value={item[0]}
              onChange={() => sortHandler(item[0])}
            /> */}
            <div>
              <input
                id="ch"
                type="checkbox"
                value={item[0]}
                onChange={sortHandler}
                className="w-4 h-4 text-blue-600 focus:accent-[#3563E9] focus:border-transparent border-[#90A3BF] rounded-lg"
              />
              <label htmlFor="ch" className="ml-2 text-sm text-[#596780]">
                {item[0]}
              </label>
            </div>
            <span className="text-[#90A3BF] pl-1">({item[1]})</span>
          </div>
        ))}
      </section>

      <section className="mt-14">
        <span className="font-semibold text-xs text-[#90A3BF] tracking-[1px]">
          CAPACITY
        </span>

        {Object.entries(capacity).map((item) => (
          <div
            className="flex items-center mb-4 font-semibold mt-7 text-base"
            key={item}
          >
            <input
              id="default-checkbox"
              type="checkbox"
              value={item[0]}
              onChange={capacityHandler}
              className="w-4 h-4 text-blue-600 focus:accent-[#3563E9] focus:border-transparent border-[#90A3BF] rounded-lg"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm text-[#596780]"
            >
              {item[0]}people
            </label>
            <span className="text-[#90A3BF] pl-1">({item[1]})</span>
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
            step="1"
            min="10"
            max="100"
            value={rangeInp}
            onChange={priceHandler}
            className="w-full h-2 bg-[#90A3BF]  accent-[#3563E9] appearance-none rounded  cursor-pointer  focus:outline-none focus:ring-0 focus:shadow-none"
          />
          <p className="text-[#596780] font-semibold text-xl">
            Max. ${rangeInp}.00
          </p>
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
