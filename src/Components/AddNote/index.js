import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { saveNote } from '../../redux/addNoteSlice'

const AddNote = () => {
    const [noteItem, setNoteItem] = useState({ title: '', description: '' })
    const dispatch = useDispatch()

    const onChangeNoteHandler = (e) => {
        const { name, value } = e.target
        setNoteItem({ ...noteItem, [name]: value })
    }

    const onSubmitNote = (e) => {
        e.preventDefault()
        if (noteItem.title !== '' || noteItem.description !== '') {
            dispatch(saveNote({ item: noteItem, done: false, id: Date.now() }))
            setNoteItem({ title: '', description: '' })
        }
    }

    return (
        <div className="p-4">
            <Button variant="outlined" className="float-right" onClick={onSubmitNote}>
                Add Note
            </Button>
            <div className="form-group pt-4">
                <label htmlFor="exampleInputEmail1">
                    <h6>Title</h6>
                </label>
                <input
                    type="text"
                    name="title"
                    onChange={onChangeNoteHandler}
                    value={noteItem.title}
                    className="form-control col-12"
                    id="exampleInputEmail1"
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                    <h6>Body</h6>
                </label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    onChange={onChangeNoteHandler}
                    value={noteItem.description}
                    name="description"
                    rows="14"
                ></textarea>
            </div>
            <Button
                variant="contained"
                onClick={onSubmitNote}
                color="primary"
                className="float-right"
            >
                Save
            </Button>
        </div>
    )
}

export default AddNote
