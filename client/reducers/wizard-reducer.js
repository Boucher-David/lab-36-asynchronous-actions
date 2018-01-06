export default (state = {}, action) => {
    let {type, payload} = action;
    let newState = {...state};
    switch(type) {
        case 'CREATE_WIZARD':
            newState[payload.id] = payload;
            return newState;

        case 'UPDATE_WIZARD':
            newState[payload.id].name = payload.newName;
            return newState;

        case 'DELETE_WIZARD':
            delete newState[payload.id];
            return newState;
        
        default:
            return newState
    }

}