import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from '../styles.js'

import SvgQRCode from "react-native-qrcode-svg";
import {ActivityIndicator, Card, Headline, Text, Title} from 'react-native-paper';
import {getMyAttendance} from "../database/readDB";

export default function Class({ route, navigation }){
    // Get all classes with teacher roll no.
    const attendanceInfo = route.params;

    const [isLoading, setIsLoading] = useState(false);
    const [attendance, setAttendance] = useState([]);
    useEffect(()=>{
        setIsLoading(true);
         getMyAttendance(attendanceInfo.key, (data) => {
            setAttendance(data);
            setIsLoading(false);
        });
    }, [attendance]);
    const info = attendanceInfo;
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <SvgQRCode value={`${info.batch}:${info.department}:${info.course}:${info.date}:${info.startTime}:${info.endTime}:${info.teacher.uid}`} />
            </View>
            <Headline>List of Student Present</Headline>
            {isLoading ? <ActivityIndicator> </ActivityIndicator> :
                <FlatList
                    data={attendance}
                    renderItem={({item}) => (
                        <Card
                            style={{
                                borderColor: 'gray',
                                borderWidth: 1,
                                margin: 5,
                                borderRadius: 5,
                            }}
                        >
                            <Card.Content
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 5,
                                }}
                            >
                                <Text style={{fontSize:10}}>{item.name}</Text>
                                <Text style={{fontSize:10}}>{item.email}</Text>
                                <Text style={{color:"green", fontSize:10}}>Present</Text>
                            </Card.Content>
                        </Card>
                    )}
                />
                }
        </View>
    );
}


