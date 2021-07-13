//React
import React from "react";
import { Link } from "react-router-dom"
import { TiSocialFacebook, TiSocialTwitter, TiSocialVimeo, TiSocialInstagram } from "react-icons/ti"

//Jquery
import $ from "jquery"

//Images
import Leospa from "../img/logo.png"

//CSS
import "./Layout.css"

const Footer = () => {

    $(function() {
        $(document).scroll(function() {
            var $nav = $(".navbar");
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height())
        });
    });


    return (
        <>
            <footer className="container-fluid text-center" style={{ backgroundColor: "#fff9f8t" }}>
                <img src={Leospa} alt="Leospa" className="img-fluid pt-5" />
                <h5>
                    <Link to="/" className="text-decoration-none mx-3 Link">Home</Link>
                    <a href="#About" className="text-decoration-none mx-3 Link" >About</a>
                    <Link to="/Feature"className="text-decoration-none mx-3 Link" >Feature</Link>
                    <Link to="/Service" className="text-decoration-none mx-3 Link" >Service</Link>
                    <a href="#Contact" className="text-decoration-none mx-3 Link" >Contact</a>
                </h5>
                <p style={{fontSize: "20px"}} className="my-3">
                    <TiSocialFacebook className="Link" /> | <TiSocialTwitter className="Link" /> | <TiSocialVimeo className="Link" /> | <TiSocialInstagram className="Link" /> |
                </p>
                <p style={{fontSize: "15px"}} className="m-0 pb-4">
                    &copy; Copyright 2019 <span style={{color: "pink"}}> THEMEIES.COM </span> ALL RIGHTS RESERVED
                </p>
            </footer>
        </>
    )
}

export default Footer;