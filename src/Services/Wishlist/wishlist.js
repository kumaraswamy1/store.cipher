import axios from "axios";
import toast from "react-hot-toast";
import { baseURL } from "../API/api.instance";

export const updateWishlist = async (_id, action) => {
  try {
    const { data } = await axios.post(`${baseURL}/wishlist`, {
      _id,
      action
    });
    if (data.success) {
      toast.success("Product added to wishlist");
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
