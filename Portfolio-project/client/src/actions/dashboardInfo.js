import Axios from 'axios';

export const startAddDashboard = (dashboardData = {}) => {
    //getstate is how i can check the auth
    // return (dispatch, getState) => {
    //     const uid = getState().auth.uid;
    //     const {
    //         description = '', 
    //         note = '', 
    //         amount = 0, 
    //         createdAt = 0
    //     } = dashboardData;
    //     const expense = { firstName,lastName, userEducation, userWork, userBio, userCV};

    //     return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
    //         dispatch(addExpense({
    //             id: ref.key,
    //             ...expense
    //         }));
    //     });
    // };
};

export const setDashboard = (uid) =>{
    return(dispatch, getState) =>{
        const uid = getState().auth.uid;
    const result = Axios.post("http://localhost:5000/getUser", {
        id: uid,
        }).then((res)=>{
            if(res.data.length === 1){
                return res.data[0];
            }else{
                console.log("errror");
                console.log(uid);
            }
        });
    return result;
    }
}

export const setDashboardCV = (uid) =>{
    return(dispatch, getState) =>{
        const uid = getState().auth.uid;
        const result = Axios.post("http://localhost:5000/getUserCV", {
            id: uid,
            }).then((res)=>{
                if(res){
                    // console.log(res.data[0].userCV)
                    return res.data[0].userCV;
                }else{
                    console.log("errror");
                    console.log(uid);
                }
            });
    return result;
    }
}