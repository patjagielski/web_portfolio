import Axios from "axios"

export const removeUser = (uid) =>({
    type:"REMOVE_USER",
    uid
})

export const setAllUsers = (data) =>({
    type:"SET_ADMIN_DASHBOARD",
    uid: [...data]
})

export const startRemoveUser = (uid) => {
    return(dispatch, getState)=>{
        Axios.post("http://localhost:5000/removeUser", {
            id:uid
        }).then((res)=>{
            
            dispatch(removeUser(uid))
            console.log(getState());
            
        })
    }
}

export const getAllUsers = () =>{
    return(dispatch,getState)=>{
        return Axios.get("http://localhost:5000/getAllusers").then((res)=>{
            
            dispatch(setAllUsers(res.data));
            console.log(getState());
            return res.data;
        })
    }
    
}
