import React, { useState } from "react";
import { connect } from "react-redux";


function DashbaordForm({dashboardState, customSubmit}){

    const [firstName, setFirstName] = useState(dashboardState.firstName)
    const [lastName, setLastName] = useState(dashboardState.lastName)
    const [userEducation, setUserEducation] = useState(dashboardState.userEducation)
    const [userWork, setUserWork] = useState(dashboardState.userWork)
    const [userBio, setUserBio] = useState(dashboardState.userBio)
    const [userCV, setUserCV] = useState(dashboardState.userCV)
    const [instagramLink, setInstagramLink] = useState(dashboardState.instagramLink);
    const [facebookLink, setFacebookLink] = useState(dashboardState.FacebookLink);
    const [linkedInLink, setLinkedInLink] = useState(dashboardState.LinkedInLink);
    const [githubLink, setGithubLink] = useState(dashboardState.GithubLink);

    const onFirstNameChange = (e) => {
        e.preventDefault();
        const name = e.target.value;
        // if(!name || name.match(/^[a-zA-Z ]+$/)){
            return name;
        // }
    }

    const onLastNameChange = (e) => {
        e.preventDefault();
        const name = e.target.value;
        // if(!name || name.match(/^[a-zA-Z ]+$/)){
            return name;
        // }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        customSubmit (firstName,lastName, userEducation, userWork, userBio, userCV, instagramLink, facebookLink, linkedInLink, githubLink)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" 
                onChange={(e)=>{setFirstName(onFirstNameChange(e))}}
            />
            <input type="text" placeholder="Last Name"
                onChange={(e)=>{setLastName(onLastNameChange(e))}}
            />
            <input type="text" placeholder="Work Experience"
                onChange={(e)=>{
                    e.preventDefault();
                    setUserWork(e.target.value);
                }}
            />
            <input type="text" placeholder="Education"
                onChange={(e)=>{
                    e.preventDefault();
                    setUserEducation(e.target.value);
                }}
            />
            <textarea onChange = {(e)=>{setUserBio(e.target.value)}} placeholder="Input a Bio here"/>  

            <input type="file" placeholder="CV?" 
                onChange={(e)=>{
                    e.preventDefault();
                    setUserCV(e.target.files[0]);
                }}
            />
            <h3>Social Media Info</h3>

            <input type="text" placeholder="Instagram Link"
                onChange={(e)=>{
                    e.preventDefault();
                    setInstagramLink(e.target.value);
                }}/>
            <input type="text" placeholder="Facebook Link"
                onChange={(e)=>{
                    e.preventDefault();
                    setFacebookLink(e.target.value);
                }}/>
            <input type="text" placeholder="LinkedIn Link"
                onChange={(e)=>{
                    e.preventDefault();
                    setLinkedInLink(e.target.value);
                }}/>
            <input type="text" placeholder="Github Link"
                onChange={(e)=>{
                    e.preventDefault();
                    setGithubLink(e.target.value);
                }}/>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )

}

const mapStateToProps = (state) =>({
    dashboardState: state.dashboard.dashboardInfo
})
export default connect(mapStateToProps)(DashbaordForm);