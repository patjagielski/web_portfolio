import React, { useState } from "react";
import Header from './Header';
import DashbaordForm from "./DashboardForm";
import {connect} from 'react-redux';

function AddDashboard(){

    
    
    // const addNewUserInfo = () =>{
    //     Axios.post("http://localhost:5000/addNewUserInfo", {
    //         firstName,
    //         lastName,
    //         userEducation,
    //         userWork,
    //         userCV
    //     }).then((res)=>{
    //         console.log(res); 
    //     })
    // }
   
    const handleSubmit = (dashboardInfo) =>{
        //create axios post 
        this.props.startAddDashboard(dashboardInfo);
        this.props.history.push("/home");
        //dipatch redux
    }

    return(
        <div>
        <div>
            <h1> Create a new Dashboard </h1>
        </div>
        <div>
            <DashbaordForm 
                onSubmit={handleSubmit}
            />
        </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    startAddDashboard: (dashboardInfo) => dispatch(startAddDashboard(dashboardInfo))
});


export default connect(undefined, mapDispatchToProps)(AddDashboard);