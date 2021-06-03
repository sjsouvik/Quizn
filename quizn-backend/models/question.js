const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Please enter the question"],
    },
    point: {
      type: Number,
      required: [true, "Please enter point for the question"],
    },
    selectedOption: {
      type: String,
    },
    options: [
      {
        value: String,
        isCorrect: Boolean,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
