import CONSTANTES from '../CONSTANTS';

export const ActionRegisterEmployer = data => ({
  type: CONSTANTES.REGISTEREMPLOYER,
  data,
});

export const ActionRegisterEmployee = data => ({
  type: CONSTANTES.REGISTEREMPLOYEE,
  data,
});