import CONSTANTS from '../CONSTANTS';

export const ActionSetLocation = location => ({
    type: CONSTANTS.SET_LOCATION,
    location,
});

export const ActionSaveLocation = location => ({
    type: CONSTANTS.SAVE_LOCATION,
    location
});

export const ActionUpdateLocation = location => {
    return{
        type: CONSTANTS.UPDATE_LOCATION,
        location
    }
}
