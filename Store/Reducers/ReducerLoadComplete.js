import CONSTANTS from '../CONSTANTS.js';

export default ReducerLoadComplete = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.LOAD_COMPLETE:
            return true; 
        default:
            return state;
    }
}