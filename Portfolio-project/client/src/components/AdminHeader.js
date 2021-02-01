import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../actions/auth';
import {setLang} from '../actions/lang'



const AdminHeader = ({logout, getLang, setStoreLang}) => {
    const [lang, setLang] = useState(getLang);
    
    useEffect(()=>{
        setStoreLang(lang);
    },[lang])

    return (
    <header className="header__content">
        <button className="button-icon"  ></button>
    <div className="container d-flex flex-row-reverse justify-content-between">
    <div className="d-flex flex-row-reverse bd-highligh">
        <button className="en" onClick={(e)=>{
            setLang("en");
        }}></button>
        <button className="pl" onClick={(e)=>{
            setLang("pl");
        }}></button>
        <button className="ru" onClick={(e)=>{
            setLang("ru");
        }}></button>
        </div>
        <div>
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
    getLang: state.lang.lang
})
export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);