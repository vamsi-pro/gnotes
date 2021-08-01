import React, { useEffect, useState } from 'react'

// tools
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// components
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'

const App = () => {
    /**
     * Setting the credentials in local storage on load.
     * sice we don't have any sign up page
     */
    useEffect(() => {
        localStorage.setItem(
            'userDetails',
            JSON.stringify({ userName: 'gnotes@gmail.com', password: 'gnotes' })
        )
    }, [])

    /**
     * Setting the protected routes and routing
     */
    const [authorize, setAuthorize] = useState(false)

    return (
        <Router>
            <Switch>
                <Route exact path="/dashboard">
                    {!authorize ? <Redirect to="/" /> : <Dashboard setAuthorize={setAuthorize} />}
                </Route>
                <Route exact path="/" component={() => <Login setAuthorize={setAuthorize} />} />
            </Switch>
        </Router>
    )
}

export default App
