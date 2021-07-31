import { configureStore } from '@reduxjs/toolkit'
import addNoteReducer from './redux/addNoteSlice'

export default configureStore({
    reducer: {
        notes: addNoteReducer,
    },
})
