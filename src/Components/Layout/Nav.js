//React
import React from "react";


//Jquery
import $ from "jquery"

//CSS
import "./Layout.css"
import { Link } from "react-router-dom";

//Image

// import Spa from "../img/spa.png"

const Nav = () => {

    $(function() {
        $(document).scroll(function() {
            var $nav = $(".navbar");
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height())
        });
    });

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse offset-lg-2" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link text-decoration-none" style={{ color: "black" }} to="/">Home</Link>
                        <a className="nav-link text-decoration-none" style={{ color: "black" }} href="#About">About</a>
                        <Link className="nav-link text-decoration-none" style={{ color: "black" }} to ="/Feature">Feature</Link>
                        <Link className="nav-link text-decoration-none" style={{ color: "black" }} to="/Service">Service</Link>
                        <a className="nav-link text-decoration-none" style={{ color: "black" }} href="#Contact">Contact</a>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav;