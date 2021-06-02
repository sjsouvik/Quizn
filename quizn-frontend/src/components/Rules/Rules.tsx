import { useLocation } from "react-router-dom";
import { useData } from "../../providers/QuizDataProvider/QuizDataProvider";

import { Quiz } from "../../data/quizData.types";

const Rules = () => {
  const { dispatch } = useData();
  const location = useLocation();

  const quiz = location.state as Quiz;

  return (
    <div>
      <h3>{quiz?.title}</h3>
      <p>Some rules to know before starting the quiz</p>
      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch({
            type: "LOAD_QUESTIONS",
            payload: { questions: quiz?.questions },
          })
        }
      >
        Start
      </button>
    </div>
  );
};

export default Rules;
