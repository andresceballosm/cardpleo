import CONSTANTS from '../../CONSTANTS.js';

export default ReducerUploadImage = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.UPLOAD_IMAGE:
            return action.image;
        case CONSTANTS.CLEAN_IMAGE_LOGOCLUB:
            return null
        default:
            return state;
    }
}