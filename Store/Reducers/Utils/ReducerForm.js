import CONSTANTS from '../../CONSTANTS.js';

export default ReducerForm = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.SET_FORM:
        console.log('action in reducerForm',action)
            return action.form;   
        default:
            return state;
    }
}