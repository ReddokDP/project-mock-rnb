import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/myform">Form</Link>
            <Link to="/counter">Counter</Link>
        </nav>
    );
}
