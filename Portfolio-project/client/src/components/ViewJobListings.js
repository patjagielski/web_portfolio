import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {getJobs} from '../actions/dashboardInfo';
import {getJobCount} from '../actions/dashboardInfo';
import  ViewJobItem  from './ViewJobItem';


const ViewJobListings = ({getJobs, getJobCount, getLiterals, getLang}) =>{
    

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
    <div className="content-container">
        <h1 className="display-3">{getLang === "en" ? (getLiterals.en.view_jobs):( getLang === "pl" ? (getLiterals.pl.view_jobs):(getLiterals.ru.view_jobs))}</h1>
        {
            baseState.length === 0 ? (
                <div>
                    <p>{getLang === "en" ? (getLiterals.en.no_jobs):( getLang === "pl" ? (getLiterals.pl.no_jobs):(getLiterals.ru.no_jobs))}</p>
                </div>
            ):(
                baseState.map((val)=>{
                return <div><ViewJobItem key={val.jobId} {...val} /></div>
            })
            )
        }
        <div className="content-container__job-list">
        <ul className="pagination">
        <button className="page-item" onClick={((e)=>{
            e.preventDefault();
            let currPage = currentPage-1;
            setCurrentPage(Math.max(1,currPage))
        })}><span aria-hidden="true">&laquo;</span></button>
        <button className="page-item" onClick={((e)=>{
            e.preventDefault();
            let currPage = currentPage+1;
            setCurrentPage(Math.min(currPage,maxPages-1))
        })}> <span aria-hidden="true">&raquo;</span></button>
        </ul>
        </div>
    </div>
    
            )
}

const mapDispatchToProps = (dispatch) => ({
    getJobs:(pageNumber) => dispatch(getJobs(pageNumber)),
    getJobCount:() =>dispatch(getJobCount())
})
const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewJobListings)

