import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getFreelancers} from '../actions/recruiter';
import {RecruiterItem} from './RecruiterItem';

function RecruiterDashboard({getFreelancers}){

    const [baseState, setBaseState] = useState("");

    useEffect(()=>{
        async function fetchData() {
            const result = await getFreelancers();
            setBaseState(result);
        }
        fetchData();
    }, []);

    return(
        <div>
            <h1>Check Out these Freelance workers!</h1>
            <br />
            {
                baseState.length === 0 ? (
                    <div>
                        <p> Sorry no Freelancers Available right now</p>
                    </div>
                ):(
                    baseState.map((val)=>{
                    return <RecruiterItem key={val.userId} {...val} />
                        
                })
                )
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getFreelancers: ()=>dispatch(getFreelancers())
});

export default connect(undefined, mapDispatchToProps)(RecruiterDashboard);
