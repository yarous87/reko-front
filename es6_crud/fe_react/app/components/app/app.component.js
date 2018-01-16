import './app.scss';

import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Header } from '../header/header.component';
import { Counter } from '../counter/counter.component';
import { Archive } from '../archive/archive.component';
import { NewPost } from '../newpost/newpost.component';

const history = createBrowserHistory();

const App = function() {
    return (
        <Router history={history}>
            <div className="app">
                <Header title="Warsztaty REACT"></Header>

                <div className="container">
                    <Switch>
                        <Route path='/' exact component={Archive} />
                        <Route path='/nowy' exact component={NewPost} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export { App };