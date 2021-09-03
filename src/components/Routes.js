import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path='/signup' component={Signup} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
