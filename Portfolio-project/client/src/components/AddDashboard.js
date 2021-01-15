import React, { useState } from "react";
import Axios from "axios";
import Header from './Header';
import DashbaordForm from "./DashboardForm";

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
   
    const handleSubmit = ({firstName,lastName, userEducation, userWork, userBio, userCV}) =>{
        //create axios post 
        //dipatch redux
    }

    return(
        <div>
        <div>
            <Header />
        </div>
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

export default AddDashboard;