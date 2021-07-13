//React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { TiSocialFacebook, TiSocialTwitter, TiSocialVimeo, TiSocialInstagram } from "react-icons/ti"

//Context
import { getAll } from "../Context/Context";

//CSS
import "./Component.css";

const Teams = () => {

    const [team, setTeam] = useState();

    useEffect(() => {
        getAll("teams").then(res => setTeam(res))
    }, [])

    return (
        <>
            <div className="container my-3">
                <article className="row text-center">
                    <section className="col-12">
                        <h1>Experienced Team</h1>
                        <p>
                            To doesn't his appear replenish together called he of mad place won't wherein blassed seconed every wherein <br />
                            were meat kind wherein and martcin
                        </p>
                    </section>
                </article>
                <article className="row text-center">
                    {
                        team?.map((item) => (
                            <section key={item?.id} className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: "70px" }}>
                                <section className="teams">
                                    <img src={`https://localhost:44364/Team/${item?.image}`} className="img-fluid image" alt={item.name} />
                                    <div style={{ backgroundColor: "white" }} className="box">
                                        <h5>{item?.name}</h5>
                                        <p>{item?.role}</p>
                                        <div className="teams-overlay">
                                            <Link className="Link" to="/">
                                                <TiSocialFacebook />
                                            </Link>
                                            <Link className="Link" to="/">
                                                <TiSocialTwitter />
                                            </Link>
                                            <Link className="Link" to="/">
                                                <TiSocialVimeo />
                                            </Link>
                                            <Link className="Link" to="/">
                                                <TiSocialInstagram />
                                            </Link>
                                            
                                            
                                            
                                        </div>
                                    </div>
                                </section>
                            </section>
                        ))
                    }
                </article>
            </div>

        </>
    )
}

export default Teams;