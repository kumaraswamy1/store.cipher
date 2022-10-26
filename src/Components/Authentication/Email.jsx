export const Email = ({ email, userDispatch }) => {
  return (
    <>
      <label htmlFor="email" className="input-label">
        Email
      </label>
      <div className="center">
        <input
          className="email-input form-input center"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            userDispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
        />
      </div>
    </>
  );
};
