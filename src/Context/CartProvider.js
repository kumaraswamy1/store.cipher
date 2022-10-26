import { createContext, useContext, useReducer, useEffect } from "react";

import axios from "axios";
import { cartReducer } from "../Reducer";
import { baseURL } from "../Services/API/api.instance";
import { useLogin } from "../Context";

export const CartContext = createContext();
export const intialState = {
  cart: [],
  quantity: 0,
  wishlist: []
};
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, intialState);

  const {
    state: { token }
  } = useLogin();
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(`${baseURL}/cart`);
        dispatch({ type: "SET_CART", payload: data.cart });
        const {
          data: { wishlist }
        } = await axios.get(`${baseURL}/wishlist`);
        dispatch({
          type: "SET_WISHLIST",
          payload: wishlist
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [token]);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {" "}
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
