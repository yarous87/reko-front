import './header.scss';

import React from 'react';

const Header = function(props) {
    return (
        <header className="header">
            <div className="container">
                <h1>{props.title}</h1>
            </div>
        </header>
    )
}

export { Header };