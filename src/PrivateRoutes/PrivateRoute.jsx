import { Navigate, useLocation } from "react-router-dom";
import { useLogin } from "../Context/AuthProvider";

export function PrivateRoute({ children }) {
  const {
    state: { token }
  } = useLogin();

  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
