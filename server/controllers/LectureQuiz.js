const LectureQuiz = require("../models/LectureQuiz")

exports.getLectureQuiz = async (req, res) => {
  try {
    const { subsectionId } = req.params

    const quiz = await LectureQuiz.findOne({
      subsection: subsectionId,
    })

    return res.status(200).json({
      success: true,
      data: quiz,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}