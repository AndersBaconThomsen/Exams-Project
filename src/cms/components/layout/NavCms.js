import React from "react";

import { Link } from "react-router-dom"

const NavCms = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/cms">LeoSpa CMS</Link>
                        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-nav px-3 ">
                            <Link className="nav-link nav-item" to="/cms">&copy; Copyright 2019 <span style={{ color: "pink" }}> THEMEIES.COM </span> ALL RIGHTS RESERVED</Link>
                        </div>
                    </header>
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cms/abouts">
                                        About                                
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cms/procedures">
                                        Procedures
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled" to="/cms/slider">
                                        Slider
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cms/teams">
                                        Team
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cms/appointments">
                                        Appointments
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavCms;