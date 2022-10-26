import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { Email, Name, Password, Username } from "../../Components";
import { useLogin } from "../../Context";
import { isPasswordValid } from "../../Utils/regex";

export function Signup() {
  const {
    dispatch,
    SignupUser,
    state: { username, name, password, email }
  } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPasswordValid(password)) {
      toast.error(
        "Password must contain at least 8 characters, at least 1 number and both lower and uppercase letters."
      );
    } else {
      const res = await SignupUser(name, username, email, password);

      if (!res.success) {
        return toast.error(res.message);
      }
    }
  };

  return (
    <div className="center form">
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="center pigment-h3">
            {" "}
            <span role="img" aria-label="Waving Hand">
              👋{" "}
            </span>{" "}
            Register Here!
          </h1>
        </div>

        <Name name={name} userDispatch={dispatch} />
        <Email email={email} userDispatch={dispatch} />
        <Username username={username} userDispatch={dispatch} />
        <Password password={password} userDispatch={dispatch} />
        <div>
          <button className="btn-form btn btn-default ">SIGN UP!</button>
          <p>
            Already have an account? <NavLink to="/login"> Sign In! </NavLink>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}
