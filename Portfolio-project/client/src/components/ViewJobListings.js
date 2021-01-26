import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {getJobs} from '../actions/dashboardInfo';
import {getJobCount} from '../actions/dashboardInfo';
import { ViewJobItem } from './ViewJobItem';


const ViewJobListings = ({getJobs, getJobCount}) =>{
    

    const [baseState, setBaseState] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPages, setMaxPages] = useState(0);


    useEffect(()=>{
        async function fetchData() {
            const result = await getJobs(1);
            const max = await getJobCount();
            console.log(max)
            setMaxPages(max);
            setBaseState(result);
        }
        fetchData();
        
    }, []);

    useEffect(()=>{
        async function fetchData() {
            const result = await getJobs(currentPage);
            setBaseState(result);
        }
        fetchData();
        
    }, [currentPage]);

return(

    <div>
        <h1>View Jobs here</h1>
        <br/>
        {
            baseState.length === 0 ? (
                <div>
                    <p> Sorry no new jobs</p>
                </div>
            ):(
                baseState.map((val)=>{
                return <ViewJobItem key={val.jobId} {...val} />
            })
            )
        }
        <button onClick={((e)=>{
            e.preventDefault();
            let currPage = currentPage-1;
            setCurrentPage(Math.max(1,currPage))
        })}>{"<--"}</button>
        <button onClick={((e)=>{
            e.preventDefault();
            let currPage = currentPage+1;
            setCurrentPage(Math.min(currPage,maxPages-1))
        })}>{"-->"}</button>
        
    </div>
            )
}

const mapDispatchToProps = (dispatch) => ({
    getJobs:(pageNumber) => dispatch(getJobs(pageNumber)),
    getJobCount:() =>dispatch(getJobCount())
})

export default connect(undefined, mapDispatchToProps)(ViewJobListings)

