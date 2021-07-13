import React from "react";

//image
import China from "../img/china-rose.png"
import ButterFly from "../img/butterfly.png"
import jasmine from "../img/jasmine.png"
import p1 from "../img/procedures/1.jpg"
import p2 from "../img/procedures/2.jpg"
import p3 from "../img/procedures/3.jpg"
import p4 from "../img/procedures/4.jpg"

const Feature = () => {
    return (
        <>
            <div className="container" id="About">
                <article className="row text-center">
                    <section className="col-3">
                        <img className="img-fluid" src={China} alt="China" />
                    </section>
                    <section className="col-6">
                        <section>
                            <img src={ButterFly} alt="butterfly" />
                            <h2 style={{ fontWeight: "bold" }}>Limited Time Offers</h2>
                            <p>
                                Together creeping heacen upon dominion be upon won't darkness rule behold <br />
                                it created good saw after she'd Our set living.
                                To doesn't his appear together called he of mad place won't wherein blessed second every wherin <br />
                                were meat kind wherein martcin.
                                First i beast be fruitful open you tree all Won't can't likeness and you're have whales creatures seed to two grass
                                life blessed you meat shall you winged under from their there he That you're one called make much red
                                wherein set fourth green bearing filth replenish given she had
                            </p>
                        </section>
                    </section>
                    <section className="col-3" style={{ marginTop: "150px" }}>
                        <img className="img-fluid" src={jasmine} alt="Jasmine" />
                    </section>
                </article>
                <article className="row justify-content-center text-center mt-5" style={{borderBottom: "1px solid lightgrey"}}>
                    <section className="col-lg-3 col-md-6 col-sm-12">
                        <img src={p1} alt="p1" className="img-fluid mx-lg-2 my-md-2 my-sm-2" />
                    </section>
                    <section className="col-lg-3 col-md-6 col-sm-12 mx-lg-2">
                        <img src={p2} alt="p2" className="img-fluid mx-lg-2  my-md-2 my-sm-2"/>
                    </section>
                    <section className="col-lg-3 col-md-6 col-sm-12 mx-lg-2">
                        <img src={p3} alt="p3" className="img-fluid mx-lg-2  my-md-2 my-sm-2"/>
                    </section>
                    <h3 className="my-3">Pig Tour de Spa</h3>
                    <p>
                        Our limited time offer of a complete make over from your pig self to your best self. <br />
                        We are using fresh herbs and pigs mud to strengthen the skins longevity and to clean <br/>
                        the skin of any impurities. We pride ourselves in our skin care products and are only using <br />
                        the best materials to comfort you. <br/>
                        Price: 200$
                    </p>
                </article>

                <article className="row justify-content-center text-center mt-5" style={{borderBottom: "1px solid lightgrey"}}>
                    <section className="col-lg-3 col-md-6 col-sm-12">
                        <img src={p1} alt="p1" className="img-fluid mx-lg-2 my-md-2 my-sm-2" />
                    </section>
                    <section className="col-lg-3 col-md-12 col-sm-12 mx-lg-2">
                        <img src={p4} alt="p4" className="img-fluid mx-lg-2 my-md-2 my-sm-2" />
                    </section>
                    <section className="col-lg-3 col-md-6 col-sm-12 mx-lg-2">
                        <img src={p3} alt="p3" className="img-fluid mx-lg-2 my-md-2 my-sm-2" />
                    </section>
                    <h3 className="my-3">Massage of gods</h3>
                    <p>
                        A day complete, is not without our offer of Gods Massage. You will experience nirvana <br />
                        and tranquility. This will not only give you the best day of your life but also give you  <br/>
                        more relaxed and flexible muscle structure, so those bones don't crack. Of course we offer you <br />
                        the best materials to comfort you and your needs. <br/>
                        Price: 500$
                    </p>
                </article>
            </div>
        </>
    )
}

export default Feature;