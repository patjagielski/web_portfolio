export default (state = [], action) => {
    switch(action.type){
        case 'SET_ADMIN_DASHBOARD':
            return {
                uid: [...action.uid]
            }
        case "REMOVE_USER":
            return state.uid.filter((value) => value.userId !== action.uid)
        default:
            return state;
    }
};