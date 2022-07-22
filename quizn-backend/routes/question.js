const express = require("express");
const router = express.Router();

const {
  getQuestionById,
  getAllQuestions,
  getQuestion,
  createQuestion,
  addOptions,
  deleteQuestion,
} = require("../controllers/question");

router.route("/question").get(getAllQuestions).post(createQuestion);

router.param("questionId", getQuestionById);

router
  .route("/question/:questionId")
  .get(getQuestion)
  .post(addOptions)
  .delete(deleteQuestion);

module.exports = router;
