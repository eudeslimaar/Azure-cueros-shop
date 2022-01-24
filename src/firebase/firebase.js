import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCb7MTgl-bOCObqE2ykDPqe4qBO1TJALFI",
    authDomain: "azure-cueros.firebaseapp.com",
    projectId: "azure-cueros",
    storageBucket: "azure-cueros.appspot.com",
    messagingSenderId: "770724643971",
    appId: "1:770724643971:web:7b04cee3019afb3a2987b6",
    measurementId: "G-CLB04156QV"
};

const app=initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app)

export default db;