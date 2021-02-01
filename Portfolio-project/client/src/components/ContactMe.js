import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {startSetContactMePage} from '../actions/dashboardInfo';
import {setLang} from '../actions/lang'

const ContactMe = ({instagramLink,LinkedInLink,FacebookLink, GithubLink,email,getLiterals, getLang, setStoreLang}) => {

    const [lang, setLang] = useState(getLang);

    useEffect(()=>{
        setStoreLang(lang);
    },[lang])


    return (
        <div>
        <h1 className="display-5"> {getLang === "en" ? (getLiterals.en.FL_contact_me):( getLang === "pl" ? (getLiterals.pl.FL_contact_me):(getLiterals.ru.FL_contact_me))} </h1>
        <p className="display-6">{getLang === "en" ? (getLiterals.en.FL_email):( getLang === "pl" ? (getLiterals.pl.FL_email):(getLiterals.ru.FL_email))}: {email}</p>
        <div className="content">
        {!!LinkedInLink &&    
            <a href={LinkedInLink}>
            <img src="/images/linkedin.png" height="100" width="100"/>
            </a>}
        {!!FacebookLink &&  
            <a href={FacebookLink}>
            <img src="/images/facebook-circular-logo.png" height="100" width="100"/>
            </a>}
        {!!instagramLink &&  
            <a href={instagramLink}>
            <img  src="/images/instagram.png" height="100" width="100"/>
            </a>}
        {!!GithubLink &&  
            <a href={GithubLink}>
            <img  src="/images/github.png" height="100" width="100"/>
            </a>}
        </div>


    </div>
    )
};
const mapDispatchToProps = (dispatch) => ({
    startSetContactMePage: ()=>dispatch(startSetContactMePage()),
    setStoreLang : (lang)=>dispatch(setLang(lang))
});
const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactMe);
