import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';

export function App() {
    return (
        <div id="root">
            <h1>HEllo</h1>
            <Navbar />
            <Outlet />
        </div>
    );
}
