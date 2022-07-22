const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const scoreSchema = new mongoose.Schema(
  {
    scores: [
      {
        quiz: {
          type: ObjectId,
          ref: "Quiz",
        },
        score: {
          type: Number,
          required: [true, "Please enter the score"],
        },
      },
    ],
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Score", scoreSchema);
