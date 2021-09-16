import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePg from './components/WelcomePg';
import GetStarted from './components/GetStarted/GetStarted';
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {

  const userLogin = (values) => {
    console.log("in user login");
    console.log(values);
  }

  const userSignUp = (values) => {
    console.log("in user login");
    console.log(values);
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStarted"
        screenOptions={{
          headerShown: false
        }} >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Welcome" component={WelcomePg} />
        <Stack.Screen name="Login">
          {props => <Login {...props} userLogin={userLogin} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp">
          {props => <SignUp {...props} userSignUp={userSignUp} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}