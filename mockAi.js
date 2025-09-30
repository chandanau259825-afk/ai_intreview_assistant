const easy = [
  'What is React and why use it?',
  'Explain props vs state in React.'
]
const medium = [
  'How does the virtual DOM work?',
  'Describe how to design an API endpoint for pagination in Node.js.'
]
const hard = [
  'Explain event loop and how Node.js handles concurrency.',
  'Design a high-level architecture for a scalable chat application.'
]

export default {
  generateQuestions: async () => {
    return [...easy.slice(0,2), ...medium.slice(0,2), ...hard.slice(0,2)]
  },
  evaluate: async (q, a) => {
    const len = (a || '').length
    const base = Math.min(10, Math.round(len / 20))
    const feedback = base >= 6 ? 'Good' : 'Could be improved'
    return { score: base, feedback }
  },
  summarize: async (candidate) => {
    const avg = Math.round((candidate.chat || []).reduce((s,e)=>s+(e.score||0),0) / ((candidate.chat||[]).length||1))
    return { summary: `Candidate ${candidate.name || ''} scored ${avg}/10.` , score: avg }
  }
}