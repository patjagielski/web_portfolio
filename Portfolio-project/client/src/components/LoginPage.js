import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Dashboard from '../components/Dashboard';

function handleLogin(e){
    e.preventDefault();
    console.log("button clicked");
    return <Redirect to="/home/"/>
}
const LoginPage = () => (
    <div>
        <input placeholder="username"/>
        <input type="password" placeholder="password"/>
        <input type="button" value="Log in" onClick={(handleLogin)}/>
    </div>
);

export default LoginPage;