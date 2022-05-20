import React, { useState, useEffect } from 'react';
import { Text, View, FlatList,TouchableOpacity } from 'react-native';
import {ActivityIndicator, Card, Title} from 'react-native-paper';
import styles from '../styles.js'

import {getMyClasses} from "../database/readDB";


export default function Classes({ route, navigation }){
    // Get all classes with teacher roll no.
    const teacher = route.params;
    const [classes, setClasses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getMyClasses(teacher.uid, (data) => {
            setClasses(data);
            setIsLoading(false);
        });
    }, []);

    if(isLoading){
        return(
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }
    if(classes.length === 0 && !isLoading){
        return(
            <View style={styles.container}>
                <Title>No classes found :(</Title>
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={classes}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Class', item)
                    }}>
                        <Card style={{
                            margin:10,
                            padding:10,
                            borderRadius:10,
                            backgroundColor:'#fff',
                            width:300,
                        }}>
                            <Card.Content>
                                <Text>Course Code:{item.course}</Text>
                                <Text>Batch: {item.batch}</Text>
                                <Text>Department: {item.department}</Text>
                                <Text>Date: {item.date}</Text>
                                <Text>Time Duration: {item.startTime} - {item.endTime}</Text>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.key}
            />
        </View>
    );
}
