export default (state = {}, action) => {
    switch(action.type){
        case "REMOVE_USER":
            return state.filter(({id}) => id !== action.uid)
        default:
            return state;
    }
};