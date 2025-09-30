import mockAi from '../api/mockAi'

export async function generateQuestions() {
  return mockAi.generateQuestions()
}

export async function evaluateAnswer(question, answer) {
  return mockAi.evaluate(question, answer)
}

export async function finalSummary(candidate) {
  return mockAi.summarize(candidate)
}