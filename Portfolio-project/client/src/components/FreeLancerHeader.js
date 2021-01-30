import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../actions/auth';
import {setLang} from '../actions/lang'


const FreeLancerHeader = ({logout,setStoreLang, getLang}) => {
    const [lang, setLang] = useState("en");
    
    useEffect(()=>{
        setStoreLang(lang);
        console.log(getLang)
    },[lang])

    return(  
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
            <NavLink to='/freelancer' activeClassName='is-active' exact={true}>Dashboard</NavLink>
            <br />
            <NavLink to='/portfolio' activeClassName='is-active' exact={true}>Portfolio</NavLink>
            <br />
            <NavLink to='/ViewJobListings' activeClassName='is-active' exact={true}>View Jobs</NavLink>
            <br />
            <button onClick={logout}>Logout</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(FreeLancerHeader);