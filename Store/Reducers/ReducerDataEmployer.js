import CONSTANTS from '../CONSTANTS.js';

export default ReducerDataEmployer = (state={data:null,load:null}, action) => {
    switch (action.type) {
        case CONSTANTS.DATAEMPLOYER:
            return Object.assign({}, state, {
                data: action.data
            }) 
        case CONSTANTS.LOAD_EMPLOYER_PROFILE_COMPLETE : 
            return Object.assign({}, state, {
                load: action.load
            })     
        case CONSTANTS.LOGOUT : 
            return Object.assign({}, state, {
                load: null,
                data: null,
            });     
        default:
            return state;
    }
}