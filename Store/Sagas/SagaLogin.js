import { call, takeEvery, all, put } from 'redux-saga/effects';
import { authentication } from '../Services/Firebase';
import CONSTANTS from '../CONSTANTS';
import { ActionStopLoading, ActionOpenAlertResponse } from '../Actions/ActionApp';

const sagaRegisterEmployer = require('./SagaRegisterEmployer');
const loginInFirebase = ({ email, password }) =>
authentication.signInWithEmailAndPassword(email, password).then(success => success);

function* Login(values) {
  console.log('llega a login',values)
  try {
    const resultado = yield call(loginInFirebase, values.data);
    console.log(resultado);
    yield put(ActionStopLoading());
  } catch (error) {
    console.log(error);
    yield put(ActionOpenAlertResponse({msg:error,code:2}));
    yield put(ActionStopLoading());
  }
}

export const sagaLogin = [
  //take every listening to the dispatch
  takeEvery(CONSTANTS.LOGIN, Login) 
]

