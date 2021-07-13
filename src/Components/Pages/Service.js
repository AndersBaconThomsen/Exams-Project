//React
import React, { useEffect, useState } from "react";

//Context
import { getAll } from "../../Context/Context";

//CSS
import "./Pages.css"

const Service = () => {

    const [procedures, setProcedures] = useState([]);

    useEffect(() => {
        getAll("procedures").then(res => setProcedures(res))
    }, [])


    return (
        <>
            <div className="container">
                <article className="row my-4 justify-content-center pb-sm-3">
                    <section className="col-12 text-center">
                        <h1 className="bold mb-4">Popular procedures</h1>
                    </section>
                    {
                        procedures?.map((item, index) => (
                            index < 3 ?
                                <>
                                    <section key={item?.id} className="col-lg-3 col-md-6 col-sm-12 text-center mx-1 my-md-2 pro" style={{ border: "1px solid lightgrey" }}>
                                        <img src={`https://localhost:44364/Procedures/${item?.image}`} alt={item.title} className="img-fluid p-3" />
                                        <h4>
                                            {item?.title}
                                        </h4>
                                        <p className="p-4">
                                            {item?.content}
                                        </p>
                                    </section>

                                </>
                                : <></>

                        ))
                    }
                </article>
                <article className="row justify-content-center">
                    <section className="col-12 text-center">
                        <h2>All Procedures</h2>
                    </section>
                    {
                        procedures?.map(item => (

                            <>
                                <section key={item?.id} className="col-lg-3 col-md-6 col-sm-12 text-center mx-1 my-md-2 pro" style={{ border: "1px solid lightgrey"}}>
                                        <img src={`https://localhost:44364/Procedures/${item?.image}`} alt={item.title} className="img-fluid p-3" />
                                        <h4>
                                            {item?.title}
                                        </h4>
                                        <p className="p-4">
                                            {item?.content}
                                        </p>
                                    </section>
                            </>

                        ))
                    }
                </article>
            </div>
        </>
    )
}

export default Service;