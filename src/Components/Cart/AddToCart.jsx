import { useCart, useLogin } from "../../Context";
import { addItemsToCart } from "../../Services/Cart/cart";
import { useNavigate } from "react-router-dom";
export const AddToCart = ({ item }) => {
  const {
    state: { cart },
    dispatch
  } = useCart();
  const isItemInCart = cart?.find((cart) => cart._id === item._id);
  const {
    state: { token }
  } = useLogin();
  const addToCartHandler = () => {
    token
      ? isItemInCart
        ? navigate("/cart")
        : addItemsToCart(item._id, 1, "ADD") &&
          dispatch({
            payload: { ...item, quantity: 1 },
            type: "ADD_TO_CART"
          })
      : navigate("/login", { replace: true });
  };
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="btn btn-default btn-fill "
        onClick={addToCartHandler}
        disabled={!item?.inStock}
      >
        {!item?.inStock
          ? "OUT OF STOCK"
          : isItemInCart
          ? "GO TO CART"
          : "ADD TO CART"}
      </button>
    </div>
  );
};
