import React, {useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Axios from "axios";
import Dashboard from '../components/Dashboard';


function LoginPage(){
    const [regUsername, setRegUsername] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regEmail, setRegEmail] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loggedIn, setLoggedIn] = useState(false);

    const handleRegister =() =>{
        Axios.post("http://localhost:5000/register", {
            username: regUsername,
            password: regPassword,
            email: regEmail
        }).then((res)=>{
            console.log(res);
        });
    };
    const handleLogin =() =>{
        Axios.post("http://localhost:5000/login", {
            username,
            password
        }).then((res)=>{
            if(res.data.auth){
                setLoggedIn(true)
                localStorage.setItem("token", res.data.token)
            }else{
                setLoggedIn(false)
            }
            console.log(res);
        });
    };
    const userAuthenticated =()=>{
        Axios.get("http://localhost:5000/checkAuth",{
            headers:{
                "x-access-token":localStorage.getItem("token"),
            }}).then((res)=>{
                console.log(res);
            })
    }

    return(
        <div>
        <div className="login">
            <input type="text" placeholder="username"
                onChange={(e)=>{
                    setUsername(e.target.value);
                }}
            />
            <input type="password" placeholder="password"
                onChange={(e)=>{
                    setPassword(e.target.value);
            }}
            />
            <input type="button" value="Log in" onClick={(handleLogin)}/>
        </div>


        <div className="register">
            <input type="text" placeholder="username" 
                onChange={(e)=>{
                    setRegUsername(e.target.value);
            }}
            />
            <input type="password" placeholder="password" 
                onChange={(e)=>{
                    setRegPassword(e.target.value);
                }}
            />
            <input types="text" placeholder="email"
                onChange={(e)=>{
                    setRegEmail(e.target.value);
                }}
            />
            <input type="button" value="register" onClick={(handleRegister)}/>
        </div>


            {loggedIn &&(<button onClick={userAuthenticated}>Check if authenticated</button>)}

        </div>
        
    )

};

export default LoginPage;