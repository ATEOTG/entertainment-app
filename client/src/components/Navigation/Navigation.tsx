import { NavLink } from "react-router-dom";
import Logo from "../svg/Logo";
import NavHomeIcon from "../svg/NavHomeIcon";
import NavMoviesIcon from "../svg/NavMoviesIcon";
import NavTvIcon from "../svg/NavTvIcon";
import NavBookmarkIcon from "../svg/NavBookmarkIcon";

function Navigation() {
  return (
    <nav className="navigation">
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
      <div className="avatar-circle"></div>
    </nav>
  );
}

export default Navigation;
