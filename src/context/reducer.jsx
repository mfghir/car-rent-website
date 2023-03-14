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

    case "TOGGLE_ADD_FAVORITE": {
      const idToToggle = action.payload.id;
      const isNewFavorite = !state.favList.some(
        (item) => item.id === idToToggle
      );

      if (isNewFavorite) {
        // Add new favorite
        const itemToAdd = { ...action.payload, fav: true };
        return {
          ...state,
          favList: [...state.favList, itemToAdd],
        };
      } else {
        // Remove existing favorite
        const newFavList = state.favList.filter(
          (item) => item.id !== idToToggle
        );
        return {
          ...state,
          favList: newFavList,
        };
      }
    }

    case "REMOVE_FAVORITE": {
      const idToRemove = action.payload.id;
      const itemToRemove = state.carList.find((item) => item.id === idToRemove);
      if (itemToRemove) {
        itemToRemove.fav = false;
      }
      const newFavList = state.favList.filter((item) => item.id !== idToRemove);
      return { ...state, favList: newFavList };
    }

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
