export function cartReducer(state, action) {
	switch (action.type) {
		case "PAYMENT":
			return { ...state };
		case "SET_CART":
			return {
				...state,
				cart: action.payload,
			};
		case "SET_WISHLIST":
			return {
				...state,
				wishlist: action.payload,
			};
		case "ADD_TO_CART":
			return {
				...state,
				cart: state.cart.find((item) => item._id === action.payload._id)
					? [...state.cart]
					: [...state.cart, action.payload],
			};
		case "MOVE_TO_CART":
			return {
				...state,
				cart: [...state.cart, action.payload],
				wishlist: state.wishlist.filter(
					(item) => item._id !== action.payload._id
				),
			};
		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter((item) => item._id !== action.payload._id),
			};

		case "REMOVE_FROM_WISHLIST":
			return {
				...state,
				wishlist: state.wishlist.filter(
					(item) => item._id !== action.payload._id
				),
			};
		case "ADD_TO_WISHLIST":
			return {
				...state,
				wishlist: state.wishlist.find((item) => item._id === action.payload._id)
					? [state.wishlist]
					: [...state.wishlist, action.payload],
			};

		case "INCREMENT_QUANTITY":
			return {
				...state,
				cart: state.cart.map((item) =>
					item._id === action.payload._id
						? { ...item, quantity: item.quantity + 1 }
						: item
				),
			};

		case "DECREMENT_QUANTITY":
			return {
				...state,
				cart: state.cart.map((item) =>
					item._id === action.payload._id
						? { ...item, quantity: item.quantity - 1 }
						: item
				),
			};

		default:
			return { ...state };
	}
}
