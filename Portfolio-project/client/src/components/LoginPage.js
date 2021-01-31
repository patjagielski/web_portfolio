import React, {useContext, useEffect, useReducer, useState} from 'react';
import {connect} from 'react-redux';
import {history} from '../routers/AppRouter';
import Axios from "axios";
import Dashboard from './FreeLancerDashboard';
import {startLogin,login,registerUser} from '../actions/auth';
import uuid from 'react-uuid'
import { setLang } from '../actions/lang';




function LoginPage({finishLogin, getLiterals, setStoreLang, getLang}){

    const [regEmail, setRegEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("");
    const [lang, setLang] = useState("en");
 
    useEffect(()=>{
        setStoreLang(lang);
    },[lang])

    const handleRegister = async() =>{
        const id = uuid()
        const uid = id.match(/\d+/g).join('').substr(1, 6);
        
        const res = await registerUser(uid,username, password, regEmail,type)
        console.log(res);
        finishLogin(uid, type)
    };

    const handleLogin = async () =>{
        const result = await startLogin(username, password)
        console.log(result);
        const userId = result.data.result[0].userId;
        const roleName = result.data.result[0].roleName;
        finishLogin(userId, roleName);
    };
   

    return( 
        <div className="box-layout">
        <div class="container">

        <div class="d-flex flex-row-reverse bd-highlight">
        <button class="en" onClick={(e)=>{
            setLang("en");
        }}></button>
        <button class="pl"  onClick={(e)=>{
            setLang("pl");
        }}></button>
        <button class="ru" onClick={(e)=>{
            setLang("ru");
        }}></button>
        </div>
        <div class="d-flex justify-content-center">
            <h1 class="display-1 text-info">{getLang === "en" ? (getLiterals.en.app_login):( lang === "pl" ? (getLiterals.pl.app_login):(getLiterals.ru.app_login))}</h1>
        </div>
        


        <div className="d-flex justify-content-center">
        <div className="box-layout__box" >
        <h2 class="h1 text-muted">{getLang === "en" ? (getLiterals.en.login):( lang === "pl" ? (getLiterals.pl.login):(getLiterals.ru.login))}</h2>
            <input class="text-input" type="text" placeholder="username"
                onChange={(e)=>{
                    setUsername(e.target.value);
                }}
            />
            <input class="text-input" type="password" placeholder="password"
                onChange={(e)=>{
                    setPassword(e.target.value);
            }}
            />
            <button class="button-layout" onClick={handleLogin}>Submit</button>
        </div>


        <div className="box-layout__box">
        <h2 class="h1 text-muted">{getLang === "en" ? (getLiterals.en.register):( lang === "pl" ? (getLiterals.pl.register):(getLiterals.ru.register))}</h2>
            <input class="text-input" type="text" placeholder="username" 
                onChange={(e)=>{
                    setUsername(e.target.value);
            }}
            />
            <input class="text-input" type="password" placeholder="password" 
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
            />
            <input class="text-input" types="text" placeholder="email"
                onChange={(e)=>{
                    setRegEmail(e.target.value);
                }}
            />
            <select
                className="text-input"
                onChange={(e)=>{
                    if(e.target.value != -1){
                        setType(e.target.value)
                    }
                }}
            >
                <option value='-1'>--</option>
                <option value="FREELANCER">FREELANCER</option>
                <option value="ADMIN">ADMIN</option>
                <option value="RECRUITER">RECRUITER</option>
            </select>
            <input class="button-layout" type="button" value="Register" onClick={(handleRegister)}/>
        </div>
        </div>

        </div>
        </div>
        
    )

};

const mapDispatchToProps = (dispatch) => ({
    startLogin: (username, password) => dispatch(startLogin(username, password)),
    finishLogin: (uid, roleName) => dispatch(login(uid, roleName)),
    registerUser: (userId,username, password, regEmail, type) => dispatch(registerUser(userId,username, password, regEmail, type)),
    setStoreLang : (lang)=>dispatch(setLang(lang))
});
const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);