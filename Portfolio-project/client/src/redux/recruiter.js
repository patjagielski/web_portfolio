export default (state = {}, action) => {
    switch(action.type){
        case 'SET_RECRUITER_JOBS':
            return{
                jobId: [...action.jobId],
                job: action.job
            };
        case "REMOVE_JOB":
            console.log(state)
            return state.jobId.filter((value) => value !== action.id)
        default:
            return state;
    }
};