import CONSTANTS from '../CONSTANTS';

export const ActionGetUrlImage = urlImage => {
    return{
        type: CONSTANTS.GET_URL_IMAGE,
        urlImage,
    }

};