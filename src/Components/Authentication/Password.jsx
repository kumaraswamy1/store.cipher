import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./Authentication.css";
export const Password = ({ password, userDispatch }) => {
  const [viewPassword, setViewPassword] = useState(true);

  return (
    <>
      <div>
        <label htmlFor="password" className="input-label">
          Password
        </label>
        <div className="center">
          <input
            className="password-input form-input"
            type={viewPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              userDispatch({ type: "SET_PASSWORD", payload: e.target.value });
            }}
          />{" "}
          <button
            className="btn-viewPassword"
            type="button"
            onClick={() => setViewPassword(!viewPassword)}
          >
            {viewPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
          </button>
        </div>
      </div>
    </>
  );
};
