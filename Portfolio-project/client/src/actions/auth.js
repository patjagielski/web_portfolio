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



export const startLogout = async () =>{
    localStorage.removeItem("token")
    await logout();
}

export const startLogin = (username, password) => { 
        const result = Axios.post("http://localhost:5000/login", {
            username,
            password
        }).then((res)=>{
            if(res.data.auth){
                localStorage.setItem("token", res.data.token)
                // history.push('/home');
                console.log(res);
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