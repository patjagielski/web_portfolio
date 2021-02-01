import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../actions/auth';
import {setLang} from '../actions/lang'


const FreeLancerHeader = ({logout,setStoreLang, getLang, getLiterals}) => {
    const [lang, setLang] = useState(getLang);
    
    useEffect(()=>{
        setStoreLang(lang);
        console.log(getLang)
    },[lang])
    // useEffect(()=>{
    //     const lan = getLang;
    //     setLang(lan);
    // },[])

    return(  
        <header className="header__content">
        
            <NavLink className="button-icon" to='/freelancer' activeClassName='is-active' exact={true}></NavLink>

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
            <NavLink className="button-layout__freelancer" to='/portfolio' activeClassName='is-active' exact={true}>Portfolio</NavLink>
            <NavLink className="button-layout__freelancer" to='/ViewJobListings' activeClassName='is-active' exact={true}>View Jobs</NavLink>
            <NavLink className="button-layout__freelancer" to="/EditDashboard">{getLang === "en" ? (getLiterals.en.edit_dashboard):( getLang === "pl" ? (getLiterals.pl.edit_dashboard):(getLiterals.ru.edit_dashboard))}</NavLink>
            <button className="button-layout__logout" onClick={logout}>Logout</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(FreeLancerHeader);