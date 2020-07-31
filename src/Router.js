import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './components/Home';
import Map from './components/Map';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Account from './components/Account'

const Router = (props) => {
    return (
        <Switch>
            <Route
                component={props.isLoggedin ? Home : Login}
                path={props.isLoggedin ? '/' : '/login'}
                // render={(props) => {
                //     return (
                //       props.isLoggedIn === true ?
                //       <Redirect to="/" /> : 
                //       <Redirect to="/login" /> 
                //     );
                //}}
              />
            <Route exact path="/" component={Home} />
            <Route path="/login" render={(props) => (
                <Login {...props} isLoggedIn={props.isLoggedIn} handleLogin={props.handleLogin} />
            )} />
            <Route path="/map" component={Map} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/account" component={Account} />
        </Switch>
    )
}

export default Router;