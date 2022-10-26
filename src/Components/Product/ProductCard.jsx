import { AddToCart } from "../Cart/AddToCart";
import { FiBookmark } from "react-icons/fi";
import { updateWishlist } from "../../Services/Wishlist/wishlist";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { useCart, useLogin } from "../../Context";
export const ProductCard = ({ item }) => {
  const {
    state: { wishlist },
    dispatch
  } = useCart();
  const isItemInWishlist = wishlist.find(
    (wishItem) => wishItem._id === item._id
  );
  const {
    state: { token }
  } = useLogin();
  const navigate = useNavigate();
  const { _id, name, author, imageUrl, price } = item;
  return (
    <div className="eCommerce-card ">
      <Link to={`/products/${_id}`}>
        <img src={imageUrl} alt={name} />
      </Link>
      <h1>{name}</h1>
      <h3>{author}</h3>
      <h2>₹ {price} </h2>
      <button
        className="remove-btn center"
        onClick={() =>
          token
            ? updateWishlist(item._id, "ADD") &&
              dispatch({
                type: !isItemInWishlist
                  ? "ADD_TO_WISHLIST"
                  : "REMOVE_FROM_WISHLIST",
                payload: item
              })
            : navigate("/login", { replace: true })
        }
      >
        {" "}
        <FiBookmark
          size={22}
          className={isItemInWishlist ? "wishlist-icon" : "white"}
        />
      </button>
      <AddToCart item={item} />
    </div>
  );
};
