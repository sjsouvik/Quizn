const Quiz = require("../models/quiz");

exports.getQuizById = async (req, res, next, id) => {
  try {
    const quiz = await Quiz.findById(id).populate("questions");

    if (!quiz) {
      return res.json({ message: "NOT Found the quiz" });
    }

    req.quiz = quiz;
    next();
  } catch (error) {
    res.status(400).json({
      message: "Error occured",
      errorMessage: error.message,
    });
  }
};

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate("questions");
    res.json({ quizzes });
  } catch (error) {
    res.status(500).json({
      message: "Unable to get quizzes",
      errorMessage: error.message,
    });
  }
};

exports.createQuiz = async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    const savedQuiz = await newQuiz.save();
    res.json({ savedQuiz });
  } catch (error) {
    res.status(500).json({
      message: "Unable to save the quiz",
      errorMessage: error.message,
    });
  }
};

exports.getQuiz = (req, res) => {
  let { quiz } = req;
  quiz.__v = undefined;
  res.json({ quiz });
};

exports.addQuestions = async (req, res) => {
  try {
    const newQuestions = req.body.questions;
    await Quiz.updateOne(
      { _id: req.quiz._id },
      { $push: { questions: newQuestions } }
    );

    res.json({ message: "Updated the questions for the quiz" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occured", errorMessage: error.message });
  }
};
