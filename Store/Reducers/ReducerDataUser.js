import CONSTANTS from '../CONSTANTS.js';

export default ReducerDataUser = (state= null, action) => {
    console.log('action es esto',action)
    switch (action.type) {
        case CONSTANTS.DATA_USER:
            console.log('va guardar', action)
            return action.data
        case CONSTANTS.LOGOUT : 
            return null    
        default:
            return state;
    }
}
