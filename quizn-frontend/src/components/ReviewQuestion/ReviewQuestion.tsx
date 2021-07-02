import { useData } from "../../providers/QuizDataProvider/QuizDataProvider";

import CurrentQuestion from "../CurrentQuestion/CurrentQuestion";

import "./ReviewQuestion.css";

const ReviewQuestion = ({ score }: { score: number }) => {
  const { state } = useData();

  return (
    <div>
      <h3>Review the answers</h3>
      <p>
        Score: {score} / {state.questions && state.questions.length * 10}
      </p>
      <div className="quiz-answer">
        {state.questions &&
          state.questions.map((question, index) => (
            <CurrentQuestion questionNo={index + 1} question={question} />
          ))}
      </div>
    </div>
  );
};

export default ReviewQuestion;
