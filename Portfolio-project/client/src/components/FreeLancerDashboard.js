import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Axios from "axios";
import { startSetDashboard, startSetContactMePage } from '../actions/dashboardInfo';
import ContactMe from './ContactMe'


function FreeLancerDashboard({startSetDashboard,startSetContactMePage,getLiterals, getLang}){
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userWork, setUserWork] = useState("");
    const [userEducation, setUserEducation] = useState("");
    const [userBio, setUserBio] = useState("");
    const [baseState, setBaseState] = useState("");
    

    useEffect(()=> {
        async function fetchData() {
            const result = await startSetDashboard();
            const contact = await startSetContactMePage();
            setBaseState(contact.data);
            console.log(result)
            console.log(contact.data)
            if(result){
            
                setFirstName(result[0].firstName);
                setLastName(result[0].lastName);
                setUserWork(result[0].userWork);
                setUserEducation(result[0].userEducation);
                setUserBio(result[0].userBio);
                
            }
            
        }
        fetchData();
        }, []);

    return(
        <div className="container-bg">
        <div className="container">
            <div className="content-container">
            <div className="container-fluid">
                <h1 className="display-3"> {getLang === "en" ? (getLiterals.en.FL_welcome_start):( getLang === "pl" ? (getLiterals.pl.FL_welcome_start):(getLiterals.ru.FL_welcome_start))} {firstName} {lastName}{getLang === "en" ? (getLiterals.en.FL_welcome_end):( getLang === "pl" ? (getLiterals.pl.FL_welcome_end):(getLiterals.ru.FL_welcome_end))}</h1>
                {firstName === "" ? (<div> {getLang === "en" ? (getLiterals.en.FL_missing):( getLang === "pl" ? (getLiterals.pl.FL_missing_info):(getLiterals.ru.FL_missing_info))}<Link to="/AddDashboard">Add Info</Link></div>): ("")}
            </div>
            <div className="container">
                <div className="content-container__dashboard">
                    <h2 className="display-5">{getLang === "en" ? (getLiterals.en.FL_bio):( getLang === "pl" ? (getLiterals.pl.FL_bio):(getLiterals.ru.FL_bio))}</h2>
                    <h4 className="display-6"> {userBio}</h4>
                </div>
                <hr />
                <div className="content-container__dashboard">
                    <h2 className="display-5">{getLang === "en" ? (getLiterals.en.FL_work):( getLang === "pl" ? (getLiterals.pl.FL_work):(getLiterals.ru.FL_work))}</h2>
                    <h4 className="display-6">{userWork}</h4>
                </div>
                <hr />
                <div className="content-container__dashboard">
                    <h2 className="display-5">{getLang === "en" ? (getLiterals.en.FL_education):( getLang === "pl" ? (getLiterals.pl.FL_education):(getLiterals.ru.FL_education))}</h2>
                    <h4 className="display-6">{userEducation}</h4>
                </div>
                <hr />
                {baseState.length === 1 ?(<div className="content-container__dashboard">
                    <ContactMe {...baseState[0]}/>
                </div>):("")}
                
                
                
            </div>
            </div>
        </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startSetDashboard: () => dispatch(startSetDashboard()),
    setStoreLang : (lang)=>dispatch(setLang(lang)),
    startSetContactMePage: ()=>dispatch(startSetContactMePage())
});
const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang
})
export default connect(mapStateToProps, mapDispatchToProps)(FreeLancerDashboard);

