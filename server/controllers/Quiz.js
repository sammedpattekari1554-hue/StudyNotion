const Groq = require("groq-sdk")
const Course = require("../models/Course")
const Quiz = require("../models/Quiz")

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

exports.generateQuiz = async (req, res) => {
  try {
    const { courseId } = req.params

    const course = await Course.findById(courseId)
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      })
    }

    let content = course.courseDescription + "\n"

    course.courseContent.forEach((section) => {
      section.subSection.forEach((lecture) => {
        content += lecture.title + "\n"
        content += lecture.description + "\n"
      })
    })

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `
Generate 10 MCQ questions from the following course content.

Return ONLY valid JSON.

Format:
[
 {
   "question":"...",
   "options":["A","B","C","D"],
   "correctAnswer":0
 }
]

Content:
${content}
`,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.3,
    })

    const responseText =
      completion.choices[0].message.content

    const questions = JSON.parse(responseText)

    const quiz = await Quiz.create({
      course: courseId,
      questions,
    })

    return res.status(200).json({
      success: true,
      data: quiz,
    })
  } catch (error) {
    console.log(error)

    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}


exports.getQuiz = async (req, res) => {
  try {
    console.log("GET QUIZ HIT")

    const { courseId } = req.params

    const quiz = await Quiz.findOne({ course: courseId })

    console.log("QUIZ FOUND", quiz?._id)

    return res.status(200).json({
      success: true,
      data: quiz,
    })
  } catch (error) {
    console.log(error)

    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}