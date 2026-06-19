const mongoose = require("mongoose");

const LectureQuiz = require("../models/LectureQuiz")
const Groq = require("groq-sdk")


const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})


const SubSectionSchema = new mongoose.Schema({
	title: { type: String },
	timeDuration: { type: String },
	description: { type: String },
	videoUrl: { type: String },

	quiz: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "LectureQuiz",
	},
});

module.exports = mongoose.model("SubSection", SubSectionSchema);
