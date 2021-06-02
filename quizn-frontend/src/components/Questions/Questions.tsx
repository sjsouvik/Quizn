import React from "react";
import { useData } from "../../providers/QuizDataProvider/QuizDataProvider";

import { useLocation } from "react-router-dom";

import CurrentQuestion from "../CurrentQuestion/CurrentQuestion";
import Rules from "../Rules/Rules";
import ReviewQuestion from "../ReviewQuestion/ReviewQuestion";

import { Quiz } from "../../data/quizData.types";

import "./Questions.css";

const Questions = () => {
  const { state, dispatch } = useData();
  const location = useLocation();
  const quiz = location.state as Quiz;

  const nextOrSubmitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const eventTarget = e.target as HTMLButtonElement;
    if (eventTarget.textContent === "Next") {
      dispatch({ type: "GO_TO_NEXT_QUESTION" });
    } else if (eventTarget.textContent === "Submit") {
      dispatch({ type: "SUBMIT_QUIZ" });
    }
  };

  return (
    <div>
      {!state.questions && <Rules />}
      {state.isSubmitted && <ReviewQuestion />}
      {state.questions && !state.isSubmitted && (
        <>
          <h3 style={{ textDecoration: "underline" }}>{quiz?.title}</h3>
          <div
            style={{
              // display: "flex",
              // justifyContent: "space-between",
              width: "40%",
              margin: "auto",
            }}
          >
            <p style={{ textAlign: "center" }}>
              <b>Score:</b> {state.score}
            </p>
          </div>
          <div className="question-box">
            <CurrentQuestion
              questionNo={state.currentQuestion + 1}
              question={state.questions[state.currentQuestion]}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <button
                className="btn btn-primary"
                style={
                  state.currentQuestion === 0
                    ? { visibility: "hidden" }
                    : { visibility: "visible" }
                }
                onClick={() => dispatch({ type: "GO_TO_PREVIOUS_QUESTION" })}
              >
                Prev
              </button>
              {state.currentQuestion + 1} of {state.questions.length} Questions
              <button
                className="btn btn-primary"
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  nextOrSubmitHandler(e)
                }
              >
                {state.currentQuestion === state.questions.length - 1
                  ? "Submit"
                  : "Next"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Questions;
