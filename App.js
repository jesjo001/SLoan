import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePg from './components/WelcomePg';
import GetStarted from './components/GetStarted/GetStarted';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStarted"
        screenOptions={{
          headerShown: false
        }} >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Welcome" component={WelcomePg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}