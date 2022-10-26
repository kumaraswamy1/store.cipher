import "./Cart.css";

import { useCart } from "../../Context";

import { FiPlus, FiMinus, FiX } from "react-icons/fi";
import { addItemsToCart, removeItemsFromCart } from "../../Services/Cart/cart";

export const CartList = ({ item }) => {
	const { _id, name, imageUrl, author, quantity, price } = item;
	const { dispatch: cartDispatch } = useCart();
	return (
		<div className="container-list">
			<img className="container-img" src={imageUrl} alt={name} />
			<div className="container-detail-content">
				<h3 className="container-name">{name}</h3>
				<p> {author}</p>
			</div>
			<div className="cart-btn center">
				<button
					className="btn btn-default btn-quantity"
					onClick={() => {
						Number(quantity === 1)
							? removeItemsFromCart(_id) &&
							  cartDispatch({
									type: "REMOVE_FROM_CART",
									payload: item,
							  })
							: addItemsToCart(_id, 1, "SUB") &&
							  cartDispatch({
									type: "DECREMENT_QUANTITY",
									payload: item,
							  });
					}}
				>
					{" "}
					{Number(quantity === 1) ? <FiX /> : <FiMinus />}
				</button>
				<h2>{quantity}</h2>
				<button
					className="btn btn-default btn-quantity"
					onClick={() =>
						addItemsToCart(_id, 1, "ADD") &&
						cartDispatch({ type: "INCREMENT_QUANTITY", payload: item })
					}
				>
					<FiPlus />
				</button>
			</div>
			<br />

			<h2>₹ {price}</h2>
		</div>
	);
};
