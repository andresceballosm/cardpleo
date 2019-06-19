import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBbxH8BVFRyFbVpy5Q7dHf8DhlHlGOT3ZU",
    authDomain: "cardpleo.firebaseapp.com",
    databaseURL: "https://cardpleo.firebaseio.com",
    projectId: "cardpleo",
    storageBucket: "cardpleo.appspot.com",
    messagingSenderId: "197712935464"
};
firebase.initializeApp(config);

export const authentication = firebase.auth();
export const dataBase = firebase.firestore();

