import React, { useEffect } from 'react'

// tools
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    )
}

export default App
