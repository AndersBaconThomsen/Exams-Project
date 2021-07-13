import React, { useState } from "react";

//Context
import { post } from "../../../Context/Context"

//History
import { useHistory } from "react-router-dom"


const CreateProcedure = ({ setState }) => {

    const [procedures, setProcedures] = useState();

    const history = useHistory();


    const handleChange = (event) => {
        event.persist(); //React skal ikke fjerne det når siden loader

        if (event.target.id === "image") {
            const reader = new FileReader();
            reader.onload = handleImageLoad;
            reader.readAsBinaryString(event.target.files[0]);
        }

        setProcedures(prevState => ({
            ...prevState,
            [event.target.id] : event.target.value
        }));
    }

    const handleImageLoad = (reader) => {
        setProcedures(prevState => ({
            ...prevState,
            "image": btoa(reader.target.result)
        }));
    }

    const handleCreate = (event) => {
        event.preventDefault();

        post("procedures", procedures).then(response => {
            if (response?.id != null) {
                setState(prevState => ([
                    ...prevState,
                    response
                ]));
                history.push("/cms/procedures");
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
                        <label htmlFor="image">Image</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <div className="row">
                            <div className="col-6">
                                <input type="file" id="image" className="form-control-file" placeholder="Pick Image" onChange={handleChange} />
                            </div>
                            <div className="col-6">
                                {
                                    procedures?.image ? <img alt={procedures?.title} className="img-fluid" src={`https://localhost:44364/Procedures/${procedures?.image}`} /> : null
                                }
                            </div>
                        </div>
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

export default CreateProcedure;