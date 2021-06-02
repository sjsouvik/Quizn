import { useData } from "../../providers/QuizDataProvider/QuizDataProvider";
import { Question, Option } from "../../data/quizData.types";

const CurrentQuestion = ({
  questionNo,
  question,
}: {
  questionNo: number;
  question: Question;
}) => {
  const { dispatch } = useData();

  const optionSelectHandler = (option: Option) => {
    dispatch({
      type: "SELECT_OPTION",
      payload: {
        option: option.value,
      },
    });

    if (option.isCorrect) {
      dispatch({ type: "UPDATE_SCORE", payload: question.point });
    }
  };

  return (
    <div className="question-box" style={{ width: "100%" }}>
      <h3>
        <span>{questionNo}. </span>
        {question.question}
      </h3>
      {question.options.map((option, index) => (
        <p
          key={index}
          className="options"
          style={
            question.selectedOption
              ? option.isCorrect
                ? {
                    backgroundColor: "green",
                    color: "white",
                    pointerEvents: "none",
                  }
                : question.selectedOption === option.value
                ? {
                    backgroundColor: "red",
                    color: "white",
                    pointerEvents: "none",
                  }
                : { pointerEvents: "none" }
              : undefined
          }
          onClick={() => optionSelectHandler(option)}
        >
          {option.value}
        </p>
      ))}
    </div>
  );
};

export default CurrentQuestion;
