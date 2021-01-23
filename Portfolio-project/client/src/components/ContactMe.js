import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {startSetContactMePage} from '../actions/dashboardInfo';

const ContactMe = ({startSetContactMePage}) => {

    const [instagramLink, setInstagramLink] = useState("");
    const [facebookLink, setFacebookLink] = useState("");
    const [linkedInLink, setLinkedInLink] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        async function fetchData(){
            const result = await startSetContactMePage();
            console.log(result);
            setEmail(result.data[0].email);
            setInstagramLink(result.data[0].instagramLink)
            setFacebookLink(result.data[0].FacebookLink)
            setLinkedInLink(result.data[0].LinkedInLink)
            setGithubLink(result.data[0].GithubLink)
        }
        fetchData();
    }, []);
    return (<div>
        <h1> Here is my Contact Info </h1>
        <p>Email: {email}</p>
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
    startSetContactMePage: ()=>dispatch(startSetContactMePage())
});

export default connect(undefined, mapDispatchToProps)(ContactMe);
