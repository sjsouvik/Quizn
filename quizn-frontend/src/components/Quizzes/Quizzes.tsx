import { Link } from "react-router-dom";
import { useData } from "../../providers/QuizDataProvider/QuizDataProvider";

import { useAxios } from "../../server/useAxios";

import Loader from "../Loader/Loader";

import "./Quizzes.css";

const Quizzes = () => {
  const { state, dispatch } = useData();

  const { loading } = useAxios("quiz");

  return (
    <section>
      {loading && <Loader />}
      <div className="quiz-row">
        {state.quizData &&
          state.quizData.map((quiz) => (
            <Link
              key={quiz._id}
              to={{ pathname: `/quiz/${quiz._id}` }}
              state={quiz}
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => dispatch({ type: "RESET_QUIZ" })}
            >
              <div className="card vertical">
                <img
                  src={quiz.image}
                  alt="thumbnail"
                  style={{ width: "100%" }}
                />

                <div className="card-body">
                  <h3 className="card-title">{quiz.title}</h3>
                  <p className="card-text">{quiz.questions.length} Questions</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Quizzes;
