import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
// import loginIcon from '@assets/login3.png'
// import loginIcon from '../assets/login3.png'
// import appIcon from '../assets/appicon2.png'
// import appIcon from '@assets/appIcon2.png'

export default function WelcomePg({ navigation }) {
    return (

        <ImageBackground source={require('../assets/login3.png')} style={styles.container} >
            <View style={styles.contentContainer}>
                <View >
                    <Image source={require('../assets/appicon2.png')} style={styles.logo} />
                </View>
                <Text style={styles.text}>Welcome to SoftLoan</Text>
                <TouchableOpacity style={styles.button}  >
                    <Text>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2} >
                    <Text style={styles.textWhite}>Sign Up</Text>
                </TouchableOpacity>
                <StatusBar style="light" />
            </View>
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
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        marginBottom: 12,
    },
    button: {
        backgroundColor: 'white',
        padding: 18,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '80%',
        margin: 5,
    },
    button2: {
        backgroundColor: 'rgba(1, 10, 67, 0.9)',
        borderWidth: 1,
        borderColor: 'white',
        padding: 18,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '80%',
        margin: 5,
    },
    textWhite: {
        color: 'white',
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    }

});
