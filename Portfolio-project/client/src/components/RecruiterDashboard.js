import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getFreelancers} from '../actions/recruiter';
import {RecruiterItem} from './RecruiterItem';

function RecruiterDashboard({getFreelancers,getLiterals,getLang}){

    const [baseState, setBaseState] = useState("");

    useEffect(()=>{
        async function fetchData() {
            const result = await getFreelancers();
            console.log(result)
            setBaseState(result);
        }
        fetchData();
    }, []);

    return(
        <div>
        <div className="page-header">
            <div className="content-container">
            <h1 className="page-header__title">{getLang === "en" ? (getLiterals.en.R_check_out):( getLang === "pl" ? (getLiterals.pl.R_check_out):(getLiterals.ru.R_check_out))}</h1>
            <hr />
            </div>
            </div>
            
            {
                baseState.length === 0 ? (
                    <div>
                        <p>{getLang === "en" ? (getLiterals.en.no_freelancers):( getLang === "pl" ? (getLiterals.pl.no_freelancers):(getLiterals.ru.no_freelancers))} </p>
                    </div>
                ):(
                    baseState.map((val)=>{
                    return <div className="content-container"><RecruiterItem key={val.userId} {...val} /><hr/></div>
                        
                })
                )
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getFreelancers: ()=>dispatch(getFreelancers())
});
const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang
})

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterDashboard);
