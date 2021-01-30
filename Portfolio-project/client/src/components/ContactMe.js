import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {startSetContactMePage} from '../actions/dashboardInfo';
import {setLang} from '../actions/lang'

const ContactMe = ({startSetContactMePage, getLiterals, getLang, setStoreLang}) => {

    const [instagramLink, setInstagramLink] = useState("");
    const [facebookLink, setFacebookLink] = useState("");
    const [linkedInLink, setLinkedInLink] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [email, setEmail] = useState("");
    const [lang, setLang] = useState("en");

    useEffect(()=>{
        setStoreLang(lang);
    },[lang])

    useEffect(()=>{
        async function fetchData(){
            const result = await startSetContactMePage();
            console.log(result);
            setEmail(result === undefined ? result.data[0].email : "");
            setInstagramLink(result === undefined  ? result.data[0].instagramLink : "")
            setFacebookLink(result === undefined  ? result.data[0].FacebookLink : "")
            setLinkedInLink(result === undefined  ? result.data[0].LinkedInLink : "")
            setGithubLink(result === undefined  ? result.data[0].GithubLink : "")
        }
        fetchData();
    }, []);
    return (<div>
        <h1> {getLang === "en" ? (getLiterals.en.FL_contact_me):( getLang === "pl" ? (getLiterals.pl.FL_contact_me):(getLiterals.ru.FL_contact_me))} </h1>
        <p>{getLang === "en" ? (getLiterals.en.FL_email):( getLang === "pl" ? (getLiterals.pl.FL_email):(getLiterals.ru.FL_email))}: {email}</p>
        <div>
        {!!linkedInLink &&
            <a href={linkedInLink}>
            <img src="/images/linkedin.png" height="100" width="100"/>
            </a>}
        {!!facebookLink &&  
            <a href={facebookLink}>
            <img src="/images/facebook-circular-logo.png" height="100" width="100"/>
            </a>}
        {!!instagramLink &&  
            <a href={instagramLink}>
            <img src="/images/instagram.png" height="100" width="100"/>
            </a>}
        {!!githubLink &&  
            <a href={githubLink}>
            <img src="/images/github.png" height="100" width="100"/>
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
