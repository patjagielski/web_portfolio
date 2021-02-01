import React, { useState } from "react";
import DashbaordForm from "./DashboardForm";
import {connect} from 'react-redux';
import {startAddDashboard} from '../actions/dashboardInfo'
import { history } from "../routers/AppRouter";

function AddDashboard({startAddDashboard, getLang, getLiterals}){

   
    const handleSubmit = (firstName, lastName, userWork, userEducation, userBio, userCV, instagramLink, linkedInLink, facebookLink, githublink) =>{
        //create axios post 
         startAddDashboard(firstName, lastName, userWork, userEducation, userBio, userCV, instagramLink, linkedInLink, facebookLink, githublink);
        //dipatch redux
    }

    return(
        <div className="content-container">
        <div>
            <h1> {getLang === "en" ? (getLiterals.en.new_dashboard):( lang === "pl" ? (getLiterals.pl.new_dashboard):(getLiterals.ru.new_dashboard))} </h1>
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

const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang
})
export default connect(mapStateToProps, mapDispatchToProps)(AddDashboard);