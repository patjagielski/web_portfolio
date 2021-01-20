export default (state = {}, action) => {
    switch(action.type){
        case 'SET_DASHBOARD':
            return {
                dashboardInfo : action.dashboardInfo,
                contactInfo: action.contactInfo
            };
        default:
            return state;
    }
};