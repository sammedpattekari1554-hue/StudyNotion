import { apiConnector } from "../apiConnector"

const BASE_URL = process.env.REACT_APP_BASE_URL
console.log("BASE URL =>", BASE_URL)

export const getQuiz = async (courseId) => {
  try {

    const url = `${BASE_URL}/quiz/getQuiz/${courseId}`
    console.log("URL =", url)

    const response = await apiConnector("GET", url)

    return response.data.data
  } catch (error) {
    console.log(error)
  }
}