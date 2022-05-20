import { initializeApp } from "firebase/app";
import { getDatabase, ref , onValue} from "firebase/database"
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword  } from "firebase/auth";
import {firebaseConfig} from "./config";
import {writeData} from "./writeDB";


// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();

export const login = async (email, password) => signInWithEmailAndPassword(auth, email, password);
export const getUser = async (userCredential, callBack) => {
    const user = userCredential?.user;
    onValue(ref(db, 'users/' + user.uid), async (snapshot) => {
        callBack(snapshot.val());
    })
};

export const signUp = (newUser) => {
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
        .then(registeredUser => {
            delete newUser.password;
            writeData({uid: registeredUser.user.uid, ...newUser}, 'users/' + registeredUser.user.uid);
        })
};

export const signOut = auth.signOut();