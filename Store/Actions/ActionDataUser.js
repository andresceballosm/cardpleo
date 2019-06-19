import CONSTANTS from '../CONSTANTS';

export const ActionGetDataUser= data => {
    return {
        type: CONSTANTS.GET_DATA_USER,
        data: data,
    }
};

export const ActionDataUser= (data) => {
    return {
        type: CONSTANTS.DATA_USER,
        data: data,
    }
};




