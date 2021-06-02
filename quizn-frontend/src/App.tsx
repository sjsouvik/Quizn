import { Routes, Route, Link } from "react-router-dom";

import Quizzes from "./components/Quizzes/Quizzes";
import Questions from "./components/Questions/Questions";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";

import person from "./assets/person.svg";

import { useAuth } from "./providers/AuthProvider/AuthProvider";

import "./App.css";

export default function App() {
  const { isUserLoggedIn } = useAuth();

  return (
    <div className="App">
      <nav className="quiz-navigation">
        <div className="brand">
          <h3 className="nav-brand">
            <Link to="/">Quizn</Link>
          </h3>
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to={isUserLoggedIn ? "/profile" : "/login"}>
              <img src={person} alt="" style={{ height: "1.5rem" }} />
              <div style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>
                {isUserLoggedIn ? "Hello User" : "Login"}
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Quizzes />} />
          <PrivateRoute path="/quiz/:id" element={<Questions />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
