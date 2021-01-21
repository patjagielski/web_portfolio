import Axios from "axios"

export const removeUser = (uid) =>({
    type:"REMOVE_USER",
    uid
})

export const startRemoveUser = (uid) => {
    return(dispatch)=>{
        Axios.post("http://localhost:5000/removeUser", {
            id:uid
        }).then((res)=>{
            dispatch(removeUser(uid))
            console.log("removed successfully")
        })
    }
}

export const getAllUsers = () =>{
    return()=>{
        return Axios.get("http://localhost:5000/getAllusers").then((res)=>{
            return res.data;
        })
    }
    
}
