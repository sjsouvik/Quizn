const Question = require("../models/question");

exports.getQuestionById = async (req, res, next, id) => {
  try {
    const question = await Question.findById(id);

    if (!question) {
      return res.json({ message: "NOT Found the question" });
    }

    req.question = question;
    next();
  } catch (error) {
    res.status(400).json({
      message: "Error occured",
      errorMessage: error.message,
    });
  }
};

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json({ questions });
  } catch (error) {
    res.status(500).json({
      message: "Unable to get questions",
      errorMessage: error.message,
    });
  }
};

exports.createQuestion = async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    const savedQuestion = await newQuestion.save();
    res.json({ savedQuestion });
  } catch (error) {
    res.status(500).json({
      message: "Unable to save the question",
      errorMessage: error.message,
    });
  }
};

exports.getQuestion = (req, res) => {
  let { question } = req;
  question.__v = undefined;
  res.json({ question });
};

exports.addOptions = async (req, res) => {
  try {
    await Question.updateOne(
      { _id: req.question._id },
      { $push: { options: req.body.option } }
    );

    res.json({ message: "Successfully added the option" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occured", errorMessage: error.message });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const deletedQuestion = await Question.deleteOne({
      _id: req.question._id,
    });
    res.json({ deletedQuestion });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occured", errorMessage: error.message });
  }
};
