const express = require("express")
const router = express.Router()

const { getLectureQuiz } = require("../controllers/LectureQuiz")

router.get("/:subsectionId", getLectureQuiz)

module.exports = router