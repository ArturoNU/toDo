import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCLI9uKuM99AJJsuwDETPeu5sO123yf6qA",
    authDomain: "todolist-94097.firebaseapp.com",
    databaseURL: "https://todolist-94097.firebaseio.com",
    projectId: "todolist-94097",
    storageBucket: "todolist-94097.appspot.com",
    messagingSenderId: "870398036389",
    appId: "1:870398036389:web:8fc21ed39ce3d09e67004c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };