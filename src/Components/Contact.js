import React, { useEffect, useState } from "react";
import { getAll, post } from "../Context/Context";

import appointment from "./img/appointment-img.jpg"

const Contact = () => {

    const [option, setOption] = useState([]);
    const [message, setMessage] = useState({
        name: "",
        email: "",
        procedureId: "",
        date: "",
        time: "",
        notes: ""
    });


    useEffect(() => {
        getAll("procedures").then(res => setOption(res))
    }, [])

    const handleChange = (event) => {
        event.persist();

        if (event.target.id === "procedureId") {
            setMessage(prevState => ({
                ...prevState,
                [event.target.id]: Number(event.target.value),
                // "date": new Date()

            }))
        }else{
            setMessage(prevState => ({
                ...prevState,
                [event.target.id]: event.target.value,
                // "date": new Date()

            }))
        }


    }

    const handleSend = (event) => {
        event.preventDefault();

        post("appointments", message).then(res => {
            console.log(res, message);
            setMessage({
                name: "",
                email: "",
                procedureId: "",
                date: "",
                time: "",
                notes: ""
            })
            alert("Din besked er blevet sendt")
        });
    }


    return (
        <>
            <article className="row my-4" id="Contact">
                <section className="col-lg-4 col-md-6 col-sm-12 p-0">
                    <img src={appointment} alt="appointment" className="img-fluid" />
                </section>
                <section className="col-lg-8 col-md-6 col-sm-12" style={{ backgroundColor: "#fff9f8" }}>
                    <form>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 my-md-2">
                                <input type="text" value={message?.name} onChange={handleChange} required id="name" placeholder="Name" className="form-control bg-transparent" style={{ border: "none", borderBottom: "1px solid lightgrey", borderRadius: "none" }} />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 my-md-2">
                                <input type="email" value={message?.email} onChange={handleChange} required id="email" placeholder="Email Adress" className="form-control bg-transparent" style={{ border: "none", borderBottom: "1px solid lightgrey", borderRadius: "none" }} />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 my-md-2">
                                <select onChange={handleChange} value={message?.procedureId} required id="procedureId" className="form-control bg-transparent" style={{ border: "none", borderBottom: "1px solid lightgrey", borderRadius: "none" }}>
                                    <option value="">Select Service</option>
                                    {
                                        option?.map(options => (
                                            <option key={options?.id} value={options?.id}>{options?.title}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 my-md-2">
                                <input type="tlf" value={message?.phone} onChange={handleChange} required id="phone" placeholder="Phone Number" className="form-control bg-transparent" style={{ border: "none", borderBottom: "1px solid lightgrey", borderRadius: "none" }} />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 my-md-2">
                                <input type="date" value={message?.date} onChange={handleChange} required id="date" className="form-control bg-transparent" style={{ border: "none", borderBottom: "1px solid lightgrey", borderRadius: "none" }} />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 my-md-2 ">
                                <input type="time" value={message?.time} onChange={handleChange} required id="time" className="form-control bg-transparent" style={{ border: "none", borderBottom: "1px solid lightgrey", borderRadius: "none" }} />
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 my-md-2">
                                <textarea id="notes" value={message?.notes} className="form-control bg-transparent" onChange={handleChange} rows="3" style={{ resize: "none", border: "none", borderBottom: "1px solid lightgrey", borderRadius: "none" }} placeholder="Your Notes"></textarea>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 my-md-2">
                                <button className="btn button" onClick={handleSend} style={{ borderRadius: "20px" }}>MAKE AN APPOINTMENT</button>
                            </div>
                        </div>
                    </form>
                </section>
            </article>
        </>
    )
}

export default Contact;