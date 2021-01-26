import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import JobListingForm from './JobListingForm';
import { history } from "../routers/AppRouter";
import { editJobPosting } from '../actions/recruiter';

const EditJobListing = ({editJobPosting}) => {
    const handleSubmit = async(jobTitle, techRequirements, levelOfExpertise, jobDescription) =>{
        //create axios post 
        await editJobPosting(jobTitle, techRequirements, levelOfExpertise, jobDescription)
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
    editJobPosting: (jobTitle, techRequirements, levelOfExpertise, jobDescription) => dispatch(editJobPosting(jobTitle, techRequirements, levelOfExpertise, jobDescription))
})
export default connect(undefined, mapDispatchToProps)(EditJobListing);