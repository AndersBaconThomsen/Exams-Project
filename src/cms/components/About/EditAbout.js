import React, { useState, useEffect } from "react";


import { get, put } from "../../../Context/Context";

//History
import { useHistory } from "react-router-dom"

const EditAbout = ({ abouts, setState, id }) => {

    const [about, setAbout] = useState();

    const history = useHistory();

    useEffect(() => {
        get("abouts", id).then(res => setAbout(res))
    }, [id])

    const handleChange = (event) => {
        event.persist(); //React skal ikke fjerne det når siden loader

        setAbout(prevState => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));


    }

    const handleEdit = (event) => {
        event.preventDefault();
        put("abouts", id, about).then(res => {
            const copy = [...abouts];
            const indexToEdit = copy.findIndex(x => Number(x.id) === Number(id));
            copy[indexToEdit] = about;

            setState(copy);
            history.push("/cms/abouts");
        })
    }

    return (
        <>
            <form>
                <section className="row">
                    <h2>Edit about</h2>
                    <hr />

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" required id="title" defaultValue={about?.title} className="form-control" placeholder="Title" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="content">Content</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <textarea required id="content" defaultValue={about?.content} className="form-control" placeholder="Content" rows="5" onChange={handleChange} ></textarea>
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

export default EditAbout;