import axios from "axios";
import toast from "react-hot-toast";
import { baseURL } from "../API/api.instance";
export const addItemsToCart = async (_id, quantity, action) => {
  try {
    const { data } = await axios.post(`${baseURL}/cart`, {
      _id,
      quantity,
      action
    });
    if (data.success) {
      toast.success("Product added to cart");
    }
  } catch (error) {
    console.error(error);
    toast.error(error.response.data.message);
  }
};

export const removeItemsFromCart = async (_id) => {
  try {
    const { data } = await axios.post(`${baseURL}/cart/remove`, { _id });
    if (data.success) {
      toast.success("Cart has been updated");
    }
  } catch (error) {
    console.error(error);
    toast.error(error.response.data.message);
  }
};
