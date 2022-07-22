import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Quizzes from "./components/Quizzes/Quizzes";
import Questions from "./components/Questions/Questions";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Score from "./components/Score/Score";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";

import { useAxios } from "./server/useAxios";

import "./App.css";

export default function App() {
  const { loading } = useAxios("quiz", "quizData");
  const { loading: scoreLoading } = useAxios("score", "scores");

  return (
    <div className="App">
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Quizzes loading={loading} />} />
          <PrivateRoute path="/quiz/:id" element={<Questions />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/profile" element={<Profile />} />
          <PrivateRoute
            path="/score"
            element={<Score loading={scoreLoading} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
