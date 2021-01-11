import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Axios from "axios";


function Dashboard(){
    /**
     * Display first name & last name
     * Display all table info in appropriate areas
     */
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userWork, setUserWork] = useState("");
    const [userEducation, setUserEducation] = useState("");
    
    
    
    useEffect(()=> {
        Axios.post("http://localhost:5000/getUser", {
        id: 1,
        }).then((res)=>{
            if(res.data.length === 1){
                setFirstName(res.data[0].firstName);
                setLastName(res.data[0].lastName);
                setUserWork(res.data[0].userWork);
                setUserEducation(res.data[0].userEducation);
                
            }
        })}, []);

    return(
        <div>
        <br/>
            <div>
                <Link to="/AddDashboard">Add new Info</Link>
                <br/>
                <Link to="/EditDashboard">Edit Info</Link>
            </div>
            <div>
                <h1> Welcome to {firstName} {lastName}'s Portfolio </h1>
                <p> Learn more about me!</p>
                <div>
                    <h2>Bio/about me</h2>
                </div>
                ---------------------------------
                <div>
                    <h2>Experience</h2>
                    <h4>{userWork}</h4>
                </div>
                ---------------------------------
                <div>
                    <h2>Education</h2>
                    <h4>{userEducation}</h4>
                </div>
                ---------------------------------
                <div>
                    <h2>Projects</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;