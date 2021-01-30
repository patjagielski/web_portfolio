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
        <div>
            {
               baseState.length === 0 ? (
                   <span>{getLang === "en" ? (getLiterals.en.no_jobs):( getLang === "pl" ? (getLiterals.pl.no_jobs):(getLiterals.ru.no_jobs))}</span>
               ):(
                   baseState.map((val)=>{
                       return <div><RecruiterViewJobItem key={val.jobId} {...val}/><button onClick={(()=>{handleOnRemove(val)})}>X</button>
                       <button onClick={((e)=>{handleOnClick(e, val)})}>Edit</button></div>
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