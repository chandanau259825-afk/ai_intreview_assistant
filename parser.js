import pdfParse from 'pdf-parse'
import mammoth from 'mammoth'

export async function parseFile(file) {
  const name = file.name.toLowerCase()
  if (name.endsWith('.pdf')) {
    const buffer = await file.arrayBuffer()
    const data = await pdfParse(Buffer.from(buffer))
    return extractFields(data.text)
  } else if (name.endsWith('.docx')) {
    const arrayBuffer = await file.arrayBuffer()
    const result = await mammoth.extractRawText({ arrayBuffer })
    return extractFields(result.value)
  } else {
    throw new Error('Unsupported file type')
  }
}

function extractFields(text) {
  const email = (text.match(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i) || [null])[0]
  const phone = (text.match(/(\+?\d{1,4}[\s-]?)?\d{10}/) || [null])[0]
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
  const nameGuess = lines.length ? lines[0] : null
  return { text, name: nameGuess, email, phone }
}