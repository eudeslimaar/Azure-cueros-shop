import firebase from "firebase/comp/app";
import "firebase/comp/auth";
import "firebase/comp/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCb7MTgl-bOCObqE2ykDPqe4qBO1TJALFI",
    authDomain: "azure-cueros.firebaseapp.com",
    projectId: "azure-cueros",
    storageBucket: "azure-cueros.appspot.com",
    messagingSenderId: "770724643971",
    appId: "1:770724643971:web:7b04cee3019afb3a2987b6",
    measurementId: "G-CLB04156QV"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };