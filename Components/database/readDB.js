import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./config";
import {getDatabase, onValue, ref} from "firebase/database";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
export const getMyClasses = async (uid, callBack) => {
    const classRef = ref(db, 'classCollection/');
    onValue(classRef, (snapshot) => {
        const data = snapshot.val();
        if(!data){
            callBack([]);
            return;
        }
        let dataArray = Object.entries(data);
        const arr = dataArray.map(element =>{
            return({...element[1], key:element[0]});
        })

        callBack(arr.filter(element => element.teacher.uid === uid));
    });
};

export const getMyAttendance = async (classUid, callBack) => {
    const attendanceRef = ref(db, 'attendanceCollection/');
    onValue(attendanceRef, (snapshot) => {
        const data = snapshot.val();
        let dataArray = Object.entries(data);
        const arr = dataArray.map(element =>{
            return({...element[1], key:element[0]});
        })
        callBack(arr.filter(element => element.classUid === classUid));
    });
};