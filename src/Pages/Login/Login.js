import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { Password, Username } from "../../Components";
import { useLogin } from "../../Context";

export function Login() {
	const {
		loginWithCredentials,
		state: { username, password },

		dispatch,
	} = useLogin();

	const loginHandler = async (e) => {
		e.preventDefault();

		const res = await loginWithCredentials(username, password);

		if (!res.success) {
			return toast.error(res.message);
		}
	};

	return (
		<div className="center form">
			<form onSubmit={loginHandler}>
				<div>
					<div>
						<h1 className="center pigment-h3">Login Here!</h1>
					</div>
					<Username username={username} userDispatch={dispatch} />
					<Password password={password} userDispatch={dispatch} />

					<div>
						<button className="btn-form btn  btn-default ">SIGN IN</button>
					</div>
					<p>
						Don't have an account?
						<NavLink to="/signup"> Sign up! </NavLink>{" "}
					</p>
				</div>
			</form>{" "}
			<button
				className="blink_me center btn-guest"
				onClick={() => {
					dispatch({ type: "SET_USERNAME", payload: "test" });
					dispatch({ type: "SET_PASSWORD", payload: "test123#A" });
				}}
			>
				Use Guest Credentials
			</button>
		</div>
	);
}
