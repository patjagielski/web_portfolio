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
        const result = Axios.post("http://localhost:5000/login", {
            username,
            password
        }).then((res)=>{
            if(res.data.auth){
                console.log("0", res)
                localStorage.setItem("token", res.data.token)
                // history.push('/home');
                return res;
            }
        });
        return result;
        // await login(something.data.result[0].userId)
        
}
// .then((res)=>{
//     
//     return userAuthentication();
// }).then((res)=>{
//     console.log("2", res)
//     const uid = res.data.result[0].userId;
//     return login(uid);

// })

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