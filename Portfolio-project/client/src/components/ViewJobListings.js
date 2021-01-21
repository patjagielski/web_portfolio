import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {getJobs} from '../actions/dashboardInfo';
import { ViewJobItem } from './ViewJobItem';


const ViewJobListings = ({getJobs}) =>{
    

    const [baseState, setBaseState] = useState("");

    useEffect(()=>{
        async function fetchData() {
            const result = await getJobs();
            setBaseState(result);
        }
        fetchData();
        
    }, []);

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
    </div>
            )
}

const mapDispatchToProps = (dispatch) => ({
    getJobs:() => dispatch(getJobs())
})

export default connect(undefined, mapDispatchToProps)(ViewJobListings)

