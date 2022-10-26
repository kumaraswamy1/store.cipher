import { useProduct } from "../../Context";
import { ProductCard, Categories } from "../../Components";
import { getSortedData, getFilteredData } from "../../Utils/filterProducts";
import "./Products.css";
export function Products() {
  const { state, loader } = useProduct();
  const filteredProducts = getFilteredData(
    state.data,
    state.fastDelivery,
    state.allInventory,
    state.categories,
    state.searchValue
  );

  const sortedProducts = getSortedData(filteredProducts, state.sortBy);
  return (
    <div className="products-container">
      <Categories />
      {loader ? (
        <span className="loader">Loading</span>
      ) : (
        <div>
          <h1 className="products-heading">Products</h1>
          <div className="eCommerce-list products-content center ">
            {sortedProducts.length === 0
              ? "No results to show."
              : sortedProducts?.map((item) => (
                  <>
                    <ProductCard key={item._id} item={item} />
                  </>
                ))}
          </div>
        </div>
      )}
    </div>
  );
}
