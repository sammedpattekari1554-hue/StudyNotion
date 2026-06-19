import { apiConnector } from "../apiConnector"

const BASE_URL = process.env.REACT_APP_BASE_URL

export const getLectureQuiz = async (subsectionId) => {
  try {
    const response = await apiConnector(
      "GET",
      `${BASE_URL}/lecture-quiz/${subsectionId}`
    )

    return response.data.data
  } catch (error) {
    console.log(error)
  }
}