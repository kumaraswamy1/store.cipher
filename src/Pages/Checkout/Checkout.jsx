import React, { useEffect } from "react";

import axios from "axios";
import toast from "react-hot-toast";

export const Checkout = ({ price }) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://checkout.razorpay.com/v1/checkout.js";
		script.async = true;
		document.body.appendChild(script);
	}, []);
	const paymentData = async () => {
		const {
			data: { orderId, totalPrice },
		} = await axios.post(
			`https://store-cipher-backend.onrender.com/checkout/order`,
			{ amount: price }
		);

		options.order_id = orderId;
		options.amount = totalPrice;

		var rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	var options = {
		key: process.env.RAZORPAY_API_KEY,
		amount: "",
		name: "store.cipher",
		order_id: "",
		description: "Feed your curiosity with the right books!",
		image:
			"https://i.ibb.co/8ND3QQ1/Blockchain-Basics-A-Non-Technical-Introduction-in-25-Steps.jpg",
		handler: function (response) {
			var values = {
				razorpay_payment_id: response.razorpay_payment_id,
				razorpay_signature: response.razorpay_signature,
				razorpay_order_id: response.razorpay_order_id,
			};
			(async () => {
				const { data } = await axios.post(
					"https://store-cipher-backend.onrender.com/checkout/payment",
					values
				);
				if (data.success) toast.success(data.message);
			})();
		},

		theme: {
			color: "blue",
			hide_topbar: true,
		},
	};

	return (
		<>
			<div>
				<button
					className="btn-form btn  btn-default "
					onClick={() => paymentData()}
				>
					CHECK OUT
				</button>
			</div>
		</>
	);
};
