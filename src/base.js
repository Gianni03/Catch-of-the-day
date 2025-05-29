import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyDLPUDyf_8rn19XuA0egdAM-ASY6ViXau4",

  authDomain: "catch-of-the-day-92059.firebaseapp.com",

  databaseURL: "https://catch-of-the-day-92059-default-rtdb.firebaseio.com",

  projectId: "catch-of-the-day-92059",

  storageBucket: "catch-of-the-day-92059.firebasestorage.app",

  messagingSenderId: "923477571007",

  appId: "1:923477571007:web:2b4f84c27caa05f2825d0a",

  measurementId: "G-MCCK7PDKCW"

}
);

const base = Rebase.createClass(firebaseApp.database())

//name export
export { firebaseApp };

//default export
export default base;