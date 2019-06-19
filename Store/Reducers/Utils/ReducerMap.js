import CONSTANTS from '../../CONSTANTS.js';

export default ReducerMap = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.SET_LOCATION:
            return action.location;   
        default:
            return state;
    }
}