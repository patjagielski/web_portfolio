import React, { useState } from "react";
import { connect } from "react-redux";


function DashbaordForm({dashboardState, customSubmit}){

    const [firstName, setFirstName] = useState(dashboardState ? dashboardState.firstName: "")
    const [lastName, setLastName] = useState(dashboardState ? dashboardState.lastName:"")
    const [userEducation, setUserEducation] = useState(dashboardState ? dashboardState.userEducation:"")
    const [userWork, setUserWork] = useState(dashboardState ? dashboardState.userWork:"")
    const [userBio, setUserBio] = useState(dashboardState ? dashboardState.userBio:"")
    const [userCV, setUserCV] = useState(dashboardState ? dashboardState.userCV:"")
    const [instagramLink, setInstagramLink] = useState(dashboardState ? dashboardState.instagramLink:"");
    const [facebookLink, setFacebookLink] = useState(dashboardState ? dashboardState.FacebookLink:"");
    const [linkedInLink, setLinkedInLink] = useState(dashboardState ? dashboardState.LinkedInLink:"");
    const [githubLink, setGithubLink] = useState(dashboardState ? dashboardState.GithubLink:"");

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
        <form className="form" onSubmit={handleSubmit}>
            <input class="text-input" type="text" placeholder="First Name" 
                onChange={(e)=>{setFirstName(onFirstNameChange(e))}}
            />
            <input class="text-input" type="text" placeholder="Last Name"
                onChange={(e)=>{setLastName(onLastNameChange(e))}}
            />
            <input class="text-input" type="text" placeholder="Work Experience"
                onChange={(e)=>{
                    e.preventDefault();
                    setUserWork(e.target.value);
                }}
            />
            <input class="text-input" type="text" placeholder="Education"
                onChange={(e)=>{
                    e.preventDefault();
                    setUserEducation(e.target.value);
                }}
            />
            <textarea class="text-area" onChange = {(e)=>{setUserBio(e.target.value)}} placeholder="Input a Bio here"/>  

            <input class="text-input" type="file" placeholder="CV?" 
                onChange={(e)=>{
                    e.preventDefault();
                    setUserCV(e.target.files[0]);
                }}
            />
            
            <h3 className="page-header__title">Social Media Info</h3>

            <input class="text-input" type="text" placeholder="Instagram Link"
                onChange={(e)=>{
                    e.preventDefault();
                    setInstagramLink(e.target.value);
                }}/>
            <input class="text-input" type="text" placeholder="Facebook Link"
                onChange={(e)=>{
                    e.preventDefault();
                    setFacebookLink(e.target.value);
                }}/>
            <input class="text-input" type="text" placeholder="LinkedIn Link"
                onChange={(e)=>{
                    e.preventDefault();
                    setLinkedInLink(e.target.value);
                }}/>
            <input class="text-input" type="text" placeholder="Github Link"
                onChange={(e)=>{
                    e.preventDefault();
                    setGithubLink(e.target.value);
                }}/>
            <div>
                <button className="button-layout">Submit</button>
            </div>
        </form>
    )

}

const mapStateToProps = (state) =>({
    dashboardState: state.dashboard.dashboardInfo
})
export default connect(mapStateToProps)(DashbaordForm);