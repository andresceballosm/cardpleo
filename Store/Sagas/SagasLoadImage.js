import { takeEvery, put, call } from 'redux-saga/effects';
import { storage, dataBase } from '../Services/Firebase';
import CONSTANTS from '../CONSTANTS';
import { ActionStopLoading, ActionOpenAlertResponse, ActionCleanImage } from '../Actions/ActionApp';
import { ActionGetUrlImage } from '../Actions/ActionGetUrlImage';

const route = (path) => {
    switch (path) {
        case CONSTANTS.PATH_LOGO_CLUB:
            return 'clubs'; 
        case CONSTANTS.PATH_IMAGE_COURT:
            return 'courts';  
        case CONSTANTS.PATH_IMAGE_SPONSOR:
            return 'sponsors';    
        case CONSTANTS.PATH_IMAGE_SERVICE:
            return 'services'; 
        case CONSTANTS.PATH_IMAGE_FACILITY:
            return 'facilities'; 
        case CONSTANTS.PATH_IMAGE_STAFF:
            return 'staff';        
        case CONSTANTS.PATH_IMAGE_PLAYER:
            return 'players';                     
        default:
            return null;
    }
}

const getDownloadURL = ref => 
    ref.getDownloadURL().then(urlImage => urlImage)

function* sagasLoadImage({image,uid,item}) {
    const { sourceURL, path } = image;
    var url = {};
    var pathImage = '';
    //IOS
    if (sourceURL !== undefined){
        pathImage = sourceURL;
    //ANDROID    
    }else{
        pathImage = path;
    }
    const pathFirebase = route(item);
    try {
        const storageRef = storage.ref().child("images/"+ item + "/" + uid);
        yield storageRef.put(pathImage).then(function(snapshot) {
            const ref = snapshot.ref;
            //var url = {};
            url[item] = ref;
            var docRef = dataBase.collection(pathFirebase).doc(`${uid}`);
            docRef.update(url);
        });
        //Update urlImage for logo club
        if(pathFirebase == 'clubs'){
            const refImage = storage.ref(url.LOGO_CLUB);
            const urlImage = yield call(getDownloadURL, refImage);
            yield put(ActionGetUrlImage(urlImage));
        }
        yield put(ActionStopLoading());
        yield put(ActionCleanImage());
    } catch (error) {
        console.log(error);
        yield put(ActionStopLoading());
       // yield put(ActionOpenAlertResponse(error));
    }
}

export const sagaLoadImage = [
   //take every listening to the dispatch
   takeEvery(CONSTANTS.LOAD_IMAGE, sagasLoadImage), 
];

