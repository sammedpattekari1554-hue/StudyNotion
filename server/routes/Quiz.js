const express = require("express")
const router = express.Router()

const { generateQuiz, getQuiz } = require("../controllers/Quiz")


router.post("/generateQuiz/:courseId", generateQuiz)
router.get("/getQuiz/:courseId", getQuiz)

module.exports = router