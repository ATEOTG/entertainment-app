import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../svg/Logo";
import NavHomeIcon from "../svg/NavHomeIcon";
import NavMoviesIcon from "../svg/NavMoviesIcon";
import NavTvIcon from "../svg/NavTvIcon";
import NavBookmarkIcon from "../svg/NavBookmarkIcon";
import { useEffect, useState } from "react";

interface NavigationProps {
  isLoggedIn: boolean;
}

function Navigation(props: NavigationProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
  const navigate = useNavigate();

  async function logoutHandler() {
    try {
      await fetch("https://ent-app.onrender.com/api/v1/users/logout", {
        credentials: "include",
      });
      navigate("/", { replace: true });
      setIsLoggedIn(false);
    } catch (err) {}
  }

  function loginHandler() {
    navigate("/user", { replace: true });
  }

  useEffect(() => {
    setIsLoggedIn(props.isLoggedIn);
  }, [props.isLoggedIn]);

  return (
    <nav className="navigation">
      <div className="navigation__desktop">
        <Logo />
        <ul>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "navActive" : "navInactive"
              }
              to="all"
            >
              <NavHomeIcon />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "navActive" : "navInactive"
              }
              to="movies"
            >
              <NavMoviesIcon />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "navActive" : "navInactive"
              }
              to="television"
            >
              <NavTvIcon />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "navActive" : "navInactive"
              }
              to="bookmark"
            >
              <NavBookmarkIcon />
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="avatar-circle">
        <div className="menu-cont">
          {isLoggedIn ? (
            <button className="access-button" onClick={logoutHandler}>
              Logout
            </button>
          ) : (
            <button className="access-button" onClick={loginHandler}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
