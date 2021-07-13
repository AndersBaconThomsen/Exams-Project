import React, { useState, useEffect } from "react";


import { get, getAll, put } from "../../../Context/Context";

//History
import { useHistory } from "react-router-dom"

const EditAppoiintment = ({ appointments, setState, id }) => {

    const [appointment, setAppointment] = useState();
    const [procedure, setProcedure] = useState();

    const history = useHistory();

    useEffect(() => {
        get("appointments", id).then(res => setAppointment(res));
        getAll("procedures").then(res => setProcedure(res));
    }, [id])

    const handleChange = (event) => {
        event.persist(); //React skal ikke fjerne det når siden loader

        if (event.target.id === "procedureId") {
            setAppointment(prevState => ({
                ...prevState,
                [event.target.id]: Number(event.target.value),

            }))
        }else{
            setAppointment(prevState => ({
                ...prevState,
                [event.target.id]: event.target.value,

            }))
        }
    }

    const handleEdit = (event) => {
        event.preventDefault();
        put("appointments", id, appointment).then(res => {
            const copy = [...appointments];
            const indexToEdit = copy.findIndex(x => Number(x.id) === Number(id));
            copy[indexToEdit] = appointment;

            setState(copy);
            history.push("/cms/appointments");
        })
    }

    return (
        <>
            <form>
                <section className="row">
                    <h2>Edit Appointments</h2>
                    <hr />

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" required id="name" defaultValue={appointment?.name} className="form-control" placeholder="Name" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="email" required id="content" defaultValue={appointment?.email} className="form-control" placeholder="Email" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="procedureId">Procedure</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <select id="procedureId" value={appointment?.procedureId} required className="form-control" onChange={handleChange} >
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
                        <input type="date" required id="date" defaultValue={appointment?.date} className="form-control" placeholder="Email" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="time">Time</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="time" required id="time" defaultValue={appointment?.date} className="form-control" placeholder="Email" onChange={handleChange} />
                    </div>

                    
                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="notes">Notes</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <textarea required id="notes" defaultValue={appointment?.notes} className="form-control" placeholder="Notes" rows="5" onChange={handleChange} ></textarea>
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label>Save</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <button className="btn btn-primary float-end" onClick={handleEdit} >Save</button>
                    </div>
                </section>
            </form>
        </>
    )
}

export default EditAppoiintment;