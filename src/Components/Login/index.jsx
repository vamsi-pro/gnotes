import React, { useState, useEffect } from 'react'

// material-ui
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core'

// tools
import { useHistory } from 'react-router-dom'

// styles
import './styles.css'

const Login = ({ setAuthorize }) => {
    const [credentials, setCredentials] = useState({ userName: '', password: '' })
    const [userDetails, setUserDetails] = useState({})

    const [userError, setUserError] = useState({ error: null, message: '' })
    const [passError, setPassError] = useState({ error: null, message: '' })

    const history = useHistory()

    useEffect(() => {
        const details = localStorage.getItem('userDetails')
        console.log(details)
        if (details) {
            setUserDetails(JSON.parse(details))
        }
    }, [])

    const onChangehandler = (e) => {
        const { name, value } = e.target
        setCredentials({ ...credentials, [name]: value })
        console.log(credentials)
    }

    const errorHandling = () => {
        const { userName, password } = credentials

        if (userName === '' || userDetails.userName !== userName) {
            setUserError({ error: true, message: 'Enter valid username' })
            console.log('usrname', userError)
        } else {
            setUserError({ error: null, message: '' })
        }
        if (password === '' || userDetails.password !== password) {
            setPassError({ error: true, message: 'Enter valid password' })
        } else {
            setPassError({ error: null, message: '' })
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const { userName, password } = credentials

        if (userDetails.userName === userName && userDetails.password === password) {
            history.push('/dashboard')
            setAuthorize(true)
            setUserError({ error: null, message: '' })
            setPassError({ error: null, message: '' })
        } else {
            errorHandling()
        }
    }

    return (
        <div data-testid="login-test">
            <Grid>
                <Paper elevation={10} className="p-5 mx-auto wrapper">
                    <Grid align="center">
                        <Avatar className="bg-primary"></Avatar>
                        <h4 className="py-2">Sign In</h4>
                    </Grid>
                    <TextField
                        label="Username"
                        name="userName"
                        placeholder="Enter user name"
                        autoComplete="off"
                        value={credentials.userName}
                        onChange={onChangehandler}
                        className="py-1"
                        fullWidth
                        required
                        error={userError.error}
                        helperText={userError.message}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        className="py-1 mt-3"
                        type="password"
                        autoComplete="off"
                        value={credentials.password}
                        onChange={onChangehandler}
                        fullWidth
                        required
                        error={passError.error}
                        helperText={passError.message}
                    />
                    <Button
                        type="submit"
                        color="primary"
                        className="mt-5 px-2 text-capitalize"
                        onClick={onSubmitHandler}
                        variant="contained"
                        fullWidth
                    >
                        Sign In
                    </Button>
                </Paper>
            </Grid>
        </div>
    )
}

export default Login
