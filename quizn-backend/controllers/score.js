const Score = require("../models/score");

exports.getScore = async (req, res) => {
  try {
    const score = await Score.findOne({ user: req.user._id })
      .populate("user")
      .populate("scores.quiz");

    res.json({ score });
  } catch (error) {
    res.status(404).json({
      message: "Unable to get the scores for the user",
      errorMessage: error.message,
    });
  }
};

exports.createOrUpdateScore = async (req, res) => {
  try {
    let score = await Score.findOne({ user: req.user._id });

    if (!score) {
      score = new Score(req.body);
      score.user = req.user._id;
      score = await score.save();
      return res.json({ message: "Saved 1st score for the user", score });
    }

    const scoreUpdates = req.body.scores[0];
    const quizScoreToBeUpdated = score.scores.find(
      (quizScore) => quizScore.quiz == scoreUpdates.quiz
    );

    if (quizScoreToBeUpdated) {
      scoreUpdates.score > quizScoreToBeUpdated.score &&
        (await Score.updateOne(
          {
            user: req.user._id,
            "scores.quiz": scoreUpdates.quiz,
          },
          { $set: { "scores.$.score": scoreUpdates.score } }
        ));
    } else {
      await Score.updateOne(
        { user: req.user._id },
        { $push: { scores: scoreUpdates } }
      );
    }

    res.json({ message: "Successfully updated the quiz score" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occured", errorMessage: error.message });
  }
};
