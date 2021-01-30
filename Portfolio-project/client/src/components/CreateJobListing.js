import React from 'react';
import { connect } from "react-redux";
import JobListingForm from './JobListingForm';
import { history } from "../routers/AppRouter";
import { createJobPosting } from '../actions/recruiter';


const CreateJobListing = ({createJobPosting, getLiterals, getLang}) => {
    const handleSubmit = async(jobTitle, techRequirements, levelOfExpertise, jobDescription) =>{
        //create axios post 
         createJobPosting(jobTitle, techRequirements, levelOfExpertise, jobDescription);
        history.push('/recruiter');
        //dipatch redux
    }

    return(
        <div>
        <div>
            <h1> {getLang === "en" ? (getLiterals.en.create_job):( getLang === "pl" ? (getLiterals.pl.create_job):(getLiterals.ru.create_job))} </h1>
        </div>
        <div>
            <JobListingForm 
                customSubmit={handleSubmit}
            />
        </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    createJobPosting: (jobTitle, techRequirements, levelOfExpertise, jobDescription) => dispatch(createJobPosting(jobTitle, techRequirements, levelOfExpertise, jobDescription))
})
const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang
})
export default connect(mapStateToProps, mapDispatchToProps)(CreateJobListing);