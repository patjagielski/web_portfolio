export default (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            return{
                uid: action.uid,
                roleName: action.roleName
        };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};