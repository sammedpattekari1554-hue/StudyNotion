const mongoose = require("mongoose")

const quizSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: Number,
    },
  ],
}, { timestamps: true })

module.exports = mongoose.model("Quiz", quizSchema)