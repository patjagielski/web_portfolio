import React, { useState } from "react";
import DashbaordForm from "./DashboardForm";
import {connect} from 'react-redux';
import { startEditDashboard } from "../actions/dashboardInfo";
import { history } from "../routers/AppRouter";

function EditDashboard({startEditDashboard}){

   
    const handleSubmit = (firstName, lastName, userWork, userEducation, userBio, userCV, instagramLink, linkedInLink, facebookLink, githublink) =>{
        //create axios post 
        // console.log(firstName)
        startEditDashboard(firstName, lastName, userWork, userEducation, userBio, userCV, instagramLink, linkedInLink, facebookLink, githublink);
        history.push('/freelancer');
        //dipatch redux
    }

    return(
        <div>
        <div>
            <h1> Edit Your Job Here! </h1>
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
    startEditDashboard: (firstName, lastName, userWork, userEducation, userBio, userCV, instagramLink, linkedInLink, facebookLink, githublink) => dispatch(startEditDashboard(firstName, lastName, userWork, userEducation, userBio, userCV, instagramLink, linkedInLink, facebookLink, githublink))
});


export default connect(undefined, mapDispatchToProps)(EditDashboard);