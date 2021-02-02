import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import JobListingForm from './JobListingForm';
import { history } from "../routers/AppRouter";
import { editJobPosting } from '../actions/recruiter';

const EditJobListing = ({editJobPosting,getLang, getLiterals}) => {
    const handleSubmit = async(jobTitle, techRequirements, levelOfExpertise, jobDescription) =>{
        //create axios post 
        await editJobPosting(jobTitle, techRequirements, levelOfExpertise, jobDescription)
        history.push('/recruiter');
        //dipatch redux
    }

    return(
        <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">  {getLang === "en" ? (getLiterals.en.edit_job):( getLang === "pl" ? (getLiterals.pl.edit_job):(getLiterals.ru.edit_job))} </h1>
            </div>
        </div>
        <div className="content-container">
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
const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang
})
export default connect(mapStateToProps, mapDispatchToProps)(EditJobListing);