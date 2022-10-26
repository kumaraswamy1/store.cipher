import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Logo } from "../../Assets/logo";
import { useLogin } from "../../Context/AuthProvider";
import { menus } from "../../Utils/menu";
import { createElement } from "react";

export const Navbar = () => {
  const {
    state: { token }
  } = useLogin();

  return (
    <div className="nav-list ">
      <NavLink to="/">{<Logo />}</NavLink>
      <div className="center">
        {menus.map((menu) => (
          <>
            <NavLink to={!token ? "/login" : menu.link}>
              {createElement(menu.icon, {
                size: "24",
                className: "nav-icons"
              })}

              <h1>{menu.name}</h1>
            </NavLink>
          </>
        ))}
      </div>
    </div>
  );
};
