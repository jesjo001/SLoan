import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import GetStartedButton from './GetStartedButton';

export default function App() {
  return (

    <ImageBackground source={require('./assets/login3.png')} style={styles.container} >
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Welcome to SoftLoan</Text>
        <TouchableOpacity style={styles.button} >
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} >
          <Text>Register</Text>
        </TouchableOpacity>
        <StatusBar style="light" />
      </View>
      {/* <GetStartedButton /> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    margin: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '90%',
    height: '100%',
    margin: 0,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: 'white',
    padding: 12,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '60%',
    margin: 5,
  }

});
