import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useProduct } from "../../Context";
import "./Categories.css";
export const SearchHandler = () => {
  const { dispatch: productDispatch } = useProduct();
  const [search, setSearch] = useState("");
  const searchValue = (e) => {
    e.preventDefault();
    productDispatch({
      type: "SEARCH_VALUE",
      payload: search
    });
    setSearch(" ");
  };

  return (
    <form className="search-container" onSubmit={searchValue}>
      <label>
        <input
          className="searchTerm"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search.."
          name="search-value"
        />
        <button className="search-icon">
          <FiSearch size={24} />
        </button>
      </label>
    </form>
  );
};
