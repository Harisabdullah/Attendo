import React, { useState} from 'react';
import { Text, View, TextInput, Button} from 'react-native';
import styles from '../styles.js'


import {TimePicker} from "react-native-simple-time-picker";

export default function FillInfoQR({ route, navigation }){
    const [batch, setBatch] = useState('');
    const [department, setDepartment] = useState('');
    const [course, setCourse] = useState('');
    const [date, setDate] = useState('09-10-2020');

    const [selectedStartHours, setSelectedStartHours] = useState(0);
    const [selectedStartMinutes, setSelectedStartMinutes] = useState(0);

    const [selectedEndHours, setSelectedEndHours] = useState(0);
    const [selectedEndMinutes, setSelectedEndMinutes] = useState(0);

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = `${dd}-${mm}-${yyyy}`;

    const teacher = route.params;

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text>Batch (e.g SP22):</Text>
                <TextInput
                    type="text"
                    style={styles.inputQR}
                    onChangeText={(text) => setBatch(text.toUpperCase())}
                    value={batch}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Department (e.g CSE):</Text>
                <TextInput
                    type="text"
                    style={styles.inputQR}
                    onChangeText={(text)=> setDepartment(text.toUpperCase())}
                    value={department}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Course: (e.g MAD)</Text>
                <TextInput
                    type="text"
                    style={styles.inputQR}
                    onChangeText={(text)=> setCourse(text.toUpperCase())}
                    value={course}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Date:</Text>
                <View>
                    <TextInput
                        tyep="date"
                        style={styles.inputQR}
                        onChangeText={(text)=> setDate(text.toUpperCase())}
                        value={date}
                    />
                </View>
            </View>


            <View style={styles.inputContainer}>
                <Text>Start time Hours</Text>
                <View style={{width:"50%", ...styles.inputQR}}>
                    <View>
                        <TextInput
                            type="number"
                            style={styles.inputQR}
                            onChangeText={(text)=> setSelectedStartHours(text)}
                            value={selectedStartHours}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text>Start time Minutes</Text>
                <View style={{width:"50%", ...styles.inputQR}}>
                    <View>
                        <TextInput
                            type="number"
                            style={styles.inputQR}
                            onChangeText={(text)=> setSelectedStartMinutes(text)}
                            value={selectedStartMinutes}
                        />
                    </View>
                </View>
            </View>


            <View style={styles.inputContainer}>
                <Text>End time Hours</Text>
                <View style={{width:"50%", ...styles.inputQR}}>
                    <View>
                        <TextInput
                            style={styles.inputQR}
                            onChangeText={(text)=> setSelectedEndHours(text)}
                            value={selectedEndHours}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text>End time Minutes</Text>
                <View style={{width:"50%", ...styles.inputQR}}>
                    <View>
                        <TextInput
                            type="number"
                            style={styles.inputQR}
                            onChangeText={(text)=> setSelectedEndMinutes(text)}
                            value={selectedEndMinutes}
                        />
                    </View>
                </View>
            </View>
            <Button
                title="Generate QR"
                disabled={!batch || !department || !course || !date || !selectedStartHours  || !selectedEndHours}
                onPress={() => {
                    navigation.navigate('QR', {
                        batch: batch,
                        department: department,
                        course: course,
                        date: date,
                        startTime: `${selectedStartHours}:${selectedStartMinutes}`,
                        endTime: `${selectedEndHours}:${selectedEndMinutes}`,
                        teacher: teacher
                    })
                }}
            />
        </View>
    );
}