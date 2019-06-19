import { call, takeEvery, put } from 'redux-saga/effects';
import { authentication, dataBase } from '../Services/Firebase';
import CONSTANTS from '../CONSTANTS';
import { ActionStopLoading, ActionOpenAlertResponse } from '../Actions/ActionApp';

const registerInFirebase = values =>
  authentication
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(success => success);

const registerUserInDataBase = ({ uid, email, firstname, lastname, phone }) => 
  dataBase.collection('users').doc(`${uid}`).set({
    email,
    firstname,
    lastname,
    phone,
    type:'employer', 
  })

  const registerEmployerInDataBase = ({ uid, email, firstname, phone, lastname, region, city, location }) => 
  dataBase.collection('employers').doc(`${uid}`).set({
    uid, email, firstname, phone, lastname, region, city, location,
    license:'free'
  })

  const updateEmployerInDataBase = (data) => 
    dataBase.collection('employers').doc(`${data.id}`).update(data.values)
    .then(success => success);

    
  
function* sagaRegister(values) {
    try {
      console.log('entra por sagaEmployes')
      //Register in firebase Authentication
      const register = yield call(registerInFirebase, values.data);
      //Get data
      const { email, uid } = register.user;
      const { data: { firstname, lastname, region, city, location, phone } } = values;
      //Register in database as USER
      yield call(registerUserInDataBase, { uid, email, firstname, lastname, phone });
      //Register in database as Employer
      yield call(registerEmployerInDataBase, { uid, email, firstname, phone, lastname, region, city, location });
      //Stop spin loading
      yield put(ActionStopLoading());
    } catch (error) {
      console.log(error);
      yield put(ActionStopLoading());
      yield put(ActionOpenAlertResponse(error));
    }
};



function* sagaUpdate(values) {
  const data = values.data;
  try {
    yield call(updateEmployerInDataBase, data);
    yield put(ActionGetDataEmployer(data.id));
    yield put(ActionStopLoading());
  } catch (error) {
    console.log(error);
    yield put(ActionStopLoading());
    yield put(ActionOpenAlertResponse(error));
  }
};


export const sagaEmployers= [
   //take every listening to the dispatch
   takeEvery(CONSTANTS.REGISTEREMPLOYER, sagaRegister), 
   takeEvery(CONSTANTS.UPDATEDATAEMPLOYER, sagaUpdate),
];

