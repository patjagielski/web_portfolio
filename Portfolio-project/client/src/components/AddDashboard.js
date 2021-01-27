import React, { useState } from "react";
import DashbaordForm from "./DashboardForm";
import {connect} from 'react-redux';
import {startAddDashboard} from '../actions/dashboardInfo'
import { history } from "../routers/AppRouter";

function AddDashboard({startAddDashboard}){

   
    const handleSubmit = (firstName, lastName, userWork, userEducation, userBio, userCV, instagramLink, linkedInLink, facebookLink, githublink) =>{
        //create axios post 
         startAddDashboard(firstName, lastName, userWork, userEducation, userBio, userCV, instagramLink, linkedInLink, facebookLink, githublink);
        //dipatch redux
    }

    return(
        <div>
        <div>
            <h1> Create a new Dashboard </h1>
        </div>
        <div>
            <DashbaordForm 
                customSubmit={handleSubmit}
            />
        </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    startAddDashboard: (firstName, lastName, userWork, userEducation, userBio, userCV, instagramLink, linkedInLink, facebookLink, githublink) => dispatch(startAddDashboard(firstName, lastName, userWork, userEducation, userBio, userCV, instagramLink, linkedInLink, facebookLink, githublink))
});


export default connect(undefined, mapDispatchToProps)(AddDashboard);