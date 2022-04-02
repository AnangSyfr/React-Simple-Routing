import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import NoPage from './pages/NoPage';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route  element={<Home/>} index/>
                <Route path="about" element={<About/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    )
}

export default App;