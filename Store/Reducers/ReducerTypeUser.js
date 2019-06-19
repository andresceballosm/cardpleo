import CONSTANTS from '../CONSTANTS.js';

export default ReducerTypeUser = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.TYPE_USER:
            console.log(action);
            return action.typeUser; 
        default:
            return state;
    }
}