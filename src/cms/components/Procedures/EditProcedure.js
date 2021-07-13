import React, { useState, useEffect } from "react";


import { get, put } from "../../../Context/Context";

//History
import { useHistory } from "react-router-dom"

const EditProcedure = ({ procedures, setState, id }) => {

    const [product, setProduct] = useState();

    const history = useHistory();

    useEffect(() => {
        get("procedures", id).then(res => setProduct(res))
    }, [id])

    const handleChange = (event) => {
        event.persist(); //React skal ikke fjerne det når siden loader

        if (event.target.id === "image") {
            const reader = new FileReader();
            reader.onload = handleImageLoad;
            reader.readAsBinaryString(event.target.files[0]);
        } else {
            setProduct(prevState => ({
                ...prevState,
                [event.target.id]: event.target.value
            }));
        }
        
        
    }

    const handleImageLoad = (reader) => {
        setProduct(prevState => ({
            ...prevState,
            "image": btoa(reader.target.result)
        }));
    }


    const handleEdit = (event) => {
        event.preventDefault();
        put("procedures", id, product).then(res => {
            const copy = [...procedures];
            const indexToEdit = copy.findIndex(x => Number(x.id) === Number(id));
            copy[indexToEdit] = product;

            setState(copy);
            history.push("/cms/procedures");
        })
    }
    return (
        <>
            <form>
                <section className="row">
                <h2>Edit product</h2>
                    <hr />

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" required id="title" defaultValue={product?.title} className="form-control" placeholder="Title" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="content">Content</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <textarea required id="content" defaultValue={product?.content} className="form-control" placeholder="Content" rows="5" onChange={handleChange} ></textarea>
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
                                    product?.image ? <img alt="" className="w-100 img-fluid" src={`https://localhost:44364/Procedures/${product?.image}`} /> : null
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

export default EditProcedure;