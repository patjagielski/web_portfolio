import React from 'react';
import { connect } from 'react-redux';

const RecruiterViewJobItem = ({jobId,jobTitle,techRequirements,levelOfExpertise,jobDescription, getLiterals, getLang}) => (
<div>
    <h1>Job: {jobId}</h1>
    <h2>{getLang === "en" ? (getLiterals.en.jobTitle):( getLang === "pl" ? (getLiterals.pl.jobTitle):(getLiterals.ru.jobTitle))}:{jobTitle}</h2>
    <h2>{getLang === "en" ? (getLiterals.en.tech_stack):( getLang === "pl" ? (getLiterals.pl.tech_stack):(getLiterals.ru.tech_stack))}:{techRequirements}</h2>
    <h2>{getLang === "en" ? (getLiterals.en.level_expertise):( getLang === "pl" ? (getLiterals.pl.level_expertise):(getLiterals.ru.level_expertise))}:{levelOfExpertise}</h2>
    <h3>{getLang === "en" ? (getLiterals.en.job_description):( getLang === "pl" ? (getLiterals.pl.job_description):(getLiterals.ru.job_description))}:{jobDescription}</h3>
</div>
)

const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang
})
export default connect(mapStateToProps)(RecruiterViewJobItem);