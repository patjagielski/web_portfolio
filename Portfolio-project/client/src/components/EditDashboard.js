import React, { useState } from "react";
import DashbaordForm from "./DashboardForm";
import {connect} from 'react-redux';
import { startEditDashboard } from "../actions/dashboardInfo";
import { history } from "../routers/AppRouter";

function EditDashboard({startEditDashboard,getLiterals,getLang}){

   
    const handleSubmit = (firstName, lastName, userWork, userEducation, userBio, userCV, instagramLink, linkedInLink, facebookLink, githublink) =>{
        //create axios post 
        // console.log(firstName)
        startEditDashboard(firstName, lastName, userWork, userEducation, userBio, userCV, instagramLink, linkedInLink, facebookLink, githublink);
        console.log(userBio)
        history.push('/freelancer');
        //dipatch redux
    }

    return(
        <div>
        <div className="page-header">
            <div className="content-container">
            <h1 className="page-header__title">  {getLang === "en" ? (getLiterals.en.edit_dashboard):( getLang === "pl" ? (getLiterals.pl.edit_dashboard):(getLiterals.ru.edit_dashboard))} </h1>
        </div>
        </div>
        <div className="content-container">
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

const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang
})
export default connect(mapStateToProps, mapDispatchToProps)(EditDashboard);