const mongoose = require("mongoose")

const lectureQuizSchema = new mongoose.Schema(
  {
    subsection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubSection",
      required: true,
    },

    questions: [
      {
        question: String,
        options: [String],
        correctAnswer: Number,
      },
    ],
  },
  { timestamps: true }
)

module.exports = mongoose.model(
  "LectureQuiz",
  lectureQuizSchema
)