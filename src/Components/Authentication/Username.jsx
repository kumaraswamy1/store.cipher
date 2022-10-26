import { useEffect, useRef } from "react";

export const Username = ({ username, userDispatch }) => {
  const labelFocus = useRef(null);

  useEffect(() => {
    labelFocus.current.focus();
  }, []);

  return (
    <>
      {" "}
      <label htmlFor="username" className="input-label">
        Username
      </label>{" "}
      <div className="center">
        <input
          ref={labelFocus}
          className="name-input form-input center"
          type="text"
          name="username"
          id="username"
          value={username}
          placeholder="Username"
          onChange={(e) =>
            userDispatch({ type: "SET_USERNAME", payload: e.target.value })
          }
        />
      </div>
    </>
  );
};
