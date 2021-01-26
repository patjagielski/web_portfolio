import React from 'react';
import { connect } from "react-redux";
import JobListingForm from './JobListingForm';
import { history } from "../routers/AppRouter";
import { createJobPosting } from '../actions/recruiter';


const CreateJobListing = ({createJobPosting}) => {
    const handleSubmit = async(jobTitle, techRequirements, levelOfExpertise, jobDescription) =>{
        //create axios post 
         createJobPosting(jobTitle, techRequirements, levelOfExpertise, jobDescription);
        history.push('/recruiter');
        //dipatch redux
    }

    return(
        <div>
        <div>
            <h1> Create a new Dashboard </h1>
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

export default connect(undefined, mapDispatchToProps)(CreateJobListing);