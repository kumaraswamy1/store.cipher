import "./Product.css";
import { AddToCart } from "../Cart/AddToCart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useCart, useLogin, useProduct } from "../../Context";

export const ProductDetail = () => {
  const {
    state: { data }
  } = useProduct();
  const {
    state: { wishlist },
    dispatch
  } = useCart();
  const {
    state: { token }
  } = useLogin();

  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const itemFound = data?.find(({ _id }) => _id === id);
    setProduct(itemFound);
  }, [data, id]);
  const isItemInWishlist = wishlist.find(
    (wishItem) => wishItem._id === product._id
  );
  const {
    imageUrl,
    name,
    author,
    description,
    price,
    inStock,
    isFastDelivery
  } = product || {};

  return (
    <div className="container-list  ">
      <div className="product-detail-image">
        <img className="center" src={imageUrl} alt={name} />
      </div>
      <div className="product-detail-content">
        <h1>{name}</h1>
        <p>
          <span className="gray-text">{author}</span>
        </p>
        <hr className="gray"></hr>
        <p>
          Description :<br /> {description}`
        </p>
      </div>
      <div className="item-detail">
        <h2>₹ {price}</h2>
        <p>
          Avaliabilty :{" "}
          <span className="gray-text">{inStock ? "Yes" : "NO"}</span>
        </p>
        <p>
          Delivery : <br />
          <span className="gray-text">
            {isFastDelivery ? "2 day Delivery" : "Standanrd delivery"}
          </span>
        </p>

        <div className="details-btn">
          {" "}
          <button
            className="  btn btn-default  "
            onClick={() => {
              token
                ? isItemInWishlist
                  ? navigate("/wishlist")
                  : dispatch({
                      payload: product,
                      type: !isItemInWishlist
                        ? "ADD_TO_WISHLIST"
                        : "REMOVE_FROM_WISHLIST"
                    })
                : navigate("/login", { replace: true });
            }}
          >
            {isItemInWishlist ? "GO TO WISHLIST" : "ADD TO WISHLIST"}
          </button>
          <AddToCart item={product} />
        </div>
      </div>
    </div>
  );
};
