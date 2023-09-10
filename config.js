import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig={
    apiKey: "AIzaSyBdcMTQHuucKuIltaNQ8TsP8i_DD7GkLKA",
    authDomain: "notification-7b6e3.firebaseapp.com",
    projectId: "notification-7b6e3",
    storageBucket: "notification-7b6e3.appspot.com",
    messagingSenderId: "1000042516080",
    appId: "1:1000042516080:web:8a7924289420cd8d632eb5",
    measurementId: "G-299PMXG8C8"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}