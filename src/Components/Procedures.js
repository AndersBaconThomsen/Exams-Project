//React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Context
import { getAll } from "../Context/Context";

//images
import icon from "./img/icons/1.png"
//CSS
import "./Component.css"

const Procedures = () => {

    const [procedure, setProdcedure] = useState();

    useEffect(() => {
        getAll("procedures").then(res => setProdcedure(res))
    }, []);



    return (
        <>
            <article className="row mt-5 text-center">
                {
                    procedure?.map((item, index) => (
                        index > 2 ?
                                <section key={item?.id} className="col-lg-3 col-md-6 col-sm-12">
                                    <Link to="/Service">
                                        <section className="con">
                                            <img src={`https://localhost:44364/Procedures/${item?.image}`} alt={item.title} className="img-fluid image" />
                                            <div className="overlay">
                                                <img src={icon} alt={item.title} className="ICONIC" />
                                            </div>
                                        </section>
                                    </Link>
                                </section>
                            : <React.Fragment key={item?.id}></React.Fragment>

                    ))
                }
            </article>
            <div className="container">
                <article className="row text-center" style={{ marginTop: "70px", marginBottom: "60px" }}>
                    <section className="col-12">
                        <h2 style={{ fontWeight: "bold" }}>Popular procedures</h2>
                        <p>
                            To doesn't his appear together called he of mad place won't wherein blessed second every wherin <br />
                            were meat kind wherein martcin
                        </p>
                    </section>
                </article>
                <article className="row text-center mb-5">
                    {
                        procedure?.map((item, index) => (
                            index < 3 ?
                                <section key={item?.id} className="offset-lg-1 col-lg-3 offset-md-1 col-md-5 col-sm-12" style={{ border: "1px solid lightgrey" }}>
                                    <img src={`https://localhost:44364/Procedures/${item?.image}`} alt={item.title} className="img-fluid py-2" />
                                    <h5>{item?.title}</h5>
                                    <p>
                                        {item?.content}
                                    </p>
                                    <Link to="/Service" className="btn btn-dark mb-3">Read More</Link>
                                </section>
                                : <React.Fragment key={item?.id}></React.Fragment>
                        ))
                    }
                </article>
            </div>
        </>
    )
}

export default Procedures;