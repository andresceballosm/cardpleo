import CONSTANTS from '../../CONSTANTS.js';

export default ReducerAlertResponse = (state = { alertResponse: false, alertResponseDelete: false, alertResponseUpdate: false  }, action) => {
    switch (action.type) {
        case CONSTANTS.OPEN_ALERTRESPONSE:
            return { alertResponse: true, response:action.response };
        case CONSTANTS.OPEN_ALERTRESPONSE_DELETE:
            return { alertResponseDelete: true, response:action.response };
        case CONSTANTS.OPEN_ALERTRESPONSE_UPDATE:
            return { alertResponseUpdate: true, response:action.response };
        case CONSTANTS.CLOSE_ALERTRESPONSE:
            return { alertResponse: false, alertResponseDelete: false, alertResponseUpdate: false, response:null };   
        default:
            return state;
    }
}