import React, { useEffect, useState } from "react"
import { getLectureQuiz } from "../services/operations/lectureQuizAPI"
import { useNavigate, useParams } from "react-router-dom"

const Quiz = () => {
  const { subSectionId } = useParams()
  const navigate = useNavigate()

  const [quiz, setQuiz] = useState(null)

  const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState([])
    const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await getLectureQuiz(subSectionId)
        console.log("QUIZ DATA => ", data)
        setQuiz(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchQuiz()
  }, [subSectionId])

    const handleAnswer = (index) => {
        const updatedAnswers = [...answers]
        updatedAnswers[currentQuestion] = index
        setAnswers(updatedAnswers)
    }
  const handleNext = () => {
    if (currentQuestion === quiz.questions.length - 1) {
      let finalScore = 0

      answers.forEach((answer, index) => {
        if (
          answer ===
          quiz.questions[index].correctAnswer
        ) {
          finalScore++
        }
      })

      setScore(finalScore)
      setShowResult(true)
    } else {
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
      if (currentQuestion > 0) {
          setCurrentQuestion((prev) => prev - 1)
      }
  }

  if (quiz === null) {
    return <div className="p-10 text-white">Loading...</div>
  }

  if (!quiz) {
    return (
      <div className="p-10 text-white">
        No quiz available for this course.
      </div>
    )
  }

  if (showResult) {
    const percentage = Math.round(
        (score / quiz.questions.length) * 100
    )
    const passed = percentage >= 70

    return (
        <div className="p-10 text-white">
        <h1 className="text-3xl font-bold">
            Quiz Completed
        </h1>

        <p className="mt-4 text-xl">
            Score: {score} / {quiz.questions.length}
        </p>

        <p className="mt-2 text-xl">
            Percentage: {percentage}%
        </p>

        <p className="mt-4 text-2xl font-bold">
          {passed
            ? "🎉 Congratulations! You Passed"
            : "❌ You Did Not Pass"}
        </p>

        <div className="mt-6 flex gap-4">
            <button
                onClick={() => {
                setCurrentQuestion(0)
                setScore(0)
                setAnswers([])
                setShowResult(false)
                }}
                className="rounded-md bg-yellow-50 px-5 py-2 text-black"
            >
                Retake Quiz
            </button>

            <button
                onClick={() => navigate(-1)}
                className="rounded-md bg-richblack-700 px-5 py-2 text-white"
            >
                Back to Lecture
            </button>
            </div>
        </div>
    )
    }

  return (
    <div className="p-10 text-white">
      <h1 className="mb-8 text-3xl font-bold">
        AI Quiz
      </h1>

      

        <p className="mb-4 text-yellow-50">
            Question {currentQuestion + 1} / {quiz.questions.length}
        </p>

      <h2 className="text-xl">
        {quiz.questions[currentQuestion].question}
      </h2>

      <div className="mt-4 flex flex-col gap-3">
        {quiz.questions[currentQuestion].options.map(
          (option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`rounded-md border p-3 text-left ${
                answers[currentQuestion] === index
                  ? "border-yellow-50 bg-yellow-800"
                  : "border-richblack-600"
              }`}
            >
              {option}
            </button>
          )
        )}
      </div>

      <div className="mt-6 flex gap-4">
            <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="rounded-md bg-richblack-700 px-5 py-2 text-white disabled:opacity-50"
            >
                Previous
            </button>

            <button
                onClick={handleNext}
                disabled={answers[currentQuestion] === undefined}
                className="rounded-md bg-yellow-50 px-5 py-2 text-black disabled:opacity-50"
            >
                {currentQuestion === quiz.questions.length - 1
                ? "Finish Quiz"
                : "Next"}
            </button>
        </div>
    </div>
  )
}

export default Quiz