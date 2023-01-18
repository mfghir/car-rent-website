import React, { useReducer, createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { popularCarAPI, recommandedCarAPI } from "../api/service";
import { reducer } from "./reducer";

const initialState = {
  isOpen: false,

  recommandedCar: [],
  popularCar: [],

  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  totalWithoutOff: 0,
  offPrice: 0,
  checkout: false,
};

// const CartCalculater = (products) => {
//   const itemsCounter = products.reduce(
//     (total, product) => total + product.quantity,
//     0
//   );
//   const total = products.reduce(
//     (total, product) => total + product.offPrice * product.quantity,
//     0
//   );
//   const totalWithoutOff = products.reduce(
//     (total, product) => total + product.price * product.quantity,
//     0
//   );
//   const offPrice = products.reduce(
//     (total, product) => total + product.offAmount * product.quantity,
//     0
//   );

//   return { itemsCounter, total, offPrice, totalWithoutOff };
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     // add items to cart
//     case "ADD_ITEM":
//       if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
//         state.selectedItems.push({
//           ...action.payload,
//           quantity: 1,
//           offAmount: action.payload.price - action.payload.offPrice,
//         });
//       }
//       return {
//         ...state,
//         selectedItems: [...state.selectedItems],
//         ...CartCalculater(state.selectedItems),
//         checkout: false
//       };

//     // remove items from cart
//     case "REMOVE_ITEM":
//       const newSelectedItems = state.selectedItems.filter(
//         (item) => item.id !== action.payload.id
//       );

//       return {
//         ...state,
//         selectedItems: [...newSelectedItems],
//         ...CartCalculater(newSelectedItems),
//       };

//     // add items quantity
//     case "INCREASE":
//       const increaseIndex = state.selectedItems.findIndex(
//         (item) => item.id === action.payload.id
//       );
//       state.selectedItems[increaseIndex].quantity++;

//       return {
//         ...state,
//         ...CartCalculater(state.selectedItems),
//       };

//     // remove items quantity
//     case "DECREASE":
//       const decreaseIndex = state.selectedItems.findIndex(
//         (item) => item.id === action.payload.id
//       );
//       state.selectedItems[decreaseIndex].quantity--;

//       return {
//         ...state,
//         ...CartCalculater(state.selectedItems),
//       };

//     case "CHECKOUT":
//       return {
//         selectedItems: [],
//         itemsCounter: 0,
//         total: 0,
//         totalWithoutOff: 0,
//         offPrice: 0,
//         checkout: true,
//       };

//     case "CLEAR":
//       return {
//         selectedItems: [],
//         itemsCounter: 0,
//         total: 0,
//         totalWithoutOff: 0,
//         offPrice: 0,
//         checkout: false,
//       };

//     default:
//       return state;
//   }
// };

// cart context
export const ProductsContext = createContext(initialState);

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { data, error, isError, isLoading } = useQuery(['popularCar'], () => popularCarAPI());

  useEffect(() => {
    const fetchApi = async () => {
      const resPop = await popularCarAPI();
      const resRec = await recommandedCarAPI();
      // if(data){
      //   dispatch({ type: "GET_POPULAR_CAR_DATA", payload: data });
      // }

      dispatch({ type: "GET_POPULAR_CAR_DATA", payload: resPop });
      dispatch({ type: "GET_RCOMMANDED_CAR_DATA", payload: resRec });
    };

    fetchApi();
  }, []);

  return (
    <ProductsContext.Provider value={[state, dispatch]}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
