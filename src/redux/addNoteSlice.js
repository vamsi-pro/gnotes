import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notesList: [],
}

const addNoteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        saveNote: (state, action) => {
            state.notesList.push(action.payload)
        },
        removeNote: (state, action) => {
            const { notesList } = state
            notesList.forEach((element, i) => {
                if (element.id === action.payload.id) {
                    notesList.splice(i, 1)
                }
            })
        },
    },
})
export const { saveNote } = addNoteSlice.actions

export const { removeNote } = addNoteSlice.actions

export const selectNoteList = (state) => state.notes.notesList

export default addNoteSlice.reducer
