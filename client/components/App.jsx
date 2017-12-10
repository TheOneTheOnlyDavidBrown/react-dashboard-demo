import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    hashHistory
} from 'react-router-dom';
import NotFound from './NotFound.jsx';
import Dashboard from './Dashboard.jsx';
import NavBar from './NavBar.jsx';

// Functional stateless component
const App = () => (
    <Router history={hashHistory}>
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />
                <Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />
                <Route path="*" render={(props) => <NotFound {...props} />} />
            </Switch>
        </div>
    </Router>
);
export default App;
