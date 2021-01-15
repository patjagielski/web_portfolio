import React, { useState } from "react";


function DashbaordForm(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userEducation, setUserEducation] = useState("")
    const [userWork, setUserWork] = useState("")
    const [userBio, setUserBio] = useState("")
    const [userCV, setUserCV] = useState("")

    const onNameChange = (e) => {
        const name = e.target.value;
        if(!name || name.match(/^[a-zA-Z ]+$/)){
            return name
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        return{firstName,lastName, userEducation, userWork, userBio, userCV}
    }

    return(
        <form onChange={handleSubmit}>
            <input type="text" placeholder="First Name" 
                onChange={(e)=>{
                    setFirstName(onNameChange(e));
                }}
            />
            <input type="text" placeholder="Last Name"
                onChange={(e)=>{
                    setLastName(onNameChange(e));
                }}
            />
            <input type="text" placeholder="Work Experience"
                onChange={(e)=>{
                    setUserWork(e.target.value);
                }}
            />
            <input type="text" placeholder="Degree"
                onChange={(e)=>{
                    setUserEducation(e.target.value);
                }}
            />
            <textarea onChange = {(e)=>{setUserBio(e.target.value)}} placeholder="Input a Bio here">  
                
            </textarea>
            <input type="file" placeholder="CV?" 
                onChange={(e)=>{
                    setUserCV(e.target.value);
                }}
            />
            <div>
                <button>Submit</button>
            </div>
        </form>
    )

}
export default DashbaordForm;