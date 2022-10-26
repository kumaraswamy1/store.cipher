import { updateWishlist } from "../../Services/Wishlist/wishlist";
import { useNavigate } from "react-router-dom";
import { useCart, useLogin } from "../../Context";
import toast from "react-hot-toast";
import { addItemsToCart } from "../../Services/Cart/cart";

import "./WishlistCard.css";
export const WishlistCard = ({ item }) => {
  const { name, author, imageUrl, _id } = item;
  const navigate = useNavigate();
  const {
    state: { cart },
    dispatch
  } = useCart();
  const isItemInCart = cart?.find((cart) => cart._id === item._id);
  const {
    state: { token }
  } = useLogin();

  return (
    <div className="container-list">
      <img className="container-img" src={imageUrl} alt={name} />

      <div className="container-detail-content ">
        <h4 className="container-name">{name}</h4>
        <p>{author}</p>
      </div>
      <div>
        <button
          disabled={!item.inStock}
          className="btn btn-default btn-fill"
          onClick={() =>
            token
              ? isItemInCart
                ? toast("Product is already in the Cart")
                : updateWishlist(_id, "REMOVE") &&
                  addItemsToCart(_id, 1, "ADD") &&
                  dispatch({
                    type: "MOVE_TO_CART",
                    payload: { ...item, quantity: 1 }
                  })
              : navigate("/login", { replace: true })
          }
        >
          {!item?.inStock ? "Out of Stock" : "Move to cart"}
        </button>
        <button
          className="btn btn-outline-primary btn-fill"
          onClick={() =>
            token
              ? updateWishlist(item._id, "REMOVE") &&
                dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
              : navigate("/login", { replace: true })
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
};
