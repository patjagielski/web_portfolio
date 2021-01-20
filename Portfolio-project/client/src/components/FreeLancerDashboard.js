import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Axios from "axios";
import { setDashboard } from '../actions/dashboardInfo';


function FreeLancerDashboard({setDashboard}){
    /**
     * Display first name & last name
     * Display all table info in appropriate areas
     */
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userWork, setUserWork] = useState("");
    const [userEducation, setUserEducation] = useState("");
    const [userBio, setUserBio] = useState("");
    
    
    useEffect(()=> {
        async function fetchData() {
            const result = await setDashboard();
            setFirstName(result.firstName);
            setLastName(result.lastName);
            setUserWork(result.userWork);
            setUserEducation(result.userEducation);
            setUserBio(result.userBio);
        }
        fetchData();
        }, []);

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
                <p> {userBio}</p>
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

const mapDispatchToProps = (dispatch) => ({
    setDashboard: () => dispatch(setDashboard())
});

export default connect(undefined, mapDispatchToProps)(FreeLancerDashboard);