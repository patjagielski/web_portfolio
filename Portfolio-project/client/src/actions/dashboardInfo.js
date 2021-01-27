import Axios from 'axios';

export const setDashboard = (dashboardInfo)=>({
    type: "SET_DASHBOARD",
    dashboardInfo : dashboardInfo
});


// export const setContactPage = (contactInfo)=>({
//     type: "SET_CONTACT",
//     contactInfo
// });


export const startAddDashboard = (firstName, lastName, userWork, userEducation, userBio, userCV, instagramLink, linkedInLink, facebookLink, githublink) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const newFomr = new FormData()
        console.log( firstName)
        newFomr.append("CV", userCV, userCV.name);
        newFomr.append( "id", uid);
        newFomr.append("firstName", firstName);
        newFomr.append( "lastName",lastName);
        newFomr.append( "userWork",userWork);
        newFomr.append( "userEducation",userEducation);
        newFomr.append( "userBio",userBio);
        Axios.post("http://localhost:5000/addNewUserInfo", newFomr).then((res)=>{
            Axios.post("http://localhost:5000/addContact", {
            id: uid,
            instagramLink,
            linkedInLink,
            facebookLink,
            githublink
        })
        }).then(()=>{
            console.log("successfully added");
        })

    };
};

export const startEditDashboard = (firstName, lastName, userWork, userEducation, userBio,userCV, instagramLink, linkedInLink, facebookLink, githublink) => {
    return(dispatch, getState) => {
        const uid = getState().auth.uid;
        const newFomr = new FormData()
        newFomr.append("CV", userCV, userCV.name);
        newFomr.append( "id", uid);
        newFomr.append("firstName", firstName);
        newFomr.append( "lastName",lastName);
        newFomr.append( "userWork",userWork);
        newFomr.append( "userEducation",userEducation);
        newFomr.append( "userBio",userBio);
        Axios.post("http://localhost:5000/editDashboard", newFomr).then((res)=>{
            Axios.post("http://localhost:5000/editContact", {
            id:uid, 
            instagramLink,
            linkedInLink, 
            facebookLink,
            githublink
        })
        }).then(()=>{
            console.log("made it")
        })
        
};
};


export const startSetDashboard = () =>{
    return(dispatch, getState) =>{
        const uid = getState().auth.uid;
        const result =  Axios.post("http://localhost:5000/getUser", {
        id: uid,
        }).then((res)=>{
            if(res.data.length === 1){
                dispatch(setDashboard(res.data[0]));
                return res.data;
            }else{
                console.log("errror");
                console.log(res);
            }
        });

    return result;
    }
}

export const setDashboardCV = (uid) =>{
    return(dispatch, getState) =>{
        const uid = getState().auth.uid;
        const result = Axios.get(`http://localhost:5000/startGetCV?id=${uid}`).then((res)=>{
                if(res){
                    console.log("something",)
                    return res.data
                }else{
                    console.log("errror");
                    console.log(uid);
                }
            });
    return result;
    }
}

export const startSetContactMePage = () => {
    return(dispatch, getState)=>{
        const uid = getState().auth.uid;
        return Axios.post("http://localhost:5000/getContactInfo", {
            id:uid,
        }).then(async(res)=>{
            console.log(res)
            return res;
        });
    }
}

export const getJobs = (pageNumber) => {
    return()=>{
        console.log(pageNumber);
        return Axios.get(`http://localhost:5000/getJobs?pageNo=${pageNumber}`).then((res)=>{
            return res.data
        })
    }
}

export const getJobCount = () => {
    return()=>{
        return Axios.get(`http://localhost:5000/getJobCount`).then((res)=>{
            return res.data[0].numberOfJobs;
        })
    }
}