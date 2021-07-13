//React
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai"

//Components
import Nav from "./Nav";

//Images
import Leospa from "../img/logo.png"
import leaf from "../img/leaf.png"
import Spa from "../img/spa.png"

//CSS
import "./Layout.css"

const Header = () => {
    return (
        <>
            <header >
                <div className="container-fluid p-0">
                    <div className="container">
                        <article className="row">
                            <section className="col-lg-3">
                                <img className="img-fluid" src={Leospa} alt="Leospa" />
                            </section>
                            <section className="col-lg-6">
                                <Nav />
                            </section>
                            <section className="col-lg-3">
                                <img src={Spa} className="img-fluid bg-img" alt="Spa" />
                            </section>
                        </article>
                    </div>
                    <div className="container-fluid">
                        <article className="row">
                            <section className="col-2 p-0">
                                <img className="img-fluid" src={leaf} alt="leaf" />
                            </section>
                            <section className="col-5 p-0 h-text">
                                <p>Spa & Beauty center</p>
                                <h1>
                                    Beuty and success <br />
                                    starts here.
                                </h1>
                                <p>
                                    Together creeping heacen upon dominion be upon won't darkness rule behold <br />
                                    it created good saw after she'd Our set living
                                </p>
                                <a href="#Contact" className="btn p-2 button">Reserve now</a>

                                <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <AiFillPlayCircle style={{ fontSize: "35px", color: "#ff817e" }} />
                                    Watch our story
                                </button>
                                
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body text-center">
                                                <iframe width="769" height="433" src="https://www.youtube.com/embed/yeA6i8a4Dwo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        </article>
                    </div>
                </div>




                <div className="row h-text">

                </div>

            </header>


        </>
    )
}

export default Header;