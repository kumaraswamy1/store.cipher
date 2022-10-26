export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "ON_LOAD":
      return { ...state, data: payload };
    case "SORT":
      return { ...state, sortBy: payload };
    case "FAST_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
    case "OUT_OF_STOCK":
      return (state = { ...state, allInventory: !state.allInventory });
    case "CATEGORIES":
      return {
        ...state,
        categories: state.categories.some((item) => item === payload)
          ? state.categories.filter((value) => value !== payload)
          : [...state.categories, payload]
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        allInventory: true,
        fastDelivery: false,
        sortBy: null,
        categories: [],
        searchValue: ""
      };

    case "SEARCH_VALUE":
      return { ...state, searchValue: payload.toLowerCase() };
    default:
      return state;
  }
};
