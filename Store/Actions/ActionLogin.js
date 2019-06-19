import CONSTANTES from '../CONSTANTS';

export const ActionLogin = data => ({
    type: CONSTANTES.LOGIN,
    data,
  });