import './header.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = function(props) {
    return (
        <header className="header">
            <div className="container">
                <h1>{props.title}</h1>

                <ul>
                    <li>
                        <Link to="/">
                            Lista
                        </Link>
                    </li>

                    <li>
                        <Link to="/nowy">
                            Nowy
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export { Header };