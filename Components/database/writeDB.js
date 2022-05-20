// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set , onValue} from "firebase/database"

import {firebaseConfig} from "./config";

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getDatabase();

export const writeData = (data,collection) => {
    // Write data to firestore
    set(ref(db, `${collection}`), data)
    .then(() => {
       console.log("Document successfully written!");
    })
    .catch((error) => {
        alert("Error writing document: ");
    });
}





