import CONSTANTES from '../CONSTANTS';

export const ActionGetLanguage = (language) => ({
    type: CONSTANTES.GET_LANGUAGE,
    language
});