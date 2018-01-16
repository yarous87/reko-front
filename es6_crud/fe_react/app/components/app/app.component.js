import './app.scss';

import React from 'react';

import { Header } from '../header/header.component';
import { Counter } from '../counter/counter.component';
import { Archive } from '../archive/archive.component';

const App = function() {
    const count = 20;

    return (
        <div className="app">
            <Header title="Warsztaty REACT"></Header>
            
            <div className="container">
                <Archive></Archive>
            </div>
        </div>
    )
}

export { App };