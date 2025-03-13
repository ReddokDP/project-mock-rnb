import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MyForm } from './components/Myform';
import { Counter } from './components/Counter';
import { Home } from './components/Home';
import { Link } from "react-router-dom";

export function App() {
    return (
        <div id="root">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/myform">Form</Link>
                <Link to="/counter">Counter</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/myform" element={<MyForm />} />
                <Route path="/counter" element={<Counter />} />
            </ Routes>
        </div>
    );
}