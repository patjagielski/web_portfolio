import Axios from "axios"


export const setRecruiterJob = (jobId, job) => ({
    type: "SET_RECRUITER_JOBS",
    jobId,
    job
})

export const removeJob = (id)=>({
    type:"REMOVE_JOB",
    id
})



export const getRecruiterJobs = () =>{
    return(dispatch, getState)=>{
        const uid = getState().auth.uid;
        const jobIdArry = [];
        return Axios.get(`http://localhost:5000/getRecruiterJobs?id=${uid}`).then(async(res)=>{
            res.data.filter(obj=>{
                jobIdArry.push(obj.jobId);
            })
            await dispatch(setRecruiterJob(jobIdArry, res.data));
            return res.data;
        })
    }
}

export const getFreelancers = () => {
    return()=>{
        return Axios.get("http://localhost:5000/allFreelancers").then((res)=>{
            return res.data;
        })
    }
}

export const startEditJobListing = (jobId) => {
    return(dispatch, getState)=>{
        return Axios.get(`http://localhost:5000/getJobListing?jobId=${jobId}`).then(async(res)=>{
            await dispatch(setRecruiterJob(jobId, res.data));
            console.log(res);
            return res.data[0]
        })
    }
}

export const createJobPosting = (jobTitle, techRequirements, levelOfExpertise, jobDescription) => {
    return(dispatch, getState)=>{
        
        const uid = getState().auth.uid;
        return Axios.post("http://localhost:5000/createJobPosting",{
            id:uid,
            jobTitle,
            techRequirements,
            levelOfExpertise,
            jobDescription
        }).then((res)=>{
            if(res){
                return res;
            }else{
                console.log("error");
            }
        })
    }
}

export const editJobPosting = (jobTitle, techRequirements, levelOfExpertise, jobDescription)=>{
    return(dispatch, getState)=>{
        const id = getState().rec.jobId;
        return Axios.post("http://localhost:5000/editJobPosting",{
            id,
            jobTitle,
            techRequirements,
            levelOfExpertise,
            jobDescription
        }).then((res)=>{
            if(res){
                return res;
            }else{
                console.log("error");
            }
        })
    }
}

export const startRemoveJob = (id)=>{
    return(dispatch,getState)=>{
        return Axios.post("http://localhost:5000/removeJobPosting",{
            id
        }).then((res)=>{
            if(res){
                dispatch(removeJob(id))
               console.log("successfully removed");
            }else{
                console.log("error");
            }
        })
    }
}