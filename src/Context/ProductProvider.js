import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import { productReducer } from "../Reducer";
import { baseURL } from "../Services/API/api.instance";
export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [loader, setLoader] = useState(false);

  const intialArgs = {
    data: [],
    allInventory: true,
    fastDelivery: false,
    sortBy: null,
    categories: [],
    searchValue: ""
  };

  const [state, dispatch] = useReducer(productReducer, intialArgs);

  useEffect(() => {
    (async function () {
      try {
        setLoader(true);
        const {
          data: { products }
        } = await axios.get(`${baseURL}/products`);
        dispatch({ type: "ON_LOAD", payload: products });
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    })();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        dispatch,
        state,
        loader
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
