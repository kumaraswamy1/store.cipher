import "./Cart.css";

import { useCart } from "../../Context";
import { Checkout } from "../Checkout/Checkout";
import { CartList } from "../../Components";

export function Cart() {
	const {
		state: { cart },
	} = useCart();

	const totalPrices = cart
		?.map((item) => item.quantity * item.price)
		.reduce((a, b) => a + b, 0);
	return (
		<div className="cart ">
			<div className="cart-container">
				<div className="container-heading">
					{" "}
					<h1 className="center ">Cart</h1>
				</div>

				{cart.length === 0 ? (
					<>
						{" "}
						<h2 className="center">Your Cart is empty.</h2>
					</>
				) : (
					cart?.map((item) => (
						<li>
							<CartList item={item} key={item._id} />
						</li>
					))
				)}
			</div>
			<div className="price-container">
				<h1>Total Price : ₹ {totalPrices} </h1>
				<Checkout price={totalPrices} />
			</div>
		</div>
	);
}
