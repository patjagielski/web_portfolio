import React, {useContext, useEffect, useReducer, useState} from 'react';
import {connect} from 'react-redux';
import {history} from '../routers/AppRouter';
import Axios from "axios";
import Dashboard from '../components/Dashboard';
import {startLogin,login} from '../actions/auth';




function LoginPage(){

    const [regUsername, setRegUsername] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regEmail, setRegEmail] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loggedIn, setLoggedIn] = useState(false);

    const handleRegister = () =>{
        Axios.post("http://localhost:5000/register", {
            username: regUsername,
            password: regPassword,
            email: regEmail
        }).then((res)=>{
            history.push('/home');
        });
    };
    const handleLogin = () =>{
        startLogin(username, password)
    };
   

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
            <button onClick={handleLogin}>Submit</button>
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

        </div>
        
    )

};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin(username, password)),
    login: () => dispatch(login())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);