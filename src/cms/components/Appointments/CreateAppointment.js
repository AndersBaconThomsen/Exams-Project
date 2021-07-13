import React, { useState, useEffect } from "react";

//Context
import { getAll, post } from "../../../Context/Context"

//History
import { useHistory } from "react-router-dom"


const CreateAppointment = ({ setState }) => {

    const [procedure, setProcedure] = useState([]);
    const [message, setMessage] = useState();


    const history = useHistory();

    useEffect(() => {
        getAll("procedures").then(res => setProcedure(res))
    }, [])

    const handleChange = (event) => {
        event.persist(); //React skal ikke fjerne det når siden loader

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

    const handleCreate = (event) => {
        event.preventDefault();

        post("appointments", message).then(response => {
            console.log(message)
            if (response?.id != null) {
                setState(prevState => ([
                    ...prevState,
                    response
                ]));
                history.push("/cms/appintments");
            }
        });
    }


    return (
        <>
            <form>
                <section className="row">
                    <h2>Create Appointment</h2>
                    <hr />

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" defaultValue={message?.name} required id="name" className="form-control" placeholder="Title" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="email" defaultValue={message?.email} required id="email" className="form-control" placeholder="Email" rows="5" onChange={handleChange} />
                    </div>


                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="procedureId">Procedure</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <select id="procedureId" value={message?.procedureId} required className="form-control" onChange={handleChange} >
                            <option value="">Pick Procedure</option>
                            {
                                procedure?.map(category => (
                                    <option key={category?.id} value={category?.id}  >{category?.title}</option>
                                ))      
                            }
                        </select>
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="date">Date</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="date" required id="date" defaultValue={message?.date} className="form-control" placeholder="Email" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="time">Time</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="time" required id="time" defaultValue={message?.date} className="form-control" placeholder="Email" onChange={handleChange} />
                    </div>

                    
                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="notes">Notes</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <textarea required id="notes" defaultValue={message?.notes} className="form-control" placeholder="Notes" rows="5" onChange={handleChange} ></textarea>
                    </div>
        
                    <div className="d-none d-md-block col-md-4">
                        <label>Create</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <button className="btn btn-primary float-end" onClick={handleCreate}>Create</button>
                    </div>

                </section>
            </form>
        </>
    )
}

export default CreateAppointment;