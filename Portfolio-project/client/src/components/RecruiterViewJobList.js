import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getRecruiterJobs, startEditJobListing } from '../actions/recruiter';
import { RecruiterViewJobItem } from './RecruiterViewJobItem';
import { history } from "../routers/AppRouter";

const RecruiterViewJobList = ({getRecruiterJobs, startEditJobListing}) => {
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

    return(
        <div>
            {
               baseState.length === 0 ? (
                   <span>You haven't created a job listing yet</span>
               ):(
                   baseState.map((val)=>{
                       return <div><RecruiterViewJobItem key={val.jobId} {...val}/><button>X</button>
                       <button onClick={((e)=>{handleOnClick(e, val)})}>Edit</button></div>
                   })
               ) 
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    getRecruiterJobs: () => dispatch(getRecruiterJobs()),
    startEditJobListing: (jobId)=> dispatch(startEditJobListing(jobId))
})


export default connect(undefined, mapDispatchToProps)(RecruiterViewJobList);