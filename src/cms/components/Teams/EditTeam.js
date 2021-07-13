import React, { useState, useEffect } from "react";


import { get, put } from "../../../Context/Context";

//History
import { useHistory } from "react-router-dom"

const EditProduct = ({ teams, setState, id }) => {

    const [team, setTeam] = useState();

    const history = useHistory();

    useEffect(() => {
        get("teams", id).then(response => setTeam(response))
    }, [id])

    const handleChange = (event) => {
        event.persist(); //React skal ikke fjerne det når siden loader

        if (event.target.id === "image") {
            const reader = new FileReader();
            reader.onload = handleImageLoad;
            reader.readAsBinaryString(event.target.files[0]);
        } else {
            setTeam(prevState => ({
                ...prevState,
                [event.target.id]: event.target.value
            }));
        }


    }

    const handleImageLoad = (reader) => {
        setTeam(prevState => ({
            ...prevState,
            "image": btoa(reader.target.result)
        }));
    }

    const handleEdit = (event) => {
        event.preventDefault();
        put("teams", id, team).then(res => {
            const copy = [...teams];
            const indexToEdit = copy.findIndex(x => Number(x.id) === Number(id));
            copy[indexToEdit] = team;

            setState(copy);
            history.push("/cms/teams");
        })
    }

    return (
        <>
            <form>
                <section className="row">
                    <h2>Edit Team</h2>
                    <hr />

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" required id="name" defaultValue={team?.name} className="form-control" placeholder="Name" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="role">Role</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input required id="role" defaultValue={team?.role} className="form-control" placeholder="Role" onChange={handleChange} />
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
                                    team?.image ? <img alt="" className="w-100 img-fluid" src={`https://localhost:44364/Team/${team?.image}`} /> : null
                                }
                            </div>
                        </div>
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

export default EditProduct;