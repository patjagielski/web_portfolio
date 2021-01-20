import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Axios from "axios";
import { setDashboardCV } from '../actions/dashboardInfo';
import ImageLoader from 'react-image-file';

function Portfolio({setDashboardCV}){

    const [userCV, setUserCV] = useState('');

    
    useEffect(()=> {
        async function fetchData() {
            const result = await setDashboardCV();
            const imageStr = arrayBufferToBase64(result.data);
            
            setUserCV(`data:image/pdf;base64,${imageStr}`)
        }
        // <ImageLoader file={fetchData()} alt='some text'/>
        fetchData();
        }, []);

        const arrayBufferToBase64 =(buffer) => {
            var binary = '';
            var bytes = [].slice.call(new Uint8Array(buffer));
            bytes.forEach((b) => binary += String.fromCharCode(b));

            return window.btoa(binary);
        };

    return(
    <div>
        <h1> This here is my Portfolio </h1>
        <img
        src={userCV}
        alt='Helpful alt text'/>
       
        
        
    </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setDashboardCV: () => dispatch(setDashboardCV())
});

export default connect(undefined, mapDispatchToProps)(Portfolio);
