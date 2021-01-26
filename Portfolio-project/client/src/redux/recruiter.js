export default (state = {}, action) => {
    switch(action.type){
        case 'SET_RECRUITER_JOBS':
            return{
                jobId: action.jobId,
                job: action.job
            };
        default:
            return state;
    }
};