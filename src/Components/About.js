import React, { useEffect, useState } from "react";
import { getAll } from "../Context/Context";

//image
import ButterFly from "./img/butterfly.png"
import China from "./img/china-rose.png"
import jasmine from "./img/jasmine.png"

const About = () => {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        getAll("abouts").then(res => setAbout(res));
    }, []);


    return (
        <>
            <div className="container" id="About">
                <article className="row text-center">
                    <section className="col-3">
                        <img className="img-fluid" src={China} alt="China" />
                    </section>
                    <section className="col-6">
                        {
                            about?.map(item => (
                                <section key={item?.id}>
                                    <img src={ButterFly} alt="butterfly" />
                                    <h5>About our spa center</h5>
                                    <h2 style={{ fontWeight: "bold" }}>{item?.title} </h2>
                                    <p>
                                        {item?.content}
                                    </p>
                                </section>
                            ))
                        }
                        <button className="btn button" style={{borderRadius: "20px" }}>Read more</button>
                    </section>
                    <section className="col-3" style={{ marginTop: "150px" }}>
                        <img className="img-fluid" src={jasmine} alt="Jasmine" />
                    </section>
                </article>
            </div>

        </>
    )
}

export default About;