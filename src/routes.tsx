import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './config/routes.js';


export default () => {
    return (
        <Router>
            <Switch>
                {routes.map(({ path, name, Component }) => <Route key={name} exact path={path} component={Component} />)}
            </Switch>
        </Router>
    );
}
