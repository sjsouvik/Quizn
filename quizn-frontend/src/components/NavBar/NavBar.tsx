import { Link, NavLink } from "react-router-dom";

import { useAuth } from "../../providers/AuthProvider/AuthProvider";

import person from "../../assets/person.svg";
import marking from "../../assets/marking.png";

const NavBar = () => {
  const { authToken, authUser } = useAuth();

  return (
    <nav className="quiz-navigation">
      <div className="brand">
        <h3 className="nav-brand">
          <Link to="/">Quizn</Link>
        </h3>
      </div>

      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink
            to={authToken ? "/profile" : "/login"}
            activeStyle={{ fontWeight: "bold" }}
          >
            <img src={person} alt="" style={{ height: "1.5rem" }} />
            <div style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>
              {authToken ? "Hi, " + authUser?.firstName : "Login"}
            </div>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to={authToken ? "/score" : "/login"}
            activeStyle={{ fontWeight: "bold" }}
          >
            <img src={marking} alt="" style={{ height: "1.5rem" }} />
            <div style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>
              Scoreboard
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
