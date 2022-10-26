import { useEffect, useRef } from "react";

export const Name = ({ name, userDispatch }) => {
  const labelFocus = useRef(null);

  useEffect(() => {
    labelFocus.current.focus();
  }, []);

  return (
    <>
      <label htmlFor="name" className="input-label">
        Name
      </label>
      <div className="center">
        <input
          ref={labelFocus}
          className="name-input form-input center"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            userDispatch({ type: "SET_NAME", payload: e.target.value })
          }
        />
      </div>
    </>
  );
};
