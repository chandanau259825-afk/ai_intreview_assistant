import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = { list: [] }

const slice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    addCandidate(state, action) {
      state.list.push({ id: uuidv4(), ...action.payload })
    },
    updateCandidate(state, action) {
      const { id, changes } = action.payload
      const idx = state.list.findIndex(c => c.id === id)
      if (idx >= 0) state.list[idx] = { ...state.list[idx], ...changes }
    },
    addChatEntry(state, action) {
      const { id, entry } = action.payload
      const candidate = state.list.find(c => c.id === id)
      if (candidate) {
        candidate.chat = candidate.chat || []
        candidate.chat.push(entry)
      }
    }
  }
})

export const { addCandidate, updateCandidate, addChatEntry } = slice.actions
export default slice.reducer