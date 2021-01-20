export default (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            return{
                loggedIn: true,
                uid: action.uid,
                roleName: action.roleName
        };
        case 'LOGOUT':
            return {
                loggedIn: false
            };
        default:
            return state;
    }
};