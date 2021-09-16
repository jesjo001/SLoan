import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
// import loginIcon from '@assets/login3.png'
// import loginIcon from '../assets/login3.png'
// import appIcon from '../assets/appicon2.png'
// import appIcon from '@assets/appIcon2.png'

export default function LoginButton({ textColor, buttonType, text, handleClick }) {

    if (buttonType && textColor) {
        return (

            <TouchableOpacity style={buttonStyle(buttonType)} onPress={handleClick}>
                <Text style={textStyle(textColor)}>{text}</Text>
            </TouchableOpacity>

        );
    }

}

buttonStyle = function (buttonType) {

    if (buttonType === "transparent") {
        return {
            backgroundColor: 'rgba(1, 10, 67, 0.9)',
            borderWidth: 1,
            borderColor: 'white',
            padding: 18,
            color: 'white',
            textAlign: 'center',
            alignItems: 'center',
            borderRadius: 10,
            width: 260,
            margin: 5,
        }
    }

    return {
        backgroundColor: `white`,
        padding: 20,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 250,
        margin: 5,
        marginTop: 10,
    }
}

textStyle = function (textColor) {

    if (textColor === "white") {
        return {
            color: 'white',
        }
    }

    return {
        color: 'black',
    }
}

