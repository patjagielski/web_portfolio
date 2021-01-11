import React, { useEffect, useState } from 'react';
import Axios from "axios";


function Portfolio(){

    const [userCV, setUserCV] = useState("");
    
    useEffect(()=> {
        Axios.post("http://localhost:5000/getUserCV", {
        id: 1,
        }).then((res)=>{
            if(res.data.length === 1){
                setUserCV(res.data[0].cv);
                console.log(res)
            }
        })}, []);

    return(
    <div>
        <h1> This here is my Portfolio </h1>
        
        <h1>{userCV}</h1>
        
        
    </div>
    );
};

export default Portfolio;
