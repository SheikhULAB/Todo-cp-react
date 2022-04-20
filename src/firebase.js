
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDPmeDb64NFZs9Ggg2pyC6y8PD6fMKXx5E",
        authDomain: "todo-app-cp-72785.firebaseapp.com",
        projectId: "todo-app-cp-72785",
        storageBucket: "todo-app-cp-72785.appspot.com",
        messagingSenderId: "914343896471",
        appId: "1:914343896471:web:658d93e4ef7deb8cca50d2",
        measurementId: "G-2LPXEE8HXR"
});

const db = firebaseApp.firestore();

export default db;
