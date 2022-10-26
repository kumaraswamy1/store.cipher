import "./styles.css";
import { Toaster } from "react-hot-toast";

import {
  Home,
  Cart,
  Products,
  ProductDetails,
  UserProfile,
  UserLogin,
  UserRegister,
  NoMatch,
  Wishlist
} from "./Pages";
import { Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoutes/PrivateRoute";
import { Navbar } from "./Components";

export default function App() {
  return (
    <div>
      <Navbar />
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="login" element={<UserLogin />} />
        <Route path="signup" element={<UserRegister />} />
        <Route path="*" element={<NoMatch />} />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}
