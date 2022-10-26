import "./Profile.css";
import { FiBookmark, FiLogOut, FiShoppingCart } from "react-icons/fi";

import jwt_decode from "jwt-decode";
import { useCart, useLogin } from "../../Context";
import { Logo } from "../../Assets/logo";

export function Profile() {
  const { state } = useCart();

  const {
    state: { token },
    logoutHandler
  } = useLogin();
  const { username } = jwt_decode(token);
  return (
    <div className="profile-container  center">
      <div className=" img-rounded">
        <Logo />
      </div>
      <h2>{username}</h2>
      <div>
        <button
          className="btn-form btn  btn-default "
          onClick={() => logoutHandler()}
        >
          SIGN OUT <FiLogOut />
        </button>
      </div>

      <div className="user-details center">
        <div>
          <FiBookmark size={45} />
          <h3>
            <p className="center"> {state.wishlist.length} Items</p>
          </h3>
        </div>
        <div>
          <FiShoppingCart size={45} />
          <h3>
            <p> {state.cart.length} Items</p>
          </h3>
        </div>
      </div>
    </div>
  );
}
