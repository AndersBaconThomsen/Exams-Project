//Router
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom"

//Layout
import NavCms from "./components/layout/NavCms";

//CSS
import "./AppCms.css"

//Context
import { getAll } from "../Context/Context";

//Components
import HomeCms from "./components/HomeCms"
import ListView from "./components/ListView";
import EditAbout from "./components/About/EditAbout";
import CreateAbout from "./components/About/CreateAbout";
import CreateProcedure from "./components/Procedures/CreateProcedure";
import EditProcedure from "./components/Procedures/EditProcedure";
import CreateAppointment from "./components/Appointments/CreateAppointment"
import EditAppointment from "./components/Appointments/EditAppointment"
import CreateTeam from "./components/Teams/CreateTeam"
import EditTeam from "./components/Teams/EditTeam"


const AppCms = () => {

    const [abouts, setAbouts] = useState([]);
    const [procedures, setProcedures] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getAll("abouts").then(res => setAbouts(res));
        getAll("procedures").then(res => setProcedures(res));
        getAll("appointments").then(res => setAppointments(res))
        getAll("teams").then(res => setTeams(res))
    }, [])

    return (
        <>
       
            <NavCms />
            <main className="container-fluid">
                <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 text-center">
                    <Route exact path="/cms" component={HomeCms} />

                    {/* About Section */}
                    <Route path="/cms/abouts" render={() => (
                        <ListView items={abouts} setState={setAbouts} title="abouts" />
                    )} />
                    
                    <Route path="/cms/editabouts/:id" render={(props) => (
                        <EditAbout abouts={abouts} setState={setAbouts} id={props.match.params.id} />
                    )} />
                    <Route path="/cms/createabouts/" render={() => (
                        <CreateAbout setState={setAbouts} />
                    )} />

                    {/* Procedure Section */}
                    <Route path="/cms/procedures" render={() => (
                        <ListView items={procedures} setState={setProcedures} title="procedures" />
                    )} />
                    
                    <Route path="/cms/editprocedures/:id" render={(props) => (
                        <EditProcedure procedures={procedures} setState={setProcedures} id={props.match.params.id} />
                    )} />
                    <Route path="/cms/createprocedures/" render={() => (
                        <CreateProcedure setState={setProcedures} />
                    )} />

                    {/* Appointments Section */}
                    <Route path="/cms/appointments" render={() => (
                        <ListView items={appointments} setState={setAppointments} title="appointments" />
                    )} />
                    
                    <Route path="/cms/editappointments/:id" render={(props) => (
                        <EditAppointment appointments={appointments} setState={setAppointments} id={props.match.params.id} />
                    )} />
                    <Route path="/cms/createappointments/" render={() => (
                        <CreateAppointment setState={setAppointments} />
                    )} />

                    {/* Teams Section */}
                    <Route path="/cms/teams" render={() => (
                        <ListView items={teams} setState={setTeams} title="teams" />
                    )} />
                    
                    <Route path="/cms/editteams/:id" render={(props) => (
                        <EditTeam teams={teams} setState={setTeams} id={props.match.params.id} />
                    )} />
                    <Route path="/cms/createteams/" render={() => (
                        <CreateTeam setState={setTeams} />
                    )} />
                    





                </div>
            
            </main>
           
        </>
    )
}

export default AppCms;