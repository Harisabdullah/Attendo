import {View } from 'react-native';
import styles from '../styles.js'

import SvgQRCode from 'react-native-qrcode-svg';
import {writeData} from "../database/writeDB"

export default function GenerateQR({ route, navigation }){
    const info = route.params;
    // Create a class on firebase
    // key == Teacher Email + Class Name + Batch No
    // writeData({name:"Alu"}, `classCollection/${info.course}${info.batch}${info.date}`);
    writeData(info, `classCollection/${info.teacher.uid}${info.course}${info.batch}${info.department}${info.date}`);

    return(
        <View style={styles.container}>
            <SvgQRCode value={`${info.batch}:${info.department}:${info.course}:${info.date}:${info.startTime}:${info.endTime}:${info.teacher.uid}`} />
        </View>
    );
}