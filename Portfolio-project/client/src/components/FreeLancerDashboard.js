import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Axios from "axios";
import { startSetDashboard } from '../actions/dashboardInfo';
import ContactMe from './ContactMe'


function FreeLancerDashboard({startSetDashboard,getLiterals, getLang}){
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userWork, setUserWork] = useState("");
    const [userEducation, setUserEducation] = useState("");
    const [userBio, setUserBio] = useState("");
    

    useEffect(()=> {
        async function fetchData() {
            const result = await startSetDashboard();
            console.log(result);
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
        <div>
        <br/>
            <div>
                <Link to="/EditDashboard">{getLang === "en" ? (getLiterals.en.edit_dashboard):( getLang === "pl" ? (getLiterals.pl.edit_dashboard):(getLiterals.ru.edit_dashboard))}</Link>
            </div>
            <div>
                <h1> {getLang === "en" ? (getLiterals.en.FL_welcome_start):( getLang === "pl" ? (getLiterals.pl.FL_welcome_start):(getLiterals.ru.FL_welcome_start))} {firstName} {lastName}{getLang === "en" ? (getLiterals.en.FL_welcome_end):( getLang === "pl" ? (getLiterals.pl.FL_welcome_end):(getLiterals.ru.FL_welcome_end))}</h1>
                <p> {userBio}</p>
                {firstName === "" ? (<div> {getLang === "en" ? (getLiterals.en.FL_missing):( getLang === "pl" ? (getLiterals.pl.FL_missing_info):(getLiterals.ru.FL_missing_info))}<Link to="/AddDashboard">Add Info</Link></div>): ("")}
                <div>
                    <h2>{getLang === "en" ? (getLiterals.en.FL_bio):( getLang === "pl" ? (getLiterals.pl.FL_bio):(getLiterals.ru.FL_bio))}</h2>
                </div>
                ---------------------------------
                <div>
                    <h2>{getLang === "en" ? (getLiterals.en.FL_work):( getLang === "pl" ? (getLiterals.pl.FL_work):(getLiterals.ru.FL_work))}</h2>
                    <h4>{userWork}</h4>
                </div>
                ---------------------------------
                <div>
                    <h2>{getLang === "en" ? (getLiterals.en.FL_education):( getLang === "pl" ? (getLiterals.pl.FL_education):(getLiterals.ru.FL_education))}</h2>
                    <h4>{userEducation}</h4>
                </div>
                ---------------------------------
                <div>
                    <ContactMe />
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startSetDashboard: () => dispatch(startSetDashboard()),
    setStoreLang : (lang)=>dispatch(setLang(lang))
});
const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang
})
export default connect(mapStateToProps, mapDispatchToProps)(FreeLancerDashboard);