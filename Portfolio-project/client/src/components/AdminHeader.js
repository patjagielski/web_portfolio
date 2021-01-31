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
    <header>
    <div>
        <button onClick={(e)=>{
            setLang("en");
        }}>English</button>
        <button onClick={(e)=>{
            setLang("pl");
        }}>Polish</button>
        <button onClick={(e)=>{
            setLang("ru");
        }}>Russian</button>
        </div>
        <div>
            <button onClick={(logout)}>Logout</button>
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