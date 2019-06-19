import CONSTANTS from '../CONSTANTS';

export const ActionSetLoading = () => ({
    type: CONSTANTS.SET_LOADING,
});

export const ActionStopLoading = () => ({
    type: CONSTANTS.STOP_LOADING,
});

export const ActionOpenModal = () => ({
    type: CONSTANTS.OPEN_MODAL,
});

export const ActionCloseModal = () => ({
    type: CONSTANTS.CLOSE_MODAL,
});

export const ActionOpenAlertResponse = response => ({
    type: CONSTANTS.OPEN_ALERTRESPONSE,
    response,
});

export const ActionOpenAlertResponseDelete = response => ({
    type: CONSTANTS.OPEN_ALERTRESPONSE_DELETE,
    response,
});

export const ActionOpenAlertResponseUpdate = response => ({
    type: CONSTANTS.OPEN_ALERTRESPONSE_UPDATE,
    response,
});

export const ActionCloseAlertResponse = () => ({
    type: CONSTANTS.CLOSE_ALERTRESPONSE,
});

export const ActionLoadImage = (image, uid, item) => ({
    type: CONSTANTS.LOAD_IMAGE,
    'image':image,
    'uid': uid,
    'item':item
});

export const ActionCleanImage = image => ({
    type: CONSTANTS.CLEAN_IMAGE_LOGOCLUB,
    image,
});

export const ActionLoadComplete = () => ({
    type: CONSTANTS.LOAD_COMPLETE,
});

export const ActionGetForm = form => ({
    type: CONSTANTS.GET_FORM,
    form,
});

export const ActionSetForm = form => ({
    type: CONSTANTS.SET_FORM,
    form,
});

export const ActionGetDataLanguage = () => ({
    type: CONSTANTS.GET_DATA_LANGUAGE,
});

export const ActionSetDataLanguage = (languages) => ({
    type: CONSTANTS.SET_DATA_LANGUAGE,
    languages
});






