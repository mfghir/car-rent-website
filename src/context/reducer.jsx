const sumItems = (items) => {
  // const itemsCounter = items.reduce(
  //   (total, product) => total + product.quantity,
  //   0
  // );
  let total = items.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return { total };
};

const CartCalculater = (products) => {
  const itemsCounter = products.reduce(
    (total, product) => total + product.quantity,
    0
  );
  // const total = products.reduce(
  //   (total, product) => total + product.offPrice * product.quantity,
  //   0
  // );
  const totalWithoutOff = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const offPrice = products.reduce(
    (total, product) => total + product.offAmount * product.quantity,
    0
  );

  return { itemsCounter, total, offPrice, totalWithoutOff };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_OPEN":
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case "IS_FAV":
      const test = state.carList.filter(
        (item) => item.id !== action.payload.id
      );
      if (test) {
        return !state.isFav;
      }

      return {
        ...state,
      };

    case "ADD_FAVORITE": {
      // if (state.favList.includes(action.payload)) {
      if (!state.favList.some((item) => item.id === action.payload.id)) {
        return { ...state, favList: [...state.favList, action.payload] };
      }
      return state;

      // if (!state.favList.find((item) => item.id === action.payload.id)) {
      //   state.favList.push({
      //     ...action.payload,
      //   });
      // }

      // return {
      //   ...state,
      //   favList: [...state.favList],
      //   isFav: !state.isFav,
      // };
    }
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favList: state.favList.filter((item) => item.id !== action.payload.id),
      };
    // case "ADD_TO_FAV": {
    //   if (!state.favList.find((item) => item.id === action.payload.id)) {
    //     state.fav.push({
    //       ...action.payload,
    //     });
    //   }
    //   return {
    //     ...state,
    //     fav: [...state.fav],
    //     checkout: false,
    //   };
    // }

    case "ADD_ITEM": {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false,
      };
    }

    case "SORT_CATEGOTY_CAR": {
      const categoryI = [...state.carList];
      const filtered = categoryI.filter((car) =>
        car.typeCar.includes(action.payload.value)
      );

      if (action.payload.checked === false || action.payload.value === "") {
        return { ...state, sortedCars: [] };
      } else {
        return { ...state, sortedCars: filtered };
      }
    }

    case "SORT_CAPCITY_CAR": {
      const categoryI = [...state.carList];
      const num = parseInt(action.payload.value);
      const filtered = categoryI.filter((item) => item.capacity === num);

      if (action.payload.checked === false || action.payload.value === "") {
        return { ...state, sortedCars: [] };
      } else {
        return { ...state, sortedCars: filtered };
      }
    }

    case "SORT_PRICE_CAR": {
      const categoryI = [...state.carList];
      const num = parseInt(action.payload);

      const filtered = categoryI.filter(
        (item) => item.price >= 0 && item.price <= num
      );
      console.log(filtered);
      return { ...state, sortedCars: filtered };

      // if (action.payload.value === "") {
      //   return { ...state, sortedCars: [] };
      // } else {
      //   return { ...state, sortedCars: filtered };
      // }
    }

    case "SEARCH": {
      const val = action.payload;
      if (val === "") {
        return state;
      } else {
        const filterPro = state.carList.filter((p) =>
          p.name.toLowerCase().includes(val.toLowerCase())
        );
        // return filterPro;
        return { ...state, filteredCars: filterPro };
      }
      // return { ...state, filteredCars: filterPro };

      // return state;
    }

    case "GET_CAR_DATA":
      return { ...state, carList: action.payload };

    default:
      return state;
  }
};
