import React from 'react';
import { Route, Switch,  Link, Redirect} from 'react-router-dom';


import Home from './components/Home/Home'

import Login from './components/layout/Login'
import Register from './components/layout/Register'

import Dashboard from './components/Profile/Dashboard'


import {userService} from "./services/authentication.service";
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        userService.loggedIn() === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

const routing = () => (
    <div>
	    <Switch>
   			<Route exact path="/" component={Home} label="Home"/>
   			<Route exact path="/login" component={Login} label="Login"/>
   			<Route exact path="/register" component={Register} label="Register"/>
			<PrivateRoute path="/dashboard/" component={Dashboard} label="Dashboard" />
	    </Switch>
    </div>
)
export default routing;