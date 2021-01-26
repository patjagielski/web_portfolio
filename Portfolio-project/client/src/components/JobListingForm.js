import React, { useEffect, useState } from "react";
import { connect } from "react-redux";


function JobListingForm({customSubmit, job}){

    const [jobTitle, setJobTitle] = useState(job ? job[0].job.jobTitle : "")
    const [techRequirements, setTechRequirements] = useState(job ? job[0].job.techRequirements : "")
    const [levelOfExpertise, setlevelOfExpertise] = useState(job ? job[0].job.levelOfExpertise : "")
    const [jobDescription, setJobDescription] = useState(job ?job[0].job.jobDescription : "")


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(job);
        customSubmit (jobTitle, techRequirements, levelOfExpertise, jobDescription);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Job Title" 
                onChange={(e)=>{
                    e.preventDefault();
                    setJobTitle(e.target.value)
                }}
            />
            <input type="text" placeholder="Tech Requirements"
                onChange={(e)=>{
                    e.preventDefault();
                    setTechRequirements(e.target.value)
                }}
            />
            <input type="text" placeholder="Work Experience"
                onChange={(e)=>{
                    e.preventDefault();
                    setlevelOfExpertise(e.target.value);
                }}
            />
            <textarea placeholder="Input a Bio here"
                onChange={(e)=>{
                    e.preventDefault();
                    setJobDescription(e.target.value)
                }}
            />  
            <div>
                <button>Submit</button>
            </div>
        </form>
    )

}

const mapStateToProps = (state)=>({
    job: state.rec.job
})

export default connect(mapStateToProps)(JobListingForm);