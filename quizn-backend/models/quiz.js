const mongoose = require("mongoose");
require("mongoose-type-url");

const { ObjectId } = mongoose.Schema;

const quizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter quiz title"],
    },
    image: {
      type: mongoose.SchemaTypes.Url,
      required: [true, "Please enter image url for the quiz'"],
    },
    questions: [
      {
        type: ObjectId,
        ref: "Question",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);
