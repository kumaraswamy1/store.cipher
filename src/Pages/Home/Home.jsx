import { NavLink } from "react-router-dom";

import "./Home.css";
export function Home() {
  return (
    <div>
      <header className="center ">
        <div>
          <h1 className="pigment-h1 header-content  ">
            <span className="header-secondary">Feed your</span>
            <span className="header-primary"> curiosity </span>
            <span className="header-secondary">with the right</span>
            <span className="header-primary"> books!</span>
          </h1>{" "}
          <div className="btn-div ">
            <button className="btn btn-default">
              <NavLink to="/products">
                <h4 className="blink_me">Explore Books</h4>
              </NavLink>
            </button>
          </div>
        </div>
        <div>
          {" "}
          <img
            className="header-image"
            src="https://i.ibb.co/4YyjkN4/header-image.png"
            alt="headxer-imagxe"
            border="0"
          />
        </div>
      </header>
    </div>
  );
}
