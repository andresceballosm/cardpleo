import { call, takeEvery, put } from 'redux-saga/effects';
import { authentication, dataBase } from '../Services/Firebase';
import CONSTANTS from '../CONSTANTS';
import { ActionStopLoading, ActionOpenAlertResponse } from '../Actions/ActionApp';
import { ActionDataUser } from '../Actions/ActionDataUser';

    const getDataUser = userRef => 
        userRef.get()
        .then( (querySnapshot) => {
            var data = null;
            querySnapshot.forEach(function(doc) {            
                data = doc.data()
            })
            return data
        })
    const updateDataUser = (data) => {
        console.log(data);
        dataBase.collection('facilities').doc(data.idFacility).set(data.values)
        .then(success => success);}     

    const updateEmployerInDataBase = (data) => 
        dataBase.collection('employees').doc(`${data.id}`).update(data.values)
        .then(success => success);

    function* sagaGetDataUser(datas) {
        try {
            const { uid, typeUser } = datas.data;
            const userRef = dataBase.collection(`${typeUser}`).where("uid", "==", uid);
            const data = yield call(getDataUser, userRef);
            if(data !== null ){
                yield put(ActionDataUser(data));
            }
            yield put(ActionStopLoading());
        } catch (error) {
            console.log(error);
            yield put(ActionStopLoading());
            yield put(ActionOpenAlertResponse(error));
        }
    };

export const sagaDataUser= [
   //take every listening to the dispatch 
   takeEvery(CONSTANTS.GET_DATA_USER, sagaGetDataUser),
];

