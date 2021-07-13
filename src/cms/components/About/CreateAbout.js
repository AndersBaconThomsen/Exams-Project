import React, { useState, useEffect } from "react";

//Context
import { getAll, post } from "../../../Context/Context"

//History
import { useHistory } from "react-router-dom"


const CreateAbout = ({ setState }) => {

    const [abouts, setAbouts] = useState();


    const history = useHistory();

    useEffect(() => {
        getAll("abouts").then(res => setAbouts(res));
    }, [])

    const handleChange = (event) => {
        event.persist(); //React skal ikke fjerne det når siden loader

        setAbouts(prevState => ({
            ...prevState,
            [event.target.id] : event.target.value
        }));
    }

    const handleCreate = (event) => {
        event.preventDefault();

        post("abouts", abouts).then(response => {
            if (response?.id != null) {
                setState(prevState => ([
                    ...prevState,
                    response
                ]));
                history.push("/cms/abouts");
            }
        });
    }



    return (
        <>
            <form>
                <section className="row">
                    <h2>Create product</h2>
                    <hr />

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" required id="title" className="form-control" placeholder="Title" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="content">Content</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <textarea required id="content" className="form-control" placeholder="Content" rows="5" onChange={handleChange} ></textarea>
                    </div>
        
                    <div className="d-none d-md-block col-md-4">
                        <label>Create</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <button className="btn btn-primary float-end" onClick={handleCreate} >Create</button>
                    </div>

                </section>
            </form>
        </>
    )
}

export default CreateAbout;