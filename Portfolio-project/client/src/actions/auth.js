import {history} from '../routers/AppRouter';
import Axios from 'axios';

export const login = (uid, roleName) =>({
    type: 'LOGIN',
    uid,
    roleName
});

export const logout = () => ({
    type: "LOGOUT"
});

export const startLogin = (username, password) => { 
        const result = Axios.post("http://localhost:5000/login", {
            username,
            password
        }).then((res)=>{
            console.log(res);
            if(res.data.auth){
                localStorage.setItem("token", res.data.token)
                // history.push('/home');
                console.log(res);
                return res;
            }
        });
        return result;
        
}


export const userAuthentication = () => {
        Axios.get("http://localhost:5000/checkAuth",{
            headers:{
                "x-access-token":localStorage.getItem("token"),
            }}).then((res)=>{
                if(res.data.auth){
                    return true;
                }else{
                    return false;
                }
    });
}

export const registerUser = (userId,regUsername, regPassword, regEmail, type) => {
    switch(type){
        case 'FREELANCER':
            return Axios.post("http://localhost:5000/register", {
                id:userId,
                username: regUsername,
                password: regPassword,
                email: regEmail,
                type: 3
            }).then((res)=>{
                console.log("success")
                return Axios.post("http://localhost:5000/registerRole", {
                    id:userId,
                    type: 3
                }).then((res)=>{
                    return  Axios.post("http://localhost:5000/login", {
                        username:regUsername,
                        password:regPassword
                    }).then((res)=>{
                        console.log(res);
                        if(res.data.auth){
                            localStorage.setItem("token", res.data.token)
                            // history.push('/home');
                            console.log(res);
                            return res;
                        }
                    });
        
                })
            });
        case 'RECRUITER':
            Axios.post("http://localhost:5000/register", {
                id:userId,
                username: regUsername,
                password: regPassword,
                email: regEmail,
                type: 4
            }).then((res)=>{
                return Axios.post("http://localhost:5000/registerRole", {
                    id:userId,
                    type: 4
                }).then((res)=>{
                    return  Axios.post("http://localhost:5000/login", {
                        username:regUsername,
                        password:regPassword
                    }).then((res)=>{
                        console.log(res);
                        if(res.data.auth){
                            localStorage.setItem("token", res.data.token)
                            // history.push('/home');
                            console.log(res);
                            return res;
                        }
                    });
        
                })
            });
            break;
        case'ADMIN':
            Axios.post("http://localhost:5000/register", {
                id:userId,
                username: regUsername,
                password: regPassword,
                email: regEmail,
                type: 1
            }).then((res)=>{
                console.log("success")
                return Axios.post("http://localhost:5000/registerRole", {
                    id:userId,
                    type: 1
                }).then((res)=>{
                    return  Axios.post("http://localhost:5000/login", {
                        username:regUsername,
                        password:regPassword
                    }).then((res)=>{
                        console.log(res);
                        if(res.data.auth){
                            localStorage.setItem("token", res.data.token)
                            // history.push('/home');
                            console.log(res);
                            return res;
                        }
                    });
        
                })
            });
            break;
        default:
            console.log('no user to register')
    }
   
}