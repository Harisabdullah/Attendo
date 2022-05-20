import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from '../styles.js'
import {writeData} from "../database/writeDB";

export default function StudentPanel({route, navigation }) {
    const student = route.params;
    delete student.password;
    let attendanceInfo = null;
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        data = data.split(':');
        const dataPrepared = {
            batch: data[0],
            department: data[1],
            course: data[2],
            date: data[3],
            startTime: `${data[4]}:${data[5]}`,
            endTime: `${data[6]}:${data[7]}`,
            teacherUid: data[8],
        }
        // Mark attendance Now
        attendanceInfo = {...student, ...dataPrepared};
        if(!attendanceInfo.batch || !attendanceInfo.department || !attendanceInfo.course || !attendanceInfo.date || !attendanceInfo.startTime || !attendanceInfo.endTime || !attendanceInfo.teacherUid) {
            alert('Invalid QR Code');
            return(
                <View style={styles.container}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />
                    {scanned && <Button
                        title={'Tap to Scan Again'}
                        onPress={() => setScanned(false)} />}
                </View>
            )
        }
        // Store data to fireBase
        console.log(attendanceInfo);
        writeData(
            {...attendanceInfo,
                classUid: `${attendanceInfo.teacherUid}${attendanceInfo.course}${attendanceInfo.batch}${attendanceInfo.department}${attendanceInfo.date}`
            },
            `attendanceCollection/${attendanceInfo.uid}${attendanceInfo.course}${attendanceInfo.teacherUid}${attendanceInfo.date}`
        );
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button
                title={'Tap to Scan Again'}
                onPress={() => setScanned(false)} />}
        </View>
    );
}
