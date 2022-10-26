export const getSortedData = (productList, sortBy) => {
  if (sortBy && sortBy === "HIGH_TO_LOW") {
    return productList?.sort((a, b) => b.price - a.price);
  }
  if (sortBy && sortBy === "LOW_TO_HIGH") {
    return productList.sort((a, b) => a.price - b.price);
  }
  return productList;
};

export const getFilteredData = (
  productList,
  fastDelivery,
  allInventory,
  categoryFilter,
  searchValue
) => {
  productList = productList
    .filter(({ name }) => name.toLowerCase().includes(searchValue))
    .filter(({ isFastDelivery }) => (fastDelivery ? isFastDelivery : true))
    .filter(({ inStock }) => (allInventory ? true : inStock));

  if (categoryFilter.length > 0) {
    return productList.filter(({ category }) =>
      categoryFilter.includes(category)
    );
  }
  return productList;
};
