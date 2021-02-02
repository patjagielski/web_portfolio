import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../actions/auth';
import {setLang} from '../actions/lang'


const RecruiterHeader = ({logout,getLang, setStoreLang, getLiterals}) => {
    const [lang, setLang] = useState(getLang);
    
    useEffect(()=>{
        setStoreLang(lang);
        console.log(getLang)
    },[lang])
    return(
        <header className="header__content">
        
            <NavLink className="button-icon" to='/recruiter' activeClassName='is-active' exact={true}></NavLink>

        <div className="container d-flex flex-row-reverse justify-content-between">
        <div className="d-flex flex-row-reverse bd-highlight">
        <button className="en" onClick={(e)=>{
            setLang("en");
        }}></button>
        <button className="pl"  onClick={(e)=>{
            setLang("pl");
        }}></button>
        <button className="ru" onClick={(e)=>{
            setLang("ru");
        }}></button>
        </div>
        <div>
            <NavLink className="button-layout__freelancer" to='/CreateJobListing' activeClassName='is-active' exact={true}>{getLang === "en" ? (getLiterals.en.create_job):( getLang === "pl" ? (getLiterals.pl.create_job):(getLiterals.ru.create_job))}</NavLink>
            <NavLink className="button-layout__freelancer" to='/ViewMyJobs' activeClassName='is-active' exact={true}>{getLang === "en" ? (getLiterals.en.view_jobs):( getLang === "pl" ? (getLiterals.pl.view_jobs):(getLiterals.ru.view_jobs))}</NavLink>
            <button className="button-layout__logout" onClick={(logout)}>Logout</button>
        </div>
        </div>
    </header>
);
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    setStoreLang : (lang)=>dispatch(setLang(lang))
});
const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang

})
export default connect(mapStateToProps, mapDispatchToProps)(RecruiterHeader);