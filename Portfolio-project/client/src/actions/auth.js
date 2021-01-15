import {history} from '../routers/AppRouter';
import Axios from 'axios';

export const login = (uid) =>({
    type: 'LOGIN',
    uid
});

export const startLogout = () =>{
    history.push("/");
    return () =>{
        //figure out how to logout properly
        
    }
}

export const startLogin = (username, password) => { 
        Axios.post("http://localhost:5000/login", {
            username,
            password
        }).then((res)=>{
            if(res.data.auth){
                // const auth = userAuthentication();
                const uid = res.data.result[0].userId;
                console.log(res)
                localStorage.setItem("token", res.data.token)
                if(true){
                    history.push('/home')
                }
            }
        });
}

export const userAuthentication = () =>{
        const auth = { isAuthenticated: false}
        Axios.get("http://localhost:5000/checkAuth",{
            headers:{
                "x-access-token":localStorage.getItem("token"),
            }}).then((res)=>{
                if(res.data.auth){
                    auth.isAuthenticated = true;
                    return true;
                }else{
                    auth.isAuthenticated = false;
                    return false;
                }
    });
}