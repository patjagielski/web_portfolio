import React from 'react'
import { connect } from 'react-redux';


const ViewJobItem = ({jobDescription,jobTitle,levelOfExpertise,techRequirements, getLang, getLiterals}) =>(
    <div className="content-container">
    <div className="content-container__job-item">
        <div className="card">
            <div className="card-body">
                <h2 className="custom-card-title">{getLang === "en" ? (getLiterals.en.jobTitle):( getLang === "pl" ? (getLiterals.pl.jobTitle):(getLiterals.ru.jobTitle))}</h2>
                    <span className="custom-card-desc">{jobTitle}</span>
                <h2 className="custom-card-title">{getLang === "en" ? (getLiterals.en.level_expertise):( getLang === "pl" ? (getLiterals.pl.level_expertise):(getLiterals.ru.level_expertise))}:</h2>
                    <span className="custom-card-desc">{levelOfExpertise}</span>
                <h3 className="custom-card-title">{getLang === "en" ? (getLiterals.en.tech_stack):( getLang === "pl" ? (getLiterals.pl.tech_stack):(getLiterals.ru.tech_stack))}:</h3>
                    <span className="custom-card-desc">{techRequirements}</span>
                <h3 className="custom-card-title">{getLang === "en" ? (getLiterals.en.job_description):( getLang === "pl" ? (getLiterals.pl.job_description):(getLiterals.ru.job_description))}:</h3>
                    <span className="custom-card-desc">{jobDescription}</span>
            </div>
        </div>
    </div>
    </div>
    )


const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang
})
export default connect(mapStateToProps)(ViewJobItem);
