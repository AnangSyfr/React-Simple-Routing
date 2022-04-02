import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">React Route Test</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="dashboard" className="nav-link" aria-current="page">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" className="nav-link" aria-current="page">About</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container py-3 vh-100">
            <div className="card">
                <div className="card-header">Content Page</div>    
                <div className="card-body">
                    <Outlet/>
                </div>
            </div>
        </div>
        <div className="footer text-center bg-secondary p-2">
            2022
        </div>
        </React.Fragment>
    )
}

export default Layout