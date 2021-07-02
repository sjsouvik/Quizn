import { useData } from "../../providers/QuizDataProvider/QuizDataProvider";

import empty from "../../assets/empty.svg";

import Loader from "../Loader/Loader";

import "./Score.css";

const Score = ({ loading }: { loading: boolean }) => {
  const {
    state: { scores },
  } = useData();

  return (
    <section>
      <h3>Your Scoreboard</h3>
      {loading && <Loader />}
      <div className="quiz-row">
        {!loading && scores.length === 0 && (
          <div>
            <h4>Nothing to show here</h4>
            <img src={empty} alt="empty wishlist" className="no-score" />
          </div>
        )}

        {scores &&
          scores.map((item) => (
            <div className="card score-card">
              <div className="score-body">
                <h3 className="score-card-title">{item.quiz.title}</h3>
                <p className="card-text">
                  Highest Score: <span className="score">{item.score}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Score;
