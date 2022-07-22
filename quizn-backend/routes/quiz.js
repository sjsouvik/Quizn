const express = require("express");
const router = express.Router();

const {
  getAllQuizzes,
  getQuizById,
  getQuiz,
  createQuiz,
  addQuestions,
} = require("../controllers/quiz");

router.route("/quiz").get(getAllQuizzes).post(createQuiz);

router.param("quizId", getQuizById);

router.route("/quiz/:quizId").get(getQuiz).post(addQuestions);

module.exports = router;
