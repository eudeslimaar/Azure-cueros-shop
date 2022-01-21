import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCb7MTgl-bOCObqE2ykDPqe4qBO1TJALFI",
    authDomain: "azure-cueros.firebaseapp.com",
    projectId: "azure-cueros",
    storageBucket: "azure-cueros.appspot.com",
    messagingSenderId: "1:770724643971:web:7b04cee3019afb3a2987b6",
    appId: "G-CLB04156QV"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };