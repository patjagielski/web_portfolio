import React, { useEffect, useState } from "react";
import { connect } from "react-redux";


function JobListingForm({customSubmit, job,getLiterals, getLang}){

    const [jobTitle, setJobTitle] = useState(job ? job[0].jobTitle : "")
    const [techRequirements, setTechRequirements] = useState(job ? job[0].techRequirements : "")
    const [levelOfExpertise, setlevelOfExpertise] = useState(job ? job[0].levelOfExpertise : "")
    const [jobDescription, setJobDescription] = useState(job ?job[0].jobDescription : "")


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(job);
        customSubmit (jobTitle, techRequirements, levelOfExpertise, jobDescription);
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <input className="text-input" type="text" placeholder="Job Title" 
                onChange={(e)=>{
                    e.preventDefault();
                    setJobTitle(e.target.value)
                }}
            />
            <input className="text-input" type="text" placeholder="Tech Requirements"
                onChange={(e)=>{
                    e.preventDefault();
                    setTechRequirements(e.target.value)
                }}
            />
            <input className="text-input" type="text" placeholder="Work Experience"
                onChange={(e)=>{
                    e.preventDefault();
                    setlevelOfExpertise(e.target.value);
                }}
            />
            <textarea className="text-area" placeholder="Input Job Details Here"
                onChange={(e)=>{
                    e.preventDefault();
                    setJobDescription(e.target.value)
                }}
            />  
            <div>
                <button className="button-layout">{getLang === "en" ? (getLiterals.en.submit):( getLang === "pl" ? (getLiterals.pl.submit):(getLiterals.ru.submit))}</button>
            </div>
        </form>
    )

}

const mapStateToProps = (state)=>({
    job: state.rec.job,
    getLiterals: state.literals,
    getLang: state.lang.lang
})

export default connect(mapStateToProps)(JobListingForm);