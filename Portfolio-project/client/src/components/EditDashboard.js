import React, { useState } from "react";
import Axios from "axios";
import Header from './Header';

function EditDashboard(){
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userEducation, setUserEducation] = useState("")
    const [userWork, setUserWork] = useState("")
    const [userCV, setUserCV] = useState("")
    
    const addNewUserInfo = () =>{
        Axios.post("http://localhost:5000/addNewUserInfo", {
            firstName,
            lastName,
            userEducation,
            userWork,
            userCV
        }).then((res)=>{
            console.log(res); 
        })
    }

    return(
        <div>
        <div>
            <h1> Edit a Dashboard </h1>
        </div>
        <div>
            <input type="text" placeholder="First Name" 
                onChange={(e)=>{
                    setFirstName(e.target.value);
                }}
            />
            <input type="text" placeholder="Last Name"
                onChange={(e)=>{
                    setLastName(e.target.value);
                }}
            />
            <input type="text" placeholder="Work Experience"
                onChange={(e)=>{
                    setUserWork(e.target.value);
                }}
            />
            <input type="text" placeholder="Education"
                onChange={(e)=>{
                    setUserEducation(e.target.value);
                }}
            />
            <input type="text" placeholder="CV?" 
                onChange={(e)=>{
                    setUserCV(e.target.value);
                }}
            />
            <input type="button" value="submit" onClick={(addNewUserInfo)}/>
        </div>
        </div>
    )
}

export default EditDashboard;