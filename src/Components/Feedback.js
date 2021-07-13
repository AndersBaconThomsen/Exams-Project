//React
import React from "react";

//images
import quote from "./img/quote.png"
import c1 from "./img/customers/client-1.png"
import c2 from "./img/customers/client-1.png"


const Feedback = () => {



    return (
        <>
            <article className="row align-items-center" style={{ backgroundColor: "pink" }}>
                <section className="col-12 text-center my-3">
                    <img src={quote} alt="quote" />
                </section>
                <section className="col-12 text-center">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <p>
                                        First i beast be fruitful open you tree all Won't can't likeness and you're have whales creatures seed to two grass <br/>
                                        life blessed you meat shall you winged under from their there he That you're one called make much red <br/>
                                        wherein set fourth green bearing filth replenish given she had 
                                    </p>
                                    <img src={c1} className="img-fluid mb-5" alt="c1" />
                                </div>
                                <div className="carousel-item">
                                    <p>
                                        First i beast be fruitful open you tree all Won't can't likeness and you're have whales creatures seed to two grass <br/>
                                        life blessed you meat shall you winged under from their there he That you're one called make much red <br/>
                                        wherein set fourth green bearing filth replenish given she had 
                                    </p>
                                    <img src={c2} className="img-fluid mb-5" alt="c2" />
                                </div>
                            </div>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                        </div>
                </section>

            </article>


        </>
    )
}

export default Feedback