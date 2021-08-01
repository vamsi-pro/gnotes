import React from 'react'
import { uid } from 'react-uid'
import { useHistory } from 'react-router-dom'

// components
import AddNote from '../AddNote'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectNoteList, removeNote } from '../../redux/addNoteSlice'

// material-ui
import { List, Grid, ListItem, ListItemText, Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

// styles
import './styles.css'

const Dashboard = ({ setAuthorize }) => {
    const notesList = useSelector(selectNoteList)
    const dispatch = useDispatch()
    const history = useHistory()

    const removeItemHandler = (value) => () => {
        console.log(value)
        dispatch(removeNote(value))
    }

    const onLogout = () => {
        history.push('/')
        setAuthorize(false)
    }

    return (
        <div>
            <nav className="p-4 bg-light border-bottom d-flex justify-content-between">
                <h4 className="text-muted">G Notes</h4>
                <Button variant="contained" onClick={onLogout}>
                    logout
                </Button>
            </nav>
            <div className="d-flex dashboard">
                <div className="listbar border-right">
                    <Grid className="pt-3">
                        <nav className="p-2 bg-light border-bottom">
                            <h4 className="text-muted px-2">List</h4>
                        </nav>
                        <List className="w-100">
                            {notesList.map((list, index) => (
                                <ListItem key={uid(list, index)} className="border-bottom px-3">
                                    <ListItemText
                                        primary={list.item.title}
                                        secondary={list.item.description}
                                    />
                                    <CloseIcon
                                        color="disabled"
                                        className="icon"
                                        onClick={removeItemHandler(list)}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </div>
                <div className="notebar">
                    <AddNote />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
