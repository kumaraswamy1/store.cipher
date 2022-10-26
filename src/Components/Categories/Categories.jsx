import "./Categories.css";
import { useProduct } from "../../Context";
import { useState } from "react";
import { FiFilter, FiX } from "react-icons/fi";
import { SearchHandler } from "./SearchHandler";
export const Categories = () => {
  const { state, sortBy, dispatch: productDispatch } = useProduct();
  const categories = state.data.map((product) => product.category);
  const setCategories = [...new Set(categories)];
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="categories-sidebar ">
      <button
        className="nav-button btn btn-default  "
        onClick={() => {
          setSideNav(!sideNav);
        }}
      >
        {!sideNav ? <FiFilter /> : <FiX />}
      </button>
      <div className={sideNav ? "show desktop-nav" : "hide desktop-nav"}>
        <button
          className="btn-clear btn "
          onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
        >
          Clear
        </button>
        <SearchHandler />
        <h3>PRICE</h3>
        <div className="radio-btn">
          <label htmlFor="HIGH_TO_LOW">
            <input
              type="radio"
              id="HIGH_TO_LOW"
              name="sort"
              value="HIGH_TO_LOW"
              checked={sortBy && sortBy === "HIGH_TO_LOW"}
              onChange={() =>
                productDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
              }
            />
            High to Low
          </label>
        </div>
        <div className="radio-btn">
          <input
            type="radio"
            id="LOW_TO_HIGH"
            name="sort"
            value="LOW_TO_HIGH"
            checked={sortBy && sortBy === "LOW_TO_HIGH"}
            onChange={() =>
              productDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
            }
          />
          <label htmlFor="LOW_TO_HIGH">Low to High</label>
        </div>
        <h3>AVAILABILITY</h3>
        <div>
          <input
            type="checkbox"
            id="fastDelivery"
            checked={state.fastDelivery}
            onChange={() => productDispatch({ type: "FAST_DELIVERY" })}
          />
          <label htmlFor="fastDelivery"> Fast delivery</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="noStock"
            checked={state.allInventory}
            onChange={() => productDispatch({ type: "OUT_OF_STOCK" })}
          />
          <label htmlFor="noStock"> Include out of stock</label>
        </div>
        <h3>CATEGORIES</h3>
        {setCategories.map((categoryName) => (
          <div key={categoryName}>
            <input
              type="checkbox"
              name={categoryName}
              onChange={() =>
                productDispatch({
                  type: "CATEGORIES",
                  payload: categoryName
                })
              }
            />
            <label htmlFor={categoryName}> {categoryName}</label>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};
