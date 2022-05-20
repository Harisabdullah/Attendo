import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button,TouchableOpacity } from 'react-native';
import styles from './styles.js'

import {getUser, login} from './database/auth'


export default function Login({ navigation }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const [buttonText, setButtonText] = useState("Login");
    useEffect(()=>{
        if(user?.type === "Student"){
            navigation.navigate("Student Panel", user);
        } else if (user?.type === "Teacher"){
            navigation.navigate("Teacher Panel", user);
        }
    }, [user])

    return(
        <View style={styles.container}>
            <Text>Email: e.g (SP20-BCS-029@cuilahore.edu.pk)</Text>
            <TextInput
                style={styles.input}
                onChangeText={(emailInput) => setEmail(emailInput)}
                value={email}>
            </TextInput>
            <Text>Password:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(passwordInput) => setPassword(passwordInput)}
                value={password}>
            </TextInput>
            <Button
                title={buttonText}
                onPress={async () => {
                    setButtonText("Logging in ...")
                    login(email, password)
                        .then((res)=>{
                            getUser(res, (user)=>{
                                setUser(user);
                                setButtonText("Log in");
                            })
                        })
                        .catch(()=>{
                            setButtonText("Could not login, Try again");
                        });

                }}
                disabled={buttonText === "Logging in ..."|| !email || !password}
            />
        </View>
    );
}