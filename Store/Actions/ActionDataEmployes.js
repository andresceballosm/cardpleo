import CONSTANTS from '../CONSTANTS';

export const ActionGetEmployes= data => {
    return {
    type: CONSTANTS.GET_EMPLOYES,
    data: data._data,
    }
};

export const ActionUpdateEmployee= (data) => {
    return {
        type: CONSTANTS.UPDATEDATAEMPLOYEE,
        data: data,
    }
};
