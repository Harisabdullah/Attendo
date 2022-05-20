import {View, Button, Text, TouchableOpacity} from 'react-native';
import styles from '../styles.js'

export default function Panel({ route, navigation }){
    const teacher = route.params;
    return(
        <View style={{flex:1, backgroundColor:"#F4FAFF"}}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop: 10,
                    marginLeft: 10,
                    marginBottom: 10,
                    color: '#08090A',
                }}
            >{teacher.name}</Text>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.customCard}
                    onPress={() => navigation.navigate('[Fill Info]', teacher)}
                >
                    <Text style={styles.button}>Generate a QR for new class</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.customCard}
                    onPress={() => navigation.navigate('Classes', teacher)}
                >
                    <Text style={styles.button}>View Classes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}