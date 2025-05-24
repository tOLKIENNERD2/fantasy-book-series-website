import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you will create a CSS file for styling

const Header = () => {
    return (
        <header>
            <h1>Fantasy Book Series</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;