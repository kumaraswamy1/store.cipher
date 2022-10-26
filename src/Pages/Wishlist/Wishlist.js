import { useCart } from "../../Context";
import { WishlistCard } from "../../Components";
export function Wishlist() {
  const {
    state: { wishlist }
  } = useCart();

  return (
    <div className="container">
      <h1 className="center">Wishlist</h1>

      {wishlist.length === 0 ? (
        <div>
          <p className="center">Wishlist is empty</p>
        </div>
      ) : (
        wishlist?.map((item) => (
          <div>
            <WishlistCard item={item} />
          </div>
        ))
      )}
    </div>
  );
}
