import React, {useContext, useEffect, useReducer, useState} from 'react';
import {connect} from 'react-redux';
import {history} from '../routers/AppRouter';
import Axios from "axios";
import Dashboard from './FreeLancerDashboard';
import {startLogin,login,registerUser} from '../actions/auth';
import uuid from 'react-uuid'




function LoginPage({finishLogin}){

    const [regEmail, setRegEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("");
    const [userId, setUserId] = useState("");
 

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
                    setUsername(e.target.value);
            }}
            />
            <input type="password" placeholder="password" 
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
            />
            <input types="text" placeholder="email"
                onChange={(e)=>{
                    setRegEmail(e.target.value);
                }}
            />
            <select
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
            <input type="button" value="register" onClick={(handleRegister)}/>
        </div>

        </div>
        
    )

};

const mapDispatchToProps = (dispatch) => ({
    startLogin: (username, password) => dispatch(startLogin(username, password)),
    finishLogin: (uid, roleName) => dispatch(login(uid, roleName)),
    registerUser: (userId,username, password, regEmail, type) => dispatch(registerUser(userId,username, password, regEmail, type))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);