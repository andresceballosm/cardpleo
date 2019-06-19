import CONSTANTS from '../CONSTANTS';

export const ActionSetSesion = usuario => ({
  type: CONSTANTS.SET_SESION,
  usuario,
});
