import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getRecruiterJobs, startEditJobListing, startRemoveJob } from '../actions/recruiter';
import RecruiterViewJobItem  from './RecruiterViewJobItem';
import { history } from "../routers/AppRouter";

const RecruiterViewJobList = ({getRecruiterJobs, startEditJobListing, startRemoveJob, getLiterals, getLang}) => {
    const [baseState, setBaseState] = useState("");
    useEffect(()=>{
        async function fetchData(){
            const result = await getRecruiterJobs();
            setBaseState(result);
        }
        fetchData();
    }, [])

    const handleOnClick = async(e, val) =>{
        await startEditJobListing(val.jobId);
        history.push('/EditJobListing')
    }
    const handleOnRemove = async(val)=>{
        await startRemoveJob(val.jobId);
        history.push('/recruiter');
    }

    return(
        <div className="content-container">
            <h1 className="display-3">{getLang === "en" ? (getLiterals.en.view_jobs):( getLang === "pl" ? (getLiterals.pl.view_jobs):(getLiterals.ru.view_jobs))}</h1>
            {
               baseState.length === 0 ? (
                   <span>{getLang === "en" ? (getLiterals.en.no_jobs):( getLang === "pl" ? (getLiterals.pl.no_jobs):(getLiterals.ru.no_jobs))}</span>
               ):(
                   baseState.map((val)=>{
                       return (
                        <div className="card">
                            <div className="card-body">
                                <RecruiterViewJobItem key={val.jobId} {...val}/>
                                <button className="btn btn-danger btn-lg" onClick={(()=>{handleOnRemove(val)})}>X</button>
                                <button className="btn btn-primary btn-lg" onClick={((e)=>{handleOnClick(e, val)})}>{getLang === "en" ? (getLiterals.en.edit_job):( getLang === "pl" ? (getLiterals.pl.edit_job):(getLiterals.ru.edit_job))}</button>
                            </div>
                       </div>)
                   })
               ) 
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    getRecruiterJobs: () => dispatch(getRecruiterJobs()),
    startEditJobListing: (jobId)=> dispatch(startEditJobListing(jobId)),
    startRemoveJob:(id)=>dispatch(startRemoveJob(id))
})
const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang
})

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterViewJobList);