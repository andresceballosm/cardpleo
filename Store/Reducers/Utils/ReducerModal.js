import CONSTANTS from '../../CONSTANTS.js';

export default ReducerModal = (state = { modal: false }, action) => {
    switch (action.type) {
        case CONSTANTS.OPEN_MODAL:
            return { modal: 'true' };
        case CONSTANTS.CLOSE_MODAL:
            return { modal: 'false' };   
        default:
            return state;
    }
}