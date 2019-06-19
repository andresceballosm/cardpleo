import { call, takeEvery, put } from 'redux-saga/effects';
import { authentication, dataBase } from '../Services/Firebase';
import CONSTANTS from '../CONSTANTS';
import { ActionStopLoading, ActionOpenAlertResponse } from '../Actions/ActionApp';
import { ActionGetDataUser } from '../Actions/ActionDataUser';

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
    type:'employee', 
  })

  const registerEmployeeInDataBase = ({ uid, email, firstname, phone, lastname, region, city, location }) => 
  dataBase.collection('employees').doc(`${uid}`).set({
    uid, email, firstname, phone, lastname, region, city, location,
    license:'free'
  })

  const updateEmployeeInDataBase = (data) => 
    dataBase.collection('employees').doc(`${data.uidUser}`).update(data.values)
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
      yield call(registerEmployeeInDataBase, { uid, email, firstname, phone, lastname, region, city, location });
      //Stop spin loading
      yield put(ActionStopLoading());
    } catch (error) {
      console.log(error);
      yield put(ActionStopLoading());
      yield put(ActionOpenAlertResponse(error));
    }
};



function* sagaUpdate(datos) {
  try {
      const { values, uidUser } = datos.data;
      yield call(updateEmployeeInDataBase, { values, uidUser });
      const typeUser = 'employees'
      const uid = uidUser
      yield put(ActionGetDataUser(uid,typeUser));
      yield put(ActionStopLoading());
  } catch (error) {
      console.log(error);
      yield put(ActionStopLoading());
      yield put(ActionOpenAlertResponse(error));
  }
};


export const sagaEmployes= [
   //take every listening to the dispatch
   takeEvery(CONSTANTS.REGISTEREMPLOYEE, sagaRegister), 
   takeEvery(CONSTANTS.UPDATEDATAEMPLOYEE, sagaUpdate)
];

