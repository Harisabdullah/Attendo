import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./Components/LoginScreen";
// Student
import StudentPanel from './Components/Student/panel'
// Teacher
import TeacherPanel from './Components/Teacher/panel'
import FillInfoQR from './Components/Teacher/FillInfoQR'
import GenerateQR from './Components/Teacher/GenerateQR'
import Classes from "./Components/Teacher/Classes";
import Class from "./Components/Teacher/Class";
import {signUp} from "./Components/database/auth";
const Stack = createNativeStackNavigator();


export default function App() {
  // signUp({
  //     email: "sp20-bcs-008@cuilahore.edu.pk",
  //     password: "123456",
  //     type: "Student",
  //     name:"Ahmad Khan"
  // })



  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login [Student]">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Student Panel" component={StudentPanel} />
          <Stack.Screen name="Teacher Panel" component={TeacherPanel} />
          <Stack.Screen name="[Fill Info]" component={FillInfoQR} />
          <Stack.Screen name="QR" component={GenerateQR} />
          <Stack.Screen name="Classes" component={Classes}/>
          <Stack.Screen name="Class" component={Class} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
